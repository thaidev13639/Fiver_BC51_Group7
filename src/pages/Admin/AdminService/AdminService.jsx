import React, { Fragment, useEffect, useState } from "react";
import {  Modal, Table, notification } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { NavLink, useNavigate } from "react-router-dom";
import { manageService } from "../../../services/manage";
import AdminAddService from "./AdminAddService";
import AdminUpdateService from "./AdminUpdateService";

export default function AdminService() {
  const navigate = useNavigate();
  const [listService, setListService] = useState([]); 
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [delService, setDelService] = useState(false);

  const [selectedServiceId, setSelectedServiceId] = useState(null);
  useEffect(() => {
    fetchListService();
    
  }, [showModal, showModal2,delService]);

  const fetchListService = async () => {
    const serviceList = await manageService.fetchGetListHireJobS("");
    setListService(serviceList.data.content);
    setDelService(false);
    
  };

  const handleOpenModalUpdate = (data) => {
    setShowModal2(true);
    setSelectedServiceId(data);
  };

  const deleteService = async (Service) => {
    if (window.confirm(`Bạn muốn xóa công việc này ${Service}`)) {
      try {
        await manageService.fetchHireJobsDeleteApi(Service);

        notification.success({
          message: `Bạn Đã Xóa ${Service} Thành Công`,
          placement: "bottomRight",
          duration: 4,
        });
        setDelService(true);
        navigate("/admin/Service");
        
      } catch (error) {
        notification.warning({
          message: `Xóa ${Service} Không Thành Công`,
          placement: "bottomRight",
          duration: 4,
        });
      }
    }
  };

  // const { Search } = Input;


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
      title: "Mã Công Việc",
      dataIndex: "maCongViec",
    },
    {
      title: "Mã Người Thuê",
      dataIndex: "maNguoiThue",
    },
    {
      title: "Ngày Thuê",
      dataIndex: "ngayThue",
    },
    {
      title: "Hoàn Thành",
      dataIndex: "hoanThanh",
      key: 'hoanThanh',
      render: (text) => {
        if (text === true) {
          return <span style={{ color: 'green',fontSize:'15px',fontWeight:'700' }}>Hoàn thành</span>;
        } else {
          return <span style={{ color: 'red',fontSize:'15px',fontWeight:'700' }}>Chưa thực hiện</span>;
        }
      },
    },
   
    {
      title: "Action",
      dataIndex: "action",
      fixed: 'right',
      render: (_, service) => {
        return <Fragment>
          <NavLink
              key={1}
              className="mr-2 text-3xl"
              onClick={() => handleOpenModalUpdate(service.id)}
              style={{ color: "blue", fontSize: "20px" }}
            >
              <EditOutlined />
            </NavLink>

            <Modal
              open={showModal2}
              onCancel={() => setShowModal2(false)}
              okButtonProps={{ hidden: true }}
            >
              
               <AdminUpdateService
                 setShowModal2={setShowModal2}
                serviceId={selectedServiceId}
              /> 
            </Modal>

            <span
              key={2}
              className="text-3xl"
              to="/"
              style={{ cursor: "pointer", color: "red", fontSize: "20px" }}
              onClick={() => deleteService(service.id)}
            >
              <DeleteOutlined />
            </span>
        </Fragment>;
      },
      width: "10%",
    },
  ];

  const data = listService.map((element, idx) => {
    return { ...element, key: `${idx}` };
  });       

  return (
    <>
    <h3>DANH SÁCH THUÊ CÔNG VIỆC</h3>

    <button className="btn btn-success"
     style={{ margin: "20px 0"}}
    onClick={() => setShowModal(true)}>
      Thêm Công Việc Thuê
    </button>

    <Modal
      open={showModal}
      onCancel={() => setShowModal(false)}
      okButtonProps={{ hidden: true }}
    >
      
      <AdminAddService setShowModal={setShowModal}/>
    </Modal>

    {/* <Search
      placeholder="Nhập Tên Service Cần Tìm"
      style={{ margin: "20px 0", color: "red" }}
      onSearch={handleSearch}
      enterButton
    /> */}
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
  )
}
