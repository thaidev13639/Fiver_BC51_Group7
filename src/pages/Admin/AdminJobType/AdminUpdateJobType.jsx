import React, { useEffect, useState } from "react";

import { Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { manageService } from "../../../services/manage";
import { validateTypeJob } from "../../../ValidateYup/ValidateYup";

export default function AdminUpdateJobType({ setShowModal2, idJobType }) {
  const navigate = useNavigate();
  const [typeDetail, setTypeDetail] = useState({});
  useEffect(() => {
    fetchGetType();
  }, [setShowModal2, idJobType]);

  const fetchGetType = async () => {
    const type = await manageService.fetchJobsTypeDetailApi(idJobType);
    setTypeDetail(type.data.content);
  };

  const UpdateType= async (data) => {
    try {
      await manageService.fetchJobsTypeUpdateApi(idJobType,data)
      notification.success({
        message: "Cập nhật Thành Công "+ idJobType,
        placement: "bottomRight",
        duration: 2
      })
      
      setShowModal2(false);
      formik.resetForm();
      setTimeout(() => {
        // Navigate to the desired page
        navigate(0);
      }, 2000);
     
     
  
    } catch (error) {
      notification.warning({
        message: error?.response?.data?.message || "Cập nhật Không Thành Công",
        placement: "bottomRight",
        duration: 3
      })
    }
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: 0,
      tenLoaiCongViec: typeDetail?.tenLoaiCongViec,
    },
    validationSchema: validateTypeJob,
    onSubmit: async (values) => {
      console.log(values);
      UpdateType(values)
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
        Cập nhật loại công việc {idJobType}
      </h3>

      <Form.Item>
        <label htmlFor="">Tên loại công việc: </label>
        <Input
          style={{ width: "50%" }}
          name="tenLoaiCongViec"
          value={formik.values?.tenLoaiCongViec}
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.tenLoaiCongViec && formik.touched.tenLoaiCongViec && (
          <span className="text-danger">{formik.errors.tenLoaiCongViec}</span>
        )}
      </Form.Item>

      <Form.Item label="Action:" style={{ width: "100%" }}>
        <button className="btn btn-success ml-3" type="submit">
          Cập nhật
        </button>
      </Form.Item>
    </Form>
  );
}
