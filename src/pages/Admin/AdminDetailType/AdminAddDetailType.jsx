import React from "react";
import { Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { validateNhomChiTiet} from "../../../ValidateYup/ValidateYup";
import { manageService } from "../../../services/manage";

export default function AdminAddDetailType({ setShowModal }) {
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: 0,
      tenChiTiet: "",
      maLoaiCongViec: "",
      danhSachChiTiet: [0],
    },
    validationSchema: validateNhomChiTiet,
    onSubmit: async (values) => {
      console.log(values);
      try {
        await manageService.fetchAddGrpDetailTypeApi(values);
        setShowModal(false);

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
        Thêm Nhóm Chi Tiết Loại
      </h3>

      <Form.Item >
        <label htmlFor="">Tên Chi Tiết: </label>
        <Input
          style={{ width: "50%" ,marginLeft:"5px"}}
          name="tenChiTiet"
          type="text"
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.tenChiTiet && formik.touched.tenChiTiet && (
          <span className="text-danger">{formik.errors.tenChiTiet}</span>
        )}
      </Form.Item>
      <Form.Item >
        <label htmlFor="">Mã loại công việc: </label>
        <Input
          style={{ width: "50%" ,marginLeft:"5px"}}
          name="maLoaiCongViec"
          type="number"
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.maLoaiCongViec && formik.touched.maLoaiCongViec && (
          <span className="text-danger">{formik.errors.maLoaiCongViec}</span>
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
