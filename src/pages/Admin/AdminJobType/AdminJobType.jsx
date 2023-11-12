import React, { Fragment, useEffect, useState } from "react";
import { Modal, Table, notification } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { manageService } from "../../../services/manage";
import AdminAddJobType from "./AdminAddJobType";
import AdminUpdateJobType from "./AdminUpdateJobType";

export default function AdminJobType() {
  const navigate = useNavigate();
  const [listJobType, setListJobType] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [delJobType, setDelJobType] = useState(false);

  const [selectedJobTypeId, setSelectedJobtypeId] = useState(null);

  useEffect(() => {
    fetchListJobType();
  }, [showModal, delJobType, showModal2]);

  const fetchListJobType = async () => {
    const jobTypeList = await manageService.fetchGetListJobsType("");
    setListJobType(jobTypeList.data.content);
    setDelJobType(false)
  };

  const handleOpenModalUpdate = (data) => {
    setShowModal2(true);
    setSelectedJobtypeId(data);
  };

  const deleteJobType = async (jobType) => {
    if (window.confirm(`Bạn Muốn xóa loại công việc ${jobType}`)) {
      try {
        await manageService.fetchJobsTypeDeleteApi(jobType);

        notification.success({
          message: `Bạn Đã Xóa ${jobType} Thành Công`,
          placement: "bottomRight",
          duration: 4,
        });
        setDelJobType(true);
        navigate("/admin/jobtype");
      } catch (error) {
        notification.warning({
          message: `Xóa ${jobType} Không Thành Công`,
          placement: "bottomRight",
          duration: 4,
        });
      }
    }
  };
  const { Search } = Input;

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
        title: "Jobtype",
        dataIndex: "tenLoaiCongViec",
    },

    {
      title: "Action",
      dataIndex: "action",
      fixed: 'right',
      render: (_, jobType) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className="mr-2 text-3xl"
              onClick={() => handleOpenModalUpdate(jobType.id)}
              style={{ color: "blue", fontSize: "20px" }}
            >
              <EditOutlined />
            </NavLink>

            <Modal
              open={showModal2}
              onCancel={() => setShowModal2(false)}
              okButtonProps={{ hidden: true }}
            >
              <AdminUpdateJobType
                setShowModal2={setShowModal2}
                idJobType={selectedJobTypeId}
              />
            </Modal>

            <span
              key={2}
              className="text-3xl"
              to="/"
              style={{ cursor: "pointer", color: "red", fontSize: "20px" }}
              onClick={() => deleteJobType(jobType.id)}
            >
              <DeleteOutlined />
            </span>
          </Fragment>
        );
      },
      width: "10%",
    },
  ];

  const data = listJobType.map((element, idx) => {
    return { ...element, key: `${idx}` };
  });

  const handleSearch = async (value) => {
    console.log("Search term:", value);
    if(value){
      try {
        // setLoadingState({ isLoading: true });
        const findJobType = await manageService.fetchGetListJobsType(value);
          console.log(findJobType);
  
        setListJobType(findJobType.data.content.data);
       
  
        // setLoadingState({ isLoading: false });
      } catch (error) {
        console.log(error);
      }
    }else{
      fetchListJobType()
    }
  };

  return (
    <>
      <h3>DANH SÁCH LOẠI CÔNG VIỆC</h3>

      <button className="btn btn-success" onClick={() => setShowModal(true)}>
        Thêm Loại công việc
      </button>

      <Modal
        open={showModal}
        onCancel={() => setShowModal(false)}
        okButtonProps={{ hidden: true }}
      >
        <AdminAddJobType setShowModal={setShowModal} />
      </Modal>
      <Search
        placeholder="Nhập Loại Công Việc Cần Tìm"
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
        style={{ border: "1px solid #00000036" }}
      />
    </>
  );
}
