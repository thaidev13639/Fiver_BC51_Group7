import React, { useEffect, useState } from 'react'
import { DatePicker, Form, Input, Radio, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { validateNhomChiTiet } from "../../../ValidateYup/ValidateYup";
import { manageService } from "../../../services/manage";
import { useFormik } from "formik";


import moment from "moment";

export default function AdminUpdateDetailType({ setShowModal2, idDetailType }) {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(null);
  const [imgSrcApi, setImgSrcApi] = useState(null);
  const [infoDetailType, setinfoDetailType] = useState({})

  useEffect(() => {

    fetchGrpDetailType()
  }, [idDetailType, setShowModal2, imgSrc, imgSrcApi])

  const fetchGrpDetailType = async () => {

    try {
      const detailType = await manageService.fetchGetDetailTypeApi(idDetailType);
      setinfoDetailType(detailType.data.content)
    } catch (error) {
      notification.warning({
        message: "không thể lấy thông tin"
      })
    }
  }


  const UpdateDetailType = async (data) => {
    try {
      await manageService.fetchGrpUpdateDetailTypeApi(idDetailType, data)
      notification.success({
        message: "Cập nhật Thành Công " + idDetailType,
        placement: "bottomRight",
        duration: 2
      })

      setShowModal2(false);
      setImgSrcApi(null)
      setImgSrc(null)
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

  const AddImg = async (formData) => {
    try {
      const addImg = await manageService.fetchUploadDetailTypeApi(idDetailType, formData);
      notification.success({
        message: "thêm hình Thành Công",
        placement: "bottomRight",
        duration: 2
      })
      //  setImgSrcApi(addImg.data.content.hinhAnh);

      //  formik.setFieldValue("hinhAnh", imgSrcApi);
    } catch (error) {
      notification.warning({
        message: "không thể thêm hình"
      })
    }
  }


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: infoDetailType?.id,
      tenChiTiet: infoDetailType?.tenNhom,
      maLoaiCongViec: infoDetailType?.maLoaiCongviec,
      danhSachChiTiet: [0],
      hinhAnh: infoDetailType?.hinhAnh,
    },
    validationSchema: validateNhomChiTiet,
    onSubmit: async (values) => {

      UpdateDetailType(values)
    },
  });

  const handleChangeFile = (e) => {
    let file = e.target.files[0]
    if (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/gif" || file.type === "image/jpg") {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result) //base 64
      }
      let formData = new FormData();
      formData.append("formFile", file, file.name);
      console.log(formData)
      AddImg(formData);
      setImgSrc(null)
    }
  }

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
        Cập Nhật Nhóm Chi Tiết Loại {idDetailType}
      </h3>

      <Form.Item >
        <label htmlFor="">Tên Chi Tiết: </label>
        <Input
          style={{ width: "50%", marginLeft: "5px" }}
          name="tenChiTiet"
          type="text"
          value={formik.values.tenChiTiet}
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
          style={{ width: "50%", marginLeft: "5px" }}
          name="maLoaiCongViec"
          type="number"
          value={formik.values.maLoaiCongViec}
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.maLoaiCongViec && formik.touched.maLoaiCongViec && (
          <span className="text-danger">{formik.errors.maLoaiCongViec}</span>
        )}
      </Form.Item>
      <Form.Item label="Hình Ảnh">
        <Input
          id='uploadImg'
          type="file"
          style={{ width: "100%" }}
          name="hinhAnh"
          onChange={handleChangeFile}
          accept='image/png ,image/jpeg, image/gif , image/jpg'


        />
        <br />
        <img style={{ width: 150, height: 150 }} src={imgSrc === "" || imgSrc === null ? infoDetailType.hinhAnh : imgSrc} alt="..." />


        {formik.errors.hinhAnh && formik.touched.hinhAnh && (
          <span className="text-danger">{formik.errors.hinhAnh}</span>
        )}
      </Form.Item>


      <Form.Item label="Action:"
        style={{ width: "100%" }}>
        <button className="btn btn-success ml-3" type="submit">
          Cập Nhật
        </button>
      </Form.Item>
    </Form>
  );
}
