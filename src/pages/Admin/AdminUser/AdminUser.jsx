import React, { Fragment, useContext, useEffect, useState } from "react";
import { Modal, Table, notification } from "antd";

import {
  EditOutlined,
  DeleteOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";

import { userService } from "../../../services/user";
import AdminAddUser from "./AdminAddUser";
import AdminUpdateUser from "./AdminUpdateUser";

import { useSelector } from "react-redux";
import { LoadingContext } from "../../../contexts/LoadingContext";

export default function AdminUser() {
  const navigate = useNavigate();
  const [listUser, setListUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [delUser, setDelUser] = useState(false);
  const accountState = useSelector((state) => state.userReducer);

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [_, setLoading] = useContext(LoadingContext);

  useEffect(() => {
    fetchListUser();
  }, [showModal, delUser, showModal2]);

  const fetchListUser = async () => {
    setLoading({ isLoading: true });
    const userList = await userService.fetchGetListUserApi("");
    setListUser(userList.data.content);
    setDelUser(false);
    setLoading({ isLoading: false });
  };

  const handleOpenModalUpdate = (data) => {
    setLoading({ isLoading: true });
    setShowModal2(true);
    setSelectedUserId(data);
    setLoading({ isLoading: false });
  };

  const deleteUser = async (taiKhoan) => {
    if (window.confirm(`Bạn Muốn xóa Người Dùng ${taiKhoan}`)) {
      try {
        await userService.fetchUserDeleteApi(taiKhoan);

        notification.success({
          message: `Bạn Đã Xóa ${taiKhoan} Thành Công`,
          placement: "bottomRight",
          duration: 4,
        });
        setDelUser(true);
        navigate("/admin");
      } catch (error) {
        notification.warning({
          message: `Xóa ${taiKhoan} Không Thành Công`,
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
      title: "Họ Tên",
      dataIndex: "name",
      sorter: {
        compare: (a, b) => {
          let hoTenA = a.name.toLowerCase().trim();
          let hotenB = b.name.toLowerCase().trim();
          if (hoTenA > hotenB) {
            return 1;
          }
          return -1;
        },
      },
    },
    {
      title: "Hình Ảnh",
      dataIndex: "avatar",
      render: (_, user, idx) => {
        return (
          <Fragment key={idx}>
            <img
              src={user.avatar}
              alt={user.avatar}
              onError={(e) => {
                e.target.onError = null;
                e.target.src =
                  "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";
              }}
              style={{ width: 100, height: 100 }}
            />
          </Fragment>
        );
      },
    },
    {
      title: "Loại Người Dùng",
      dataIndex: "role",
      sorter: {
        compare: (a, b) => {
          let maLoaiNguoiDungA = a.role.toLowerCase().trim();
          let maLoaiNguoiDungB = b.role.toLowerCase().trim();
          if (maLoaiNguoiDungB > maLoaiNguoiDungA) {
            return 1;
          }
          return -1;
        },
      },
      filters: [
        {
          text: "Admin",
          value: "ADMIN",
        },
        {
          text: "User",
          value: "USER",
        },
      ],
      onFilter: (value, record) => record.role.startsWith(value),
      filterSearch: true,
      width: "10%",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Certification",
      dataIndex: "certification",
    },
    {
      title: "skill",
      dataIndex: "skill",
    },

    {
      title: "Action",
      dataIndex: "action",
      fixed: "right",
      render: (_, user) => {
        return (
          <Fragment>
            <CloseCircleOutlined
              style={{
                display:
                  accountState?.userInfo?.user?.id === user.id
                    ? "block"
                    : "none",
                fontSize: "33px",
                marginBottom: "15px",
                marginRight: "70px",
                color: "red",
              }}
            />

            <CloseCircleOutlined
              style={{
                display:
                  accountState?.userInfo?.user?.id === user.id
                    ? "block"
                    : "none",
                fontSize: "33px",
                marginRight: "70px",
                color: "red",
              }}
            />
            <NavLink
              key={1}
              className="mr-2 text-3xl"
              onClick={() => handleOpenModalUpdate(user.id)}
              style={{
                color: "blue",
                fontSize: "20px",
                display:
                  accountState?.userInfo?.user?.id === user.id
                    ? "none"
                    : "block",
              }}
            >
              <EditOutlined />
            </NavLink>

            <Modal
              open={showModal2}
              onCancel={() => setShowModal2(false)}
              okButtonProps={{ hidden: true }}
            >
              <AdminUpdateUser
                setShowModal2={setShowModal2}
                idtaiKhoan={selectedUserId}
              />
            </Modal>

            <span
              key={2}
              className="text-3xl"
              to="/"
              style={{
                cursor: "pointer",
                color: "red",
                fontSize: "20px",
                display:
                  accountState?.userInfo?.user?.id === user.id
                    ? "none"
                    : "block",
              }}
              onClick={() => deleteUser(user.id)}
            >
              <DeleteOutlined />
            </span>
          </Fragment>
        );
      },
      width: "10%",
    },
  ];

  const data = listUser.map((element, idx) => {
    return { ...element, key: `${idx}` };
  });

  const handleSearch = async (value) => {
    try {
      const findUser = await userService.fetchGetListUserApi(value);

      setListUser(findUser.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h3>DANH SÁCH NGƯỜI DÙNG</h3>

      <button
        className="btn btn-success"
        onClick={() => {
          setLoading({ isLoading: true });
          setShowModal(true);
          setLoading({ isLoading: false });
        }}
      >
        Thêm người dùng
      </button>

      <Modal
        open={showModal}
        onCancel={() => setShowModal(false)}
        okButtonProps={{ hidden: true }}
      >
        <AdminAddUser setShowModal={setShowModal} />
      </Modal>
      <Search
        placeholder="Nhập Tên Tài Khoản Cần Tìm"
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
