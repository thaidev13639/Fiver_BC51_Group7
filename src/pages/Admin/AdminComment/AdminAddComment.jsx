import React from "react";
import { DatePicker, Form, Input, Radio, notification } from "antd";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { manageService } from "../../../services/manage";
import { validateComment } from "../../../ValidateYup/ValidateYup";
import moment from "moment";
import TextArea from "antd/es/input/TextArea";

export default function AdminAddComment({ setShowModal }) {
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: 0,
      maCongViec: "",
      maNguoiBinhLuan: "",
      ngayBinhLuan: "",
      noiDung: "",
      saoBinhLuan: "",
    },
    validationSchema: validateComment,
    onSubmit: async (values) => {
     
      try {
        await manageService.fetchAddComment(values);
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


  const handleChangeDate = (date) => {
    if (date) {
      let dateMoment = moment(date.$d).format("DD-MM-YYYY")
      formik.setFieldValue("ngayBinhLuan", dateMoment);
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
        Thêm Bình Luận
      </h3>

      <Form.Item>
        <label htmlFor="">Mã công việc : </label>
        <Input
        type="number"
          style={{ width: "50%" }}
          name="maCongViec"
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.maCongViec && formik.touched.maCongViec && (
          <span className="text-danger">{formik.errors.maCongViec}</span>
        )}
      </Form.Item>
      
      <Form.Item >
        <label htmlFor=""> Mã Người Bình Luận : </label>
        <Input
        type="number"
          style={{ width: "30%" }}
          name="maNguoiBinhLuan"
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.maNguoiBinhLuan && formik.touched.maNguoiBinhLuan && (
          <span className="text-danger">{formik.errors.maNguoiBinhLuan}</span>
        )}
      </Form.Item>
      <Form.Item >
        <label htmlFor="">Ngày Bình Luận : </label>

        <DatePicker
          format={"DD-MM-YYYY"}
          name="ngayBinhLuan"
          style={{ width: "50%" }}
         onChange={handleChangeDate}

        />
        {formik.errors.ngayBinhLuan && formik.touched.ngayBinhLuan && (
          <span className="text-danger">{formik.errors.ngayBinhLuan}</span>
        )}
      </Form.Item>

      <Form.Item>
        <label htmlFor="">Mô tả ngắn : </label>

        <TextArea
          type="text"
          style={{ width: "50%" }}
          name="noiDung"
          onChange={formik.handleChange}
        ></TextArea>
        <br />
        {formik.errors.noiDung && formik.touched.noiDung && (
          <span className="text-danger">{formik.errors.noiDung}</span>
        )}
      </Form.Item>

      <Form.Item label="Số sao">
        <Input
          type="number"
          style={{ width: "50%" }}
          name="saoBinhLuan"
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.saoBinhLuan && formik.touched.saoBinhLuan && (
          <span className="text-danger">{formik.errors.saoBinhLuan}</span>
        )}
      </Form.Item>
      
      
    
      
      <Form.Item label="Action:"
       style={{ width: "100%" }}>
        <button className="btn btn-success ml-3" type="submit">
          Thêm bình luận 
        </button>
      </Form.Item>
    </Form>
  );
}
