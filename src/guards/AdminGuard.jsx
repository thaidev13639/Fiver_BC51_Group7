import { notification } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AdminGuard(props) {
  const navigate = useNavigate();
  const stateUser = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (!stateUser.userInfo) {
      navigate("/form/login");
      notification.warning({
        message: "Vui Lòng Đăng Nhập",
        placement: "topLeft",
        duration: 2,
      });
    } else {
      if (stateUser.userInfo.user.role === "ADMIN") {
        notification.success({
          message: `Wellcome back!! ${stateUser.userInfo.user.name}`,
          placement: "topLeft",
          duration: 1.5,
        });
      } else {
        notification.warning({
          message: "Bạn Không Đủ Quyền Truy Cập",
          placement: "topLeft",
          duration: 2,
        });
        navigate("/");
      }
    }
  }, [navigate,stateUser.userInfo]);
  return <>{props.children}</>;
}
