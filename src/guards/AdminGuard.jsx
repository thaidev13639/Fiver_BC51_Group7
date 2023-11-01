import { notification } from "antd";
import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function AdminGuard(props) {
  const navigate = useNavigate();
 

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("INFO_ACCOUNT"));
    if (!data) {
      navigate("/form/login");
      notification.warning({
        message: "Vui Lòng Đăng Nhập Tài Khoản Admin",
        placement: "topLeft",
        duration: 3,
      });
    } else {
      if (data.user.role === "ADMIN") {
        notification.success({
          message: `Wellcome back!! ${data.user.name}`,
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
  }, [navigate]);
  return <>{props.children}</>;
}
