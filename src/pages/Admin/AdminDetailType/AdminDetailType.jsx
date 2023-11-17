import React, { Fragment, useEffect, useState } from "react";
import { Button, Dropdown, Menu, Modal, Space, Table, notification } from "antd";
import { EditOutlined, DeleteOutlined ,DownOutlined} from "@ant-design/icons";
import { Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { manageService } from "../../../services/manage";
import AdminAddDetailType from "./AdminAddDetailType";
import AdminUpdateDetailType from "./AdminUpdateDetailType";

export default function AdminDetailType() {
  const navigate = useNavigate();
  const [listDetailJobType, setListDetailJobType] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [deldetailJobType, setDelDetailJobType] = useState(false);

  const [slcJobDetailTypeId, setSlcDetailJobtypeId] = useState(null);

  useEffect(() => {
    fetchDetailListJobType();
  }, [showModal, deldetailJobType, showModal2]);

  const fetchDetailListJobType = async () => {
    const detailjobTypeList = await manageService.fetchGetListDetailType("");
    setListDetailJobType(detailjobTypeList.data.content);
    setDelDetailJobType(false);
  };

  const handleOpenModalUpdate = (data) => {
    setShowModal2(true);
    setSlcDetailJobtypeId(data);
  };

  const deleteDetailJobType = async (detailType) => {
    if (window.confirm(`Bạn Muốn xóa loại công việc ${detailType}`)) {
      try {
        await manageService.fetchDelDetailTypeApi(detailType);

        notification.success({
          message: `Bạn Đã Xóa ${detailType} Thành Công`,
          placement: "bottomRight",
          duration: 4,
        });
        setDelDetailJobType(true);
        navigate("/admin/detailtype");
      } catch (error) {
        notification.warning({
          message: `Xóa ${detailType} Không Thành Công`,
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
      title: "Tên Nhóm",
      dataIndex: "tenNhom",
      sorter: {
        compare: (a, b) => {
          let hoTenA = a.tenNhom.toLowerCase().trim();
          let hotenB = b.tenNhom.toLowerCase().trim();
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
      render: (_, detail, idx) => {
        return (
          <Fragment key={idx}>
            <img
              src={detail.hinhAnh}
              alt={detail.hinhAnh}
              style={{ width: 100, height: 100 }}
              onError={(e) => {
                e.target.onError = null;
                e.target.src =
                  "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";
              }}
            />
          </Fragment>
        );
      },
    },
    {
      title: "Mã loại công việc",
      dataIndex: "maLoaiCongviec",
    },
    {
      title: "Danh sách chi tiết loại",
      dataIndex: "dsChiTietLoai",
      render: (_, detail, idx) => {
        
        const data = [...detail.dsChiTietLoai];
       
        const items = [];
        data.forEach((item) => {
          items.push({
            key: item.id,
            label:( <p>{item.tenChiTiet} </p>)
          });
        });
        
          return (
            <Fragment key={idx}>
              <Dropdown
              size="large"
             
              
                menu={{
                  items,
                }}
                placement="bottom" arrow
              >
                {/* <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    {detail.tenNhom}
                   
                  </Space>
                </a> */}
                <Button>
        <Space>
        {detail.tenNhom} |
          <DownOutlined />
        </Space>
      </Button>
              </Dropdown>
              
            </Fragment>
          );
        },

      },
    

      {
        title: "Action",
        dataIndex: "action",
        fixed: 'right',
        render: (_, detail) => {
          return (
            <Fragment>
              <NavLink
                key={1}
                className="mr-2 text-3xl"
                onClick={() => handleOpenModalUpdate(detail.id)}
                style={{ color: "blue", fontSize: "20px" }}
              >
                <EditOutlined />
              </NavLink>

              <Modal
                open={showModal2}
                onCancel={() => setShowModal2(false)}
                okButtonProps={{ hidden: true }}
              >

                 <AdminUpdateDetailType
                   setShowModal2={setShowModal2}
                  idDetailType={slcJobDetailTypeId}
                />
              </Modal>

              <span
                key={2}
                className="text-3xl"
                to="/"
                style={{ cursor: "pointer", color: "red", fontSize: "20px" }}
                onClick={() => deleteDetailJobType(detail.id)}
              >
                <DeleteOutlined />
              </span>
            </Fragment>
          );
        },
        width: "10%",
      },
  ];
  const handleSearch = async (value) => {
    
    if(value) {
      try {
        // setLoadingState({ isLoading: true });
        const findDetailType = await manageService.fetchGetListDetailType(value);
      
        setListDetailJobType(findDetailType.data.content.data);
  
        // setLoadingState({ isLoading: false });
      } catch (error) {
        console.log(error);
      }
    }else{
      fetchDetailListJobType()
    }
   
  };

  const data = listDetailJobType.map((element, idx) => {
    return { ...element, key: `${idx}` };
  });
  return (
    <>
      <h3>DANH SÁCH CHI TIẾT LOẠI</h3>

      <button className="btn btn-success" onClick={() => setShowModal(true)}>
        Thêm Chi Tiết Loại
      </button>

      <Modal
        open={showModal}
        onCancel={() => setShowModal(false)}
        okButtonProps={{ hidden: true }}
      >
        <AdminAddDetailType setShowModal={setShowModal} />
      </Modal>

      <Search
        placeholder="Nhập Tên nhóm của loại công việc"
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
