import React, { useEffect, useState } from 'react'

import { DatePicker, Form, Input, Popover, Radio, notification } from "antd";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { manageService } from "../../../services/manage";
import { validateComment } from "../../../ValidateYup/ValidateYup";
import moment from "moment";
import TextArea from "antd/es/input/TextArea";
export default function AdminUpdateComment({ setShowModal2,commentId}) {

  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(null);
  const [imgSrcApi, setImgSrcApi] = useState(null);
  const [infoComment, setinfoComment] = useState({})
  const [placement, setPlacement] = useState('rightTop');

  useEffect(() => {
    fetchListComment()
    handleResize()
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts (ko su dung nữa)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
   
}, [commentId,setShowModal2,imgSrc,imgSrcApi,placement])

const handleResize = () => {
  if (window.innerWidth < 900) {
    setPlacement('topRight');
  } else if(window.innerWidth > 900) {
    setPlacement('rightTop');
  }
}

const fetchListComment = async () => {
  const commentList = await manageService.fetchGetListComment("");
  const result = commentList.data.content
  const filteredData = result.filter((item) => item.id === commentId);
console.log(filteredData[0]);
  setinfoComment(filteredData[0]);//tim thay vi tri dau tien [0]
  console.log(infoComment)

  // console.log(listJob);
};


  const fetchDetailComment = async () => {
    try {
        const detailComment = await manageService.fetchGetComment(commentId);
        setinfoComment(detailComment.data.content)
       
    } catch (error) {
        notification.warning({
            message: "không thể lấy thông tin"
        })
      }
  }

  const UpdateComment = async (data) => {
    try {
      await manageService.fetchUptComment(commentId,data)
      notification.success({
        message: "Cập nhật Thành Công "+ commentId,
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
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: infoComment?.id,
      maCongViec:  infoComment?.maCongViec,
      maNguoiBinhLuan: infoComment?.maNguoiBinhLuan,
      ngayBinhLuan: infoComment?.ngayBinhLuan,
      noiDung: infoComment?.noiDung,
      saoBinhLuan: infoComment?.saoBinhLuan,
    },
    validationSchema: validateComment,
    onSubmit: async (values) => {
      console.log(values);
      

      UpdateComment(values);
    },
  });

  const handleChangeDate = (date) => {
    if (date) {
      let dateMoment = moment(date.$d).format("DD-MM-YYYY")
      console.log(dateMoment)
      formik.setFieldValue("ngayBinhLuan", dateMoment);
    }
  };

  const content = (
    <div>
      <p>{infoComment?.ngayBinhLuan}</p>
     
    </div>
  );

  return (
    <Popover content={content}  placement={placement}  title={"Birdthday cũ:"}>
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
        Cập Nhật Bình Luận {commentId}
      </h3>

      <Form.Item>
        <label htmlFor="">Mã công việc : </label>
        <Input
        type="number"
          style={{ width: "50%" }}
          name="maCongViec"
          onChange={formik.handleChange}
          value={formik.values.maCongViec}
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
          value={formik.values.maNguoiBinhLuan}
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
          value={formik.values.noiDung}
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
          value={formik.values.saoBinhLuan}
        />
        <br />
        {formik.errors.saoBinhLuan && formik.touched.saoBinhLuan && (
          <span className="text-danger">{formik.errors.saoBinhLuan}</span>
        )}
      </Form.Item>
      
      
    
      
      <Form.Item label="Action:"
       style={{ width: "100%" }}>
        <button className="btn btn-success ml-3" type="submit">
          Cập nhật bình luận 
        </button>
      </Form.Item>
    
    </Form>
    </Popover>
  );
}
