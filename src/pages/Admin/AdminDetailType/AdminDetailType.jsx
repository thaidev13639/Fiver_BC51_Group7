import React, { Fragment, useEffect, useState } from "react";
import { Modal, Table, notification } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { manageService } from "../../../services/manage";
import AdminAddDetailType from "./AdminAddDetailType";

export default function AdminDetailType() {
  const navigate = useNavigate();
  const [listDetailJobType, setListDetailJobType] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [deldetailJobType, setDelDetailJobType] = useState(false);

   const [slcJobDetailTypeId, setSlcDetailJobtypeId] = useState(null);

  useEffect(() => {
    fetchDetailListJobType();
  }, [showModal, deldetailJobType, showModal2]);

  const fetchDetailListJobType = async () => {
    const detailjobTypeList = await manageService.fetchJobsTypeDetailApi("");
    setListDetailJobType(detailjobTypeList.data.content);
    setDelDetailJobType(false)
  };

  const handleOpenModalUpdate = (data) => {
    setShowModal2(true);
    setSlcDetailJobtypeId(data);
  };

  const deleteJobType = async (jobType) => {
    if (window.confirm(`Bạn Muốn xóa loại công việc ${jobType}`)) {
      try {
        await manageService.fetchJobsTypeDeleteApi(jobType);

        notification.success({
          message: `Bạn Đã Xóa ${jobType} Thành Công`,
          placement: "bottomRight",
          duration: 4,
        });
        setDelDetailJobType(true);
        navigate("/admin/jobtype");
      } catch (error) {
        notification.warning({
          message: `Xóa ${jobType} Không Thành Công`,
          placement: "bottomRight",
          duration: 4,
        });
      }
    }
  };
  const { Search } = Input;

  const data = listDetailJobType.map((element, idx) => {
    return { ...element, key: `${idx}` };
  });
  return (
    <>
      <h3>DANH SÁCH CHI TIẾT LOẠI</h3>

      <button className="btn btn-success" onClick={() => setShowModal(true)}>
        Thêm Chi Tiết Loại 
      </button>

      <Modal
        open={showModal}
        onCancel={() => setShowModal(false)}
        okButtonProps={{ hidden: true }}
      >
        
        <AdminAddDetailType setShowModal={setShowModal}/>
      </Modal>

      {/* <Search
        placeholder="Nhập Tên Chi tiết Loại Cần Tìm"
        style={{ margin: "20px 0", color: "red" }}
        onSearch={handleSearch}
        enterButton
      />
      <Table
        columns={columns}
        dataSource={data}
        style={{ border: "1px solid #00000036" }}
      /> */}
    </>
  )
}
