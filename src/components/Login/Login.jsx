import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import { EyeOutlined } from "@ant-design/icons";
import "../../css/style.css";
import { loginAction } from "../../redux-toolkit/reducer/userReducer";
import { userService } from "../../services/user";


export default function Login() {
  const [account, setAcount] = useState({
    email: "",
    password: "",
  });
  const [pasword, setPassword] = useState("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setAcount({
      ...account,
      [event.target.name]: event.target.value,
    });
  };
  const handlePass = () => {
    if (pasword === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await userService.fetLoginApi(account);
      notification.success({
        message: "Đăng Nhập Thành Công!!",
        placement: "topLeft",
        duration: 2,
      });
      dispatch(loginAction.SET_INFO_USER(user.data.content));
      localStorage.setItem("INFO_ACCOUNT", JSON.stringify(user.data.content));
      const data = JSON.parse(localStorage.getItem("INFO_ACCOUNT"));
      if (data.user.role === "USER") {
        navigate("/");
      } else {
        navigate("/admin");
      }




    } catch (error) {

      notification.error({
        message: error?.response?.data?.content || "Đăng Nhập Không Thành Công",
        placement: "topLeft",
        duration: 2.5,
      });
    }
  };

  return (
    <div className="card-login">
      <div className="card2-login">
        <form onSubmit={handleSubmit} className="form-login">
          <p id="heading-login">Login</p>
          <div className="field-login">
            <input
              onChange={handleChange}
              name="email"
              type="text"
              className="input-field-login"
              placeholder="Email"
              autoComplete="on"
            />
          </div>
          <p className="text-success ml-3"> </p>
          <div className="field-login">
            <input
              onChange={handleChange}
              name="password"
              type={pasword}
              className="input-field-login"
              placeholder="Password"
              autoComplete="on"
            />
            <EyeOutlined onClick={() => handlePass()} />
          </div>
          <p className="text-success ml-3"></p>
          <div className="btn-login">
            <button className="button1-login btn-login-total ">Login</button>
            <button
              className="button2-login btn-login-total "
              onClick={() => navigate("/form/register")}>
              Sign Up
            </button>
          </div>
          <button type="button" className="button3-login">Forgot Password</button>
        </form>
      </div>
    </div>
  );
}
