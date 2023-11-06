import React from 'react'
import { Button, Form, Input, notification } from "antd";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../../../services/user";
import { useFormik } from "formik";

import { validateInfo } from '../../../ValidateYup/ValidateYup';
import moment from 'moment/moment';

export default function AdminAddUser({ setShowModal,idtaiKhoan}) {
    const navigate = useNavigate()
    const [userDetail, setUserDetail] = useState({})
  
  
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
        skill: [
          "string"
        ],
        certification: [
          "string"
        ]
      },
      validationSchema: validateInfo,
      onSubmit: async (values) => {
          console.log(values)
          try {
              await userService.fetchAddUser(values)
              notification.success({
                  message: "Đăng ký Thành Công",
                  placement: "bottomRight",
                  duration: 2
              })
              navigate("/admin")
          } catch (error) {
              console.log(error)
              notification.warning({
                  message: error?.response?.data?.content || "Dữ liệu không đúng",
                  placement: "bottomRight",
                  duration: 2
              })
          }
      }
  })

  const handleChangeSelect = (value) => {
    formik.set("role", value)
} 

const handleChangeDate = (date) => {
  if (date) {
      console.log(date)
      console.log(moment(date).format("DD/MM/YYYY"))
      let dateMoment = moment(date.$d).format("DD/MM/YYYY")
      formik.setFieldValue("birthday", dateMoment)
  }
}

    return (
      <div>
        
        <p>This is the child component +{idtaiKhoan}.</p>
        <Button onClick={() => setShowModal(false)}>
          Close Modal from Child
        </Button>

        <Form className='px-4'
            onSubmitCapture={formik.handleSubmit}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
        >
            <h3 style={{ marginBottom: "5%", textTransform: "uppercase" }}>Thêm tài khoản</h3>

            <Form.Item label="Tài Khoản">
                <Input style={{ width: "50%" }} name='taiKhoan' onChange={formik.handleChange} /> <br />
                {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                    <span className="text-danger">{formik.errors.taiKhoan}</span>
                )}
            </Form.Item>
            <Form.Item label="Họ Tên">
                <Input style={{ width: "50%" }} name='hoTen' onChange={formik.handleChange} /> <br />
                {formik.errors.hoTen && formik.touched.hoTen && (
                    <span className="text-danger">{formik.errors.hoTen}</span>
                )}
            </Form.Item>
            <Form.Item label="Mật Khẩu">
                <Input style={{ width: "50%" }} name='matKhau' onChange={formik.handleChange} /> <br />
                {formik.errors.matKhau && formik.touched.matKhau && (
                    <span className="text-danger">{formik.errors.matKhau}</span>
                )}
            </Form.Item>
            <Form.Item label="Email">
                <Input style={{ width: "50%" }} name='email' onChange={formik.handleChange} /> <br />
                {formik.errors.email && formik.touched.email && (
                    <span className="text-danger">{formik.errors.email}</span>
                )}
            </Form.Item>
            <Form.Item label="SDT">
                <Input type="number" style={{ width: "50%" }} name='soDt' onChange={formik.handleChange} /> <br />
                {formik.errors.soDt && formik.touched.soDt && (
                    <span className="text-danger">{formik.errors.soDt}</span>
                )}
            </Form.Item>
            <Form.Item label="Hành Động">
                <button className='btn btn-success' type="submit">Đăng Ký</button>
            </Form.Item>
        </Form>
      </div>

      
    );
  }
  