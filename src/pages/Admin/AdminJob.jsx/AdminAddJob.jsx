import React from "react";
import { Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { validationJob } from "../../../ValidateYup/ValidateYup";
import { manageService } from "../../../services/manage";
import TextArea from "antd/es/input/TextArea";

export default function AdminAddJob({ setShowModal }) {
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: 0,
      tenCongViec: "",
      danhGia: "",
      giaTien: "",
      nguoiTao: "",
      hinhAnh: "string",
      moTa: "",
      maChiTietLoaiCongViec: "",
      moTaNgan: "",
      saoCongViec: "",
    },
    validationSchema: validationJob,
    onSubmit: async (values) => {
      try {
        await manageService.fetchJobsAddApi(values);

        setShowModal(false);

        notification.success({
          message: "Thêm Thành Công",
          placement: "bottomRight",
          duration: 5,
        });
        formik.resetForm();

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
        Thêm Công Việc
      </h3>

      <Form.Item>
        <label htmlFor="">Tên Công việc : </label>
        <Input
          type="text"
          style={{ width: "50%" }}
          name="tenCongViec"
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.tenCongViec && formik.touched.tenCongViec && (
          <span className="text-danger">{formik.errors.tenCongViec}</span>
        )}
      </Form.Item>
      <Form.Item label="Đánh giá">
        <Input
          type="number"
          style={{ width: "50%" }}
          name="danhGia"
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.danhGia && formik.touched.danhGia && (
          <span className="text-danger">{formik.errors.danhGia}</span>
        )}
      </Form.Item>
      <Form.Item label="Giá tiền">
        <Input
          type="number"
          style={{ width: "50%" }}
          name="giaTien"
          onChange={formik.handleChange}
        />{" "}
        <br />
        {formik.errors.giaTien && formik.touched.giaTien && (
          <span className="text-danger">{formik.errors.giaTien}</span>
        )}
      </Form.Item>
      <Form.Item label="Người tạo">
        <Input
          type="number"
          style={{ width: "50%" }}
          name="nguoiTao"
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.nguoiTao && formik.touched.nguoiTao && (
          <span className="text-danger">{formik.errors.nguoiTao}</span>
        )}
      </Form.Item>

      <Form.Item label="Mô tả">
        <TextArea
          type="text"
          style={{ width: "50%" }}
          name="moTa"
          onChange={formik.handleChange}
          rows={4}
          maxLength={150}
        ></TextArea>
        <br />
        {formik.errors.moTa && formik.touched.moTa && (
          <span className="text-danger">{formik.errors.moTa}</span>
        )}
      </Form.Item>

      <Form.Item>
        <label htmlFor="">Mã chi tiết loại công việc : </label>
        <Input
          type="number"
          style={{ width: "30%" }}
          name="maChiTietLoaiCongViec"
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.maChiTietLoaiCongViec &&
          formik.touched.maChiTietLoaiCongViec && (
            <span className="text-danger">
              {formik.errors.maChiTietLoaiCongViec}
            </span>
          )}
      </Form.Item>

      <Form.Item>
        <label htmlFor="">Mô tả ngắn : </label>

        <TextArea
          type="text"
          style={{ width: "50%" }}
          name="moTaNgan"
          onChange={formik.handleChange}
          rows={4}
          maxLength={150}
        ></TextArea>
        <br />
        {formik.errors.moTaNgan && formik.touched.moTaNgan && (
          <span className="text-danger">{formik.errors.moTaNgan}</span>
        )}
      </Form.Item>

      <Form.Item label="Số sao">
        <Input
          type="number"
          style={{ width: "50%" }}
          name="saoCongViec"
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.saoCongViec && formik.touched.saoCongViec && (
          <span className="text-danger">{formik.errors.saoCongViec}</span>
        )}
      </Form.Item>

      <Form.Item label="Action:" style={{ width: "100%" }}>
        <button className="btn btn-success ml-3" type="submit">
          Thêm
        </button>
      </Form.Item>
    </Form>
  );
}
