import React from 'react'
import { Form, Input,  notification } from "antd";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { manageService } from '../../../services/manage';
import { validateTypeJob } from '../../../ValidateYup/ValidateYup';

export default function AdminAddJobType({setShowModal}) {
  const navigate = useNavigate();
 

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: 0,
      tenLoaiCongViec: "",
     
    },
    validationSchema: validateTypeJob,
    onSubmit: async (values) => {
  
      try {
        await manageService.fetchAddJobsTypeApi(values);
        setShowModal(false);
      formik.resetForm()
       
        notification.success({
          message: "Thêm Thành Công",
          placement: "bottomRight",
          duration: 5,
        });
        setTimeout(() => {
          // Navigate to the desired page
          navigate(0);
        }, 2000);
       
        
         
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
        Thêm loại công việc
      </h3>

      <Form.Item >
        <label htmlFor="">Tên loại công việc:  </label>
        <Input
          style={{ width: "40%" }}
          name="tenLoaiCongViec"
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.tenLoaiCongViec && formik.touched.tenLoaiCongViec && (
          <span className="text-danger">{formik.errors.tenLoaiCongViec}</span>
        )}
      </Form.Item>
      
      
    
      
      <Form.Item label="Action:"
       style={{ width: "100%" }}>
        <button className="btn btn-success ml-3" type="submit">
           Thêm
        </button>
      </Form.Item>
    </Form>
  );
}
