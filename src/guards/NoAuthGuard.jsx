import { notification } from "antd";
import React, { useEffect } from "react";
//import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function NoAuthGuard(props) {
  const navigate = useNavigate();
 // const stateUser = useSelector((state) => state.userReducer);
 // const data = localStorage.getItem("INFO_ACCOUNT");
  useEffect(() => {
    
    const data = JSON.parse(localStorage.getItem("INFO_ACCOUNT"));
    if (data) {
      //console.log(data.user.role);
      if(data.user.role ==="USER") {
        navigate("/");
        notification.warning({
          message: "Đăng Xuất Trước Khi Thao Tác",
          duration: 3,
          placement: "topLeft",
        });
      }else if(data.user.role ==="ADMIN") {
        navigate("/admin");
        notification.warning({
          message: "Đăng Xuất Trước Khi Thao Tác",
          duration: 3,
          placement: "topLeft",
        });
      }
     
    }
  }, [navigate]);
  return <>{props.children}</>;
}
