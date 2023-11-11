import React, { Fragment, useEffect, useState } from "react";
import {  Modal, Table, notification } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import AdminAddComment from "./AdminAddComment";
import { manageService } from "../../../services/manage";
import AdminUpdateComment from "./AdminUpdateComment";
export default function AdminComment() {
  const navigate = useNavigate();
  const [listComment, setListComment] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [delComment, setDelComment] = useState(false);

  const [selectedCommentId, setSelectedCommentId] = useState(null);

  useEffect(() => {
    fetchListComment();
    
  }, [showModal, showModal2,delComment]);

  const fetchListComment = async () => {
    const commentList = await manageService.fetchGetListComment("");
    setListComment(commentList.data.content);
    setDelComment(false);
    // console.log(listJob);
  };

  const handleOpenModalUpdate = (data) => {
    setShowModal2(true);
    setSelectedCommentId(data);
  };
  const deleteComment = async (comment) => {
    if (window.confirm(`Bạn muốn xóa bình luận này ${comment}`)) {
      try {
        await manageService.fetchDelComment(comment);

        notification.success({
          message: `Bạn Đã Xóa ${comment} Thành Công`,
          placement: "bottomRight",
          duration: 4,
        });
        setDelComment(true);
        navigate("/admin/comment");
        
      } catch (error) {
        notification.warning({
          message: `Xóa ${comment} Không Thành Công`,
          placement: "bottomRight",
          duration: 4,
        });
      }
    }
    
  };
  const { Search } = Input;
  const handleSearch = async (value) => {
    console.log("Search term:", value);
    if(value){
      try {
        // setLoadingState({ isLoading: true });
        const findcomment = await manageService.fetchGetListComment(value);

          setListComment(findcomment.data.content);
        
        // setLoadingState({ isLoading: false });
      } catch (error) {
        console.log(error);
      }
    }else{
      fetchListComment()
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: {
        compare: (a, b) => {
          let taiKhoanA = a.id;
          let taiKhoanB = b.id;
          if (taiKhoanA > taiKhoanB) {
            return 1;
          }
          return -1;
        },
      },
      width: "15%",
    },
    {
      title: "Mã công việc",
      dataIndex: "maCongViec",
    
    },
    {
      title: "Mã người bình luận ",
      dataIndex: "maNguoiBinhLuan",
    
    },
    {
      title: "Ngày bình luận   ",
      dataIndex:"ngayBinhLuan"
    },
    {
      title: "Nội dung  ",
      dataIndex:"noiDung"
    },
    {
      title: "Sao Bình luận ",
      dataIndex:"saoBinhLuan"
    },
  
    {
      title: "Action",
      dataIndex: "action",
      render: (_, comment) => {
        return <Fragment>
          <NavLink
              key={1}
              className="mr-2 text-3xl"
              onClick={() => handleOpenModalUpdate(comment.id)}
              style={{ color: "blue", fontSize: "20px" }}
            >
              <EditOutlined />
            </NavLink>

            <Modal
              open={showModal2}
              onCancel={() => setShowModal2(false)}
              okButtonProps={{ hidden: true }}
            >
              
               <AdminUpdateComment
                 setShowModal2={setShowModal2}
                commentId={selectedCommentId}
              /> 
            </Modal>

            <span
              key={2}
              className="text-3xl"
              to="/"
              style={{ cursor: "pointer", color: "red", fontSize: "20px" }}
              onClick={() => deleteComment(comment.id)}
            >
              <DeleteOutlined />
            </span>
        </Fragment>;
      },
      width: "10%",
    },
  ];
  const data = listComment.map((element, idx) => {
    return { ...element, key: `${idx}` };
  });   
  return (
    <>
      <h3>DANH SÁCH COMMENT </h3>

      <button className="btn btn-success" onClick={() => setShowModal(true)}>
        Thêm Comment
      </button>

      <Modal
        open={showModal}
        onCancel={() => setShowModal(false)}
        okButtonProps={{ hidden: true }}
      >
        
        <AdminAddComment setShowModal={setShowModal}/>
      </Modal>

       <Search
        placeholder="Nhập Mã Công Việc Comment Cần Tìm"
        style={{ margin: "20px 0", color: "red" }}
        onSearch={handleSearch}
        enterButton
      />
      <Table
        columns={columns}
        dataSource={data}
        style={{ border: "1px solid #00000036" }}
      /> 
    </>
  )
}
