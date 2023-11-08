import React, { useEffect, useState } from 'react'
import {  DatePicker, Form, Input, Popover, Radio, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { userService } from "../../../services/user";
import { useFormik } from "formik";

import { validateInfo } from "../../../ValidateYup/ValidateYup";
import moment from 'moment/moment';

export default function AdminUpdateUser({ setShowModal2,idtaiKhoan}) {
    const navigate = useNavigate();
    const [userDetail, setUserDetail] = useState({})
    
    useEffect(() => {
        fetchGetUser(); //get thong tin user
        
    }, [])

    const fetchGetUser = async () => {
        const user = await userService.fetchUserDetailApi(idtaiKhoan)
        setUserDetail(user.data.content)
        //console.log(userDetail);
    }

    const oldBirthday = userDetail.birthday;
    console.log(oldBirthday);
  

//  
    const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
        id: userDetail?.id,
        name:  userDetail?.name,
        email:  userDetail?.email,
        password:  userDetail?.password,
        phone:  userDetail?.phone,
        birthday: "",
        gender: true,
        role: userDetail?.role,
        skill: ["string"],
        certification: ["string"]
      },
      validationSchema: validateInfo,
      onSubmit: async (values) => {
        console.log(values);
        try {
          await userService.fetchUserUpdateApi(idtaiKhoan,values);
           navigate("/admin");
           setShowModal2(false);
          notification.success({
            message: "Chỉnh Sữa Thành Công",
            placement: "bottomRight",
            duration: 5,
          });
         
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
          Cập nhật tài khoản {idtaiKhoan}
        </h3>

  
        <Form.Item label="Họ Tên">
          <Input
            style={{ width: "50%" }}
            name="name"
            onChange={formik.handleChange}
            value={formik.values?.name}
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
            value={formik.values?.password}
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
            value={formik.values?.email}
          />
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
            value={formik.values?.phone}
          />
          <br />
          {formik.errors.phone && formik.touched.phone && (
            <span className="text-danger">{formik.errors.phone}</span>
          )}
        </Form.Item>
  
        <Form.Item label="Ngày Sinh: ">
        <Popover placement="bottom"  title={"Birdthday cũ:"+ oldBirthday} >
          <DatePicker
            format={"DD-MM-YYYY"}
            name="birthday"
            onChange={handleChangeDate}
              
          />
           </Popover>
         
          {formik.errors.birthday && formik.touched.birthday && (
            <span className="text-danger">{formik.errors.birthday}</span>
          )}
        </Form.Item>
  
        <Form.Item label="Role" >
          <Radio.Group
          name="role"
         
          onChange={formik.handleChange}
          value={formik.values?.role}
          >
            <Radio.Button value="USER">User</Radio.Button>
            <Radio.Button value="ADMIN">Admin</Radio.Button>
          
          </Radio.Group>
        </Form.Item>
  
        <Form.Item label="Action:"
       style={{ width: "100%" }}>
        <button className="btn btn-success ml-3" type="submit">
          Cập nhật
        </button>
      </Form.Item>

      </Form>
    );
  }
  