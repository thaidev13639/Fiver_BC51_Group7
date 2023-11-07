import React from "react";
import { DatePicker, Form, Input, Radio, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { userService } from "../../../services/user";
import { useFormik } from "formik";

import { validateInfo } from "../../../ValidateYup/ValidateYup";
import moment from "moment";

export default function AdminAddUser({ setShowModal }) {
   const navigate = useNavigate();
 

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: 0,
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      role: "",
      skill: ["string"],
      certification: ["string"],
    },
    validationSchema: validateInfo,
    onSubmit: async (values) => {
      console.log(values);
      try {
        await userService.fetchAddUser(values);
        setShowModal(false);
      
       
        notification.success({
          message: "Thêm Thành Công",
          placement: "bottomRight",
          duration: 5,
        });
   
        navigate("/admin")
        
         
      } catch (error) {
        console.log(error);
        notification.warning({
          message: error?.response?.data?.content || "Dữ liệu không đúng",
          placement: "bottomRight",
          duration: 2,
        });
      }
    },
  });

  const handleChangeDate = (date) => {
    if (date) {
      let dateMoment = moment(date.$d).format("DD-MM-YYYY")
      console.log(dateMoment)
      formik.setFieldValue("birthday", dateMoment);
    }
  };

  return (
    
    <Form
      className="px-4"
      onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
    >
      <h3 style={{ marginBottom: "5%", textTransform: "uppercase" }}>
        Thêm tài khoản
      </h3>

      <Form.Item label="Họ Tên">
        <Input
          style={{ width: "50%" }}
          name="name"
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.name && formik.touched.name && (
          <span className="text-danger">{formik.errors.name}</span>
        )}
      </Form.Item>
      <Form.Item label="Mật Khẩu">
        <Input
          style={{ width: "50%" }}
          name="password"
          onChange={formik.handleChange}
        />{" "}
        <br />
        {formik.errors.password && formik.touched.password && (
          <span className="text-danger">{formik.errors.password}</span>
        )}
      </Form.Item>
      <Form.Item label="Email">
        <Input
          style={{ width: "50%" }}
          name="email"
          onChange={formik.handleChange}
        />{" "}
        <br />
        {formik.errors.email && formik.touched.email && (
          <span className="text-danger">{formik.errors.email}</span>
        )}
      </Form.Item>
      <Form.Item label="SDT">
        <Input
          type="number"
          style={{ width: "50%" }}
          name="phone"
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.phone && formik.touched.phone && (
          <span className="text-danger">{formik.errors.phone}</span>
        )}
      </Form.Item>

      <Form.Item label="Ngày Sinh">
        <DatePicker
          format={"DD-MM-YYYY"}
          name="birthday"
         
         onChange={handleChangeDate}
        />
        {formik.errors.birthday && formik.touched.birthday && (
          <span className="text-danger">{formik.errors.birthday}</span>
        )}
      </Form.Item>

      <Form.Item label="Role" >
        <Radio.Group
        name="role"
        defaultValue="USER"
        onChange={formik.handleChange}
        >
          <Radio.Button value="USER">User</Radio.Button>
          <Radio.Button value="ADMIN">Admin</Radio.Button>
        
        </Radio.Group>
      
      </Form.Item>
      
      <Form.Item label="Action:"
       style={{ width: "100%" }}>
        <button className="btn btn-success ml-3" type="submit">
          Đăng Ký
        </button>
      </Form.Item>
    </Form>
  );
}
