import React, { useEffect, useState } from "react";
import { DatePicker, Form, Input, Popover, Radio, notification } from "antd";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { manageService } from "../../../services/manage";
import moment from "moment/moment";
import { validateHireJob } from "../../../ValidateYup/ValidateYup";
export default function AdminUpdateService({ setShowModal2, serviceId }) {
  const navigate = useNavigate();
  const [hireDetail, setHireDetail] = useState({});
  const [placement, setPlacement] = useState("rightTop");

  useEffect(() => {
    fetchGetHire(); //get thong tin user

    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts (ko su dung nữa)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setShowModal2, serviceId, placement]);

  const fetchGetHire = async () => {
    const hire = await manageService.fetchHireJobsDetailApi(serviceId);
    setHireDetail(hire.data.content);
    
  };

  const handleResize = () => {
    if (window.innerWidth < 900) {
      setPlacement("topRight");
    } else if (window.innerWidth > 900) {
      setPlacement("rightTop");
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: hireDetail?.id,
      maCongViec: hireDetail?.maCongViec,
      maNguoiThue: hireDetail?.maNguoiThue,
      ngayThue: hireDetail?.ngayThue,
      hoanThanh: hireDetail?.hoanThanh,
    },
    validationSchema: validateHireJob,
    onSubmit: async (values) => {
      
      try {
        await manageService.fetchHireJobsUpdateApi(serviceId, values);

        setShowModal2(false);
        notification.success({
          message: "Chỉnh Sữa Thành Công",
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
      let dateMoment = moment(date.$d).format("DD/MM/YYYY");
      formik.setFieldValue("ngayThue", dateMoment);
    }
  };

  

  const content = (
    <div>
      <p>{hireDetail.ngayThue}</p>
    
    </div>
  );
  return (
    <Popover content={content} placement={placement} title={"Birdthday cũ:"}>
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
          Cập Nhật Thuê Công Việc {serviceId}
        </h3>

        <Form.Item>
          <label htmlFor="">Mã công việc : </label>
          <Input
            type="number"
            style={{ width: "50%" }}
            name="maCongViec"
            value={formik.values?.maCongViec}
            onChange={formik.handleChange}
          />
          <br />
          {formik.errors.maCongViec && formik.touched.maCongViec && (
            <span className="text-danger">{formik.errors.maCongViec}</span>
          )}
        </Form.Item>

        <Form.Item>
          <label htmlFor=""> Mã Người Thuê : </label>
          <Input
            type="number"
            style={{ width: "30%" }}
            name="maNguoiThue"
            value={formik.values?.maNguoiThue}
            onChange={formik.handleChange}
          />
          <br />
          {formik.errors.maNguoiThue && formik.touched.maNguoiThue && (
            <span className="text-danger">{formik.errors.maNguoiThue}</span>
          )}
        </Form.Item>
        <Form.Item>
          <label htmlFor="">Ngày Thuê: </label>

          <DatePicker
            format={"DD/MM/YYYY"}
            name="ngayThue"
            style={{ width: "50%" }}
            onChange={handleChangeDate}
          />
          {formik.errors.ngayThue && formik.touched.ngayThue && (
            <span className="text-danger">{formik.errors.ngayThue}</span>
          )}
        </Form.Item>

        <Form.Item label="Role">
          <Radio.Group
            name="hoanThanh"
            defaultValue={formik.values?.hoanThanh === true ? "TRUE" : "FALSE" }
            
            onChange={formik.handleChange}
          >
            <Radio.Button value="TRUE">True</Radio.Button> 
            <Radio.Button value="FALSE">False</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Action:" style={{ width: "100%" }}>
          <button className="btn btn-success ml-3" type="submit">
            Cập nhật
          </button>
        </Form.Item>
      </Form>
    </Popover>
  );
}
