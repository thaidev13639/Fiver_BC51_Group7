import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { validate } from "../../ValidateYup/ValidateYup";
import { DatePicker, notification } from "antd";
import "../../css/style.css";
import { userService } from "../../services/user";
import moment from "moment";

export default function Register() {
  const navigate = useNavigate();
  const form = useFormik({
    initialValues: {
      id: 0,
      name: "",
      email: "",
      password: "",
      confirmPassWord: "",
      phone: "",
      birthday: "",
      gender: true,
      role: "USER",
      skill: ["string"],
      certification: ["string"],
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      try {
        const data = { ...values };
        delete data.confirmPassWord;
        await userService.fetRegisterApi(data);
        notification.success({
          message: "Đăng ký thành công",
        });
        navigate("/form/login");
      } catch (error) {
        notification.error({
          message: error?.response?.data?.content || "Đăng ký không thành công",
        });
      }
    },
  });

  const handleChangeDate = (date) => {
    if (date) {
      let dateMoment = moment(date.$d).format("DD-MM-YYYY")
      console.log(dateMoment)
      form.setFieldValue("birthday", dateMoment);
    }
  };

  return (
    <div className="register">
      <form className="form-register" onSubmit={form.handleSubmit}>
        <p className="title-register">Đăng Ký</p>
        <p className="message-register">
          Đăng ký ngay và sử dụng dịch vụ.
        </p>
        <label>
          <input
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            name="name"
            className={`input-register ${
              form.errors.name && form.touched.name ? "input-erorr" : ""
            }`}
            type="text"
            required
          />
          <span>Họ và tên </span>
          {form.errors.name && form.touched.name && (
            <span className="text-danger">{form.errors.name}</span>
          )}
        </label>
        <label>
          <input
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            name="email"
            className={`input-register ${
              form.errors.email && form.touched.email? "input-erorr" : ""
            }`}
            type="text"
            required
          />
          <span>Email </span>
          {form.errors.email && form.touched.email && (
            <span className="text-danger">{form.errors.email}</span>
          )}
        </label>
        
        <div className="flex-register">
          <label>
            <input
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              name="password"
              className={`input-register ${
                form.errors.password && form.touched.password? "input-erorr" : ""
              }`}
              type="text"
              required
              autoComplete="on"
            />
            <span>Mật Khẩu</span>
            {form.errors.password && form.touched.password && (
              <span className="text-danger">{form.errors.password}</span>
            )}
          </label>
          <label>
            <input
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              name="confirmPassWord"
              className={`input-register ${
                form.errors.confirmPassWord && form.touched.confirmPassWord
                  ? "input-erorr"
                  : ""
              }`}
              type="text"
              required
              autoComplete="on"
            />
            <span>Xác Nhận Mật Khẩu</span>
            {form.errors.confirmPassWord && form.touched.confirmPassWord && (
              <span className="text-danger">{form.errors.confirmPassWord}</span>
            )}
          </label>
        </div>
       
      
        <label>
          <input
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            name="phone"
            className={`input-register ${
              form.errors.phone && form.touched.phone ? "input-erorr" : ""
            }`}
            type="number"
            required
          />
          <span>Số Điện Thoại</span>
          {form.errors.phone && form.touched.phone && (
            <span className="text-danger">{form.errors.phone}</span>
          )}
        </label>

        <label>
        <p className="message-register">
         Ngày sinh : 
         <DatePicker
          format={"DD-MM-YYYY"}
          name="birthday"
         
         onChange={handleChangeDate}
        />
        </p>
        {form.errors.birthday && form.touched.birthday && (
            <span className="text-danger">{form.errors.birthday}</span>
          )}
        
        </label>
        <button type="submit" className="submit-register">
          Đăng Ký
        </button>
        <p className="signin-register">
          Đã có tài khoản ? <Link to="/form/login">Đăng Nhập</Link>{" "}
        </p>
      </form>
    </div>
  );
}
