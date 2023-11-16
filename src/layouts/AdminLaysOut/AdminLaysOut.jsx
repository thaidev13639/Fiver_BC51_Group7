import { NavLink, Outlet, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../../css/style.css";
import { ThunderboltFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconavatar from "../../images/img_avatar.png";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  IdcardFilled,
  MessageFilled,
} from "@ant-design/icons";
import {
  Dropdown,
  Layout,
  Menu,
  Popover,
  Space,
  notification,
  theme,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux-toolkit/reducer/userReducer";
import { faBolt, faSquareCaretDown } from "@fortawesome/free-solid-svg-icons";

const { Header, Content, Footer, Sider } = Layout;

export default function AdminLaysOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const [src, setSrc] = useState("");
  const accountState = useSelector((state) => state.userReducer);

  useEffect(() => {
    //await accountState
    if (accountState) {
      // Sử dụng hình khác
      setSrc(accountState?.userInfo?.user?.avatar);
    } else {
      // Lấy data api tu redux
      setSrc(iconavatar);
      // ...
    }
  }, [accountState]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items2 = [
    getItem("Home", "/", <PieChartOutlined />),
    getItem("User", "/admin", <UserOutlined />),
    getItem("Job", "", <DesktopOutlined />, [
      getItem("Job", "/admin/job"),
      getItem("Job Type", "/admin/jobtype"),
      getItem("Detail Type", "/admin/detailtype"),
    ]),
    getItem("Service", "/admin/service", <IdcardFilled />),
    getItem("Comment", "/admin/comment", <MessageFilled />),
    getItem("Logout", "logout", <FileOutlined />),
  ];

  const items = [
    {
      key: "1",
      label:  <NavLink className="nav-link" to={`/home-info-user/${accountState?.userInfo?.user?.id}`}>Cập nhật thông tin</NavLink>,
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          className="ml-3"
          onClick={() => {
            const result = window.confirm("Bạn Muốn Đăng Xuất??");
            if (result) {
              dispatch(loginAction.SET_INFO_USER(null));
              localStorage.removeItem("INFO_ACCOUNT");
              notification.success({
                message: "Đăng Xuất Thành Công",
                placement: "topLeft",
                duration: 2,
              });
              navigate("/");
            }
          }}
        >
          Log out
        </a>
      ),
    },
  ];
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <div className="logo-admin p-3">
          <NavLink style={{ color: "white", textDecoration: "none" }} to="/">
            {" "}
            <span>Fiverr</span>{" "}
            <FontAwesomeIcon className="icon" icon={faBolt} />
          </NavLink>
        </div>

        <Menu
          onClick={({ key }) => {
            if (key === "logout") {
              const result = window.confirm("Bạn Muốn Đăng Xuất??");
              if (result) {
                dispatch(loginAction.SET_INFO_USER(null));
                localStorage.removeItem("INFO_ACCOUNT");
                notification.success({
                  message: "Đăng Xuất Thành Công",
                  placement: "topLeft",
                  duration: 2,
                });
                navigate("/");
              }
            } else {
              navigate(key);
            }
          }}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items2}
        />
      </Sider>
      <Layout style={{ backgroundColor: "#cbf6e1" }}>
        <Header
          className="header-admin-fixed"
          style={{
            padding: 0,
            background: colorBgContainer,
            // backgroundColor: "#cbf6e1"
          }}
        >
          <div className="header-admin ">
            <div className="left">
              <a
                className="navbar-brand name-home d-flex mr-3"
                style={{ color: "black" }}
                href="/"
              >
                <span className="mr-1">Fiverr</span>{" "}
                <ThunderboltFilled className="logo-home" />
              </a>
            </div>

            <div className="user-logo">
              <Dropdown
                menu={{
                  items,
                }}
                className="ml-2"
              >
                <Space>
                  <div className="chip" style={{ cursor: "pointer" }}>
                    <img
                      className="mr-2"
                      src={src}
                      alt="Person"
                      onError={(e) => {
                        e.target.onError = null;
                        e.target.src =
                          "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";
                      }}
                    />

                    <p className="mr-2">
                      {" "}
                      {accountState?.userInfo?.user?.name}
                    </p>
                    <FontAwesomeIcon
                      icon={faSquareCaretDown}
                      size="xl"
                      style={{ marginTop: "7px" }}
                    />
                  </div>
                </Space>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "6% 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              marginTop: "1%",
              backgroundColor: "#cbf6e1",
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#cbf6e1",
          }}
        >
          Fiver ©2023 Created by Hoang Anh and Thai
        </Footer>
      </Layout>
    </Layout>
  );
}
