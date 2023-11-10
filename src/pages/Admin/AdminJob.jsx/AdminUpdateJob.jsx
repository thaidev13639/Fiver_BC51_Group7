import React, { useEffect, useState } from 'react'
import { Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { validationJob } from "../../../ValidateYup/ValidateYup";
import { manageService } from "../../../services/manage";
import TextArea from 'antd/es/input/TextArea';

export default function AdminUpdateJob({ setShowModal2, jobId}) {

  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(null);
  const [imgSrcApi, setImgSrcApi] = useState(null);
  const [infoJob, setinfoJob] = useState({})

  useEffect(() => {
    fetchDetailJob()
}, [jobId,setShowModal2,imgSrc,imgSrcApi])

const fetchDetailJob = async () => {

  try {
      const detailJob= await manageService.fetchJobsDetailApi(jobId);
      setinfoJob(detailJob.data.content)
     
  } catch (error) {
      notification.warning({
          message: "không thể lấy thông tin"
      })
    }
}


  const UpdateJob = async (data) => {
    try {
      await manageService.fetchJobsUpdateApi(jobId,data)
      notification.success({
        message: "Cập nhật Thành Công "+ jobId,
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
      }, 3000);
     
     
     //document.getElementById("uploadImg").value=null;
    } catch (error) {
      notification.warning({
        message: error?.response?.data?.message || "Cập nhật Không Thành Công",
        placement: "bottomRight",
        duration: 3
      })
    }
  }

  const AddImg  = async (formData) => { 
    try {
      const addImg = await manageService.fetchJobsAddImgApi(jobId,formData);
      notification.success({
        message: "thêm hình Thành Công",
        placement: "bottomRight",
        duration: 2
      })
       setImgSrcApi(addImg.data.content.hinhAnh);
       console.log(addImg.data.content.hinhAnh)
       console.log(imgSrcApi);
       formik.setFieldValue("hinhAnh", imgSrcApi);
  } catch (error) {
      notification.warning({
          message: "không thể thêm hình"
      })
    }
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: infoJob?.id,
      tenCongViec: infoJob?.tenCongViec,
      danhGia: infoJob?.danhGia,
      giaTien: infoJob?.giaTien,
      nguoiTao: infoJob?.nguoiTao,
      hinhAnh: "",
      moTa: infoJob?.moTa,
      maChiTietLoaiCongViec: infoJob?.maChiTietLoaiCongViec,
      moTaNgan: infoJob?.moTaNgan,
      saoCongViec: infoJob?.saoCongViec,
    },
    validationSchema: validationJob,
    onSubmit: async (values) => {
      console.log(values);

      UpdateJob(values);

      formik.resetForm();
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
       formData.append("formFile",file,file.name);
    
      // console.log("formdata",formData.get('hinhAnh'))
      AddImg(formData);
      setImgSrc(null)
      console.log(imgSrc)
      setImgSrcApi(null)
      //document.getElementById("uploadImg").value=null;
      // formik.setFieldValue("hinhAnh", file)
      
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
      Cập Nhật Công Việc id: {jobId}
    </h3>

    <Form.Item >
      <label htmlFor="">Tên Công việc : </label>
      <Input
      type="text"
        style={{ width: "50%" }}
        name="tenCongViec"
        onChange={formik.handleChange}
        value={formik.values.tenCongViec}
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
        value={formik.values.danhGia}
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
        value={formik.values.giaTien}
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
        value={formik.values.nguoiTao}
      />
      <br />
      {formik.errors.nguoiTao && formik.touched.nguoiTao && (
        <span className="text-danger">{formik.errors.nguoiTao}</span>
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
      <img style={{ width: 150, height: 150 }} src={imgSrc === "" || imgSrc === null ? infoJob.hinhAnh : imgSrc } alt="..." />
    
  
      {formik.errors.hinhAnh && formik.touched.hinhAnh && (
        <span className="text-danger">{formik.errors.hinhAnh}</span>
      )}
    </Form.Item>

    <Form.Item  label="Mô tả">
    
    <TextArea  rows={4} placeholder="maxLength is 6" maxLength={6} 
     type="text"
    
     name="moTa"
     onChange={formik.handleChange}
     value={formik.values.moTa}
    />
      <br />
      {formik.errors.moTa && formik.touched.moTa && (
        <span className="text-danger">{formik.errors.moTa}</span>
      )}
    </Form.Item>
    
    <Form.Item >
    <label htmlFor="">Mã chi tiết loại công việc : </label>
    <Input
    type="number"
      style={{ width: "30%" }}
      name="maChiTietLoaiCongViec"
      onChange={formik.handleChange}
      value={formik.values.maChiTietLoaiCongViec}
    />
    <br />
    {formik.errors.maChiTietLoaiCongViec && formik.touched.maChiTietLoaiCongViec && (
      <span className="text-danger">{formik.errors.maChiTietLoaiCongViec}</span>
    )}
  </Form.Item>

  <Form.Item  >
  <label htmlFor="">Mô tả ngắn</label>
      <TextArea  rows={4} placeholder="maxLength is 6" maxLength={6} 

     type="text"
        name="moTaNgan"
        onChange={formik.handleChange}
        value={formik.values.moTaNgan}
    />
     
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
        value={formik.values.saoCongViec}
      />
      <br />
      {formik.errors.saoCongViec && formik.touched.saoCongViec && (
        <span className="text-danger">{formik.errors.saoCongViec}</span>
      )}
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
