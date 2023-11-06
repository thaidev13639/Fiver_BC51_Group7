import React, { Fragment, useEffect, useState } from "react";
import { Button, Modal, Table, notification } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
// import { LoadingContext } from "../../../../contexts/LoadingContext/LoadingContext";
import { userService } from "../../../services/user";
import AdminAddUser from "./AdminAddUser";

export default function AdminUser() {
  const navigate = useNavigate();
  const [listUser, setListUser] = useState([]);
  const [search, setSearch] = useState("");
   const [ showModal, setShowModal] =useState(false);

  useEffect(() => {
    fetchListUser();
  }, []);

  const fetchListUser = async () => {
    const userList = await userService.fetchGetListUserApi("");
    setListUser(userList.data.content);
  };

  // const handleOpenModal = () => {
  //   setShowModal(true);
  // };

  const deleteUser = async (taiKhoan) => {
    if (window.confirm(`Bạn Muốn xóa Người Dùng ${taiKhoan}`)) {
      try {
        await userService.fetchUserDeleteApi(taiKhoan);
        notification.success({
          message: `Bạn Đã Xóa ${taiKhoan} Thành Công`,
          placement: "topLeft",
          duration: 2,
        });
      } catch (error) {
        notification.warning({
          message: `Xóa ${taiKhoan} Không Thành Công`,
          placement: "topLeft",
          duration: 2,
        });
      }
    }
    navigate("/admin");
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
      render: (_, user) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className="mr-2 text-3xl"
              to={`/admin/user-edit/${user.taiKhoan}`}
              style={{ color: "blue", fontSize: "20px" }}
            >
              <EditOutlined />
            </NavLink>
            <Button onClick={() => setShowModal(true)}>Open Modal</Button>

            <Modal open={showModal} onCancel={() => setShowModal(false)}>
              <AdminAddUser setShowModal={setShowModal} idtaiKhoan={user.id} />
              <p>This is the child component.</p>
              
            </Modal>

            <span
              key={2}
              className="text-3xl"
              to="/"
              style={{ cursor: "pointer", color: "red", fontSize: "20px" }}
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

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const onSearch = async (value) => {
    try {
      // setLoadingState({ isLoading: true });
      const findUser = await userService.fetchGetListUserApi(value);

      setListUser(findUser.data.content);

      // setLoadingState({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h3>DANH SÁCH NGƯỜI DÙNG</h3>

      <button
        className="btn btn-success"
        onClick={() => navigate("/admin/user-add")}
      >
        Thêm người dùng
      </button>
      <Search
        placeholder="Nhập Tên Tài Khoản Cần Tìm"
        style={{ margin: "20px 0", color: "red" }}
        onChange={handleChange}
        onSearch={onSearch(search)}
        enterButton
      />
      <Table
        columns={columns}
        dataSource={data}
        style={{ border: "1px solid #00000036" }}
      />
    </>
  );
}
