import React, { Fragment, useEffect, useState } from "react";
import { Modal, Table, notification } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { manageService } from "../../../services/manage";
import AdminUpdateJob from "./AdminUpdateJob";
import AdminAddJob from "./AdminAddJob";
// import { LoadingContext } from "../../../../contexts/LoadingContext/LoadingContext";

export default function AdminJob() {
  const navigate = useNavigate();
  const [listJob, setListJob] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [delJob, setDelJob] = useState(false);

  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    fetchListJob();
    
  }, [showModal, showModal2,delJob]);

  const fetchListJob = async () => {
    const jobList = await manageService.fetchGetListJobS("");
    setListJob(jobList.data.content);
    setDelJob(false);
    // console.log(listJob);
  };

  const handleOpenModalUpdate = (data) => {
    setShowModal2(true);
    setSelectedJobId(data);
  };

  const deleteJob = async (job) => {
    if (window.confirm(`Bạn muốn xóa công việc này ${job}`)) {
      try {
        await manageService.fetchJobsDeleteApi(job);

        notification.success({
          message: `Bạn Đã Xóa ${job} Thành Công`,
          placement: "bottomRight",
          duration: 4,
        });
        setDelJob(true);
        navigate("/admin/job");
        
      } catch (error) {
        notification.warning({
          message: `Xóa ${job} Không Thành Công`,
          placement: "bottomRight",
          duration: 4,
        });
      }
    }
  };

  const { Search } = Input;

  const handleSearch = async (value) => {
    console.log("Search term:", value);
    if(value){
      try {
        // setLoadingState({ isLoading: true });
        const findJob = await manageService.fetchGetListJobS(value);
  
        const resultSearchJob = findJob.data.content;
        console.log(resultSearchJob)
       
          const congViecArr = resultSearchJob.map((object) => object.congViec);
          setListJob(congViecArr);
        
        
  
        // setLoadingState({ isLoading: false });
      } catch (error) {
        console.log(error);
      }
    }else{
      fetchListJob()
    }
  
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: {
        compare: (a, b) => {
          let taiKhoanA = a.id;
          let taiKhoanB = b.id;
          if (taiKhoanA > taiKhoanB) {
            return 1;
          }
          return -1;
        },
      },
      width: "15%",
    },
    {
      title: "Tên công việc",
      dataIndex: "tenCongViec",
      sorter: {
        compare: (a, b) => {
          let hoTenA = a.tenCongViec.toLowerCase().trim();
          let hotenB = b.tenCongViec.toLowerCase().trim();
          if (hoTenA > hotenB) {
            return 1;
          }
          return -1;
        },
      },
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      render: (_, film, idx) => {
        return (
          <Fragment key={idx}>
            <img
              src={film.hinhAnh}
              alt={film.hinhAnh}
              style={{ width: 100, height: 100 }}
            />
          </Fragment>
        );
      },
    },
    {
      title: "Discription",
      dataIndex: "moTa",
    },
    {
      title: "$Price",
      dataIndex: "giaTien",
    },
    {
      title: "Rate",
      dataIndex: "saoCongViec",
    },
    {
      title: "Action",
      dataIndex: "action",
      fixed: 'right',
      render: (_, job) => {
        return <Fragment>
          <NavLink
              key={1}
              className="mr-2 text-3xl"
              onClick={() => handleOpenModalUpdate(job.id)}
              style={{ color: "blue", fontSize: "20px" }}
            >
              <EditOutlined />
            </NavLink>

            <Modal
              open={showModal2}
              onCancel={() => setShowModal2(false)}
              okButtonProps={{ hidden: true }}
            >
              
               <AdminUpdateJob
                 setShowModal2={setShowModal2}
                jobId={selectedJobId}
              /> 
            </Modal>

            <span
              key={2}
              className="text-3xl"
              to="/"
              style={{ cursor: "pointer", color: "red", fontSize: "20px" }}
              onClick={() => deleteJob(job.id)}
            >
              <DeleteOutlined />
            </span>
        </Fragment>;
      },
      width: "10%",
    },
  ];
                                             
  const data = listJob.map((element, idx) => {
    return { ...element, key: `${idx}` };
  });                                                                                                      
                                                                                                                                                                                                                                                                                                                                                            
  return (
    <>
      <h3>DANH SÁCH JOB</h3>

      <button className="btn btn-success" onClick={() => setShowModal(true)}>
        Thêm Job
      </button>

      <Modal
        open={showModal}
        onCancel={() => setShowModal(false)}
        okButtonProps={{ hidden: true }}
      >
        
        <AdminAddJob setShowModal={setShowModal}/>
      </Modal>

      <Search
        placeholder="Nhập Tên Job Cần Tìm"
        style={{ margin: "20px 0", color: "red" }}
        onSearch={handleSearch}
        enterButton
      />
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1100,
          y: 500,
        }}
        bordered
        style={{ border: "1px solid #00000036" }}
      />
    </>
  );
}
