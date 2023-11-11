import React, { useState } from 'react'
import { Rate, notification } from 'antd';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { validationComment } from '../../../ValidateYup/ValidateYup';
import { jobsService } from '../../../services/jobs';


export default function LeaveComent(props) {
    const [soSao, setSoSao] = useState(5)
    const navigate = useNavigate()
    const userState = useSelector((state) => state.userReducer)
    const Date = dayjs().format("DD/MM/YYYY")

    const onchange = (e) => {
        setSoSao(e)
    }

    const formik = useFormik({
        initialValues: {
            noiDung: "",
        },
        validationSchema: validationComment,
        onSubmit: async (values) => {

            if (userState.userInfo) {
                const body = {
                    ...values,
                    id: 0,
                    maCongViec: props.maCongViec,
                    maNguoiBinhLuan: userState?.userInfo?.user?.id,
                    ngayBinhLuan: Date,
                    saoBinhLuan: soSao,
                }
                try {
                    await jobsService.fetchCommentApi(body)
                    notification.success({
                        message: "Comment Success",
                        placement: "bottomRight",
                        duration: 3
                    })
                    window.location.reload()
                } catch (error) {
                    console.log(error)
                }
                console.log(body)
            } else {
                navigate("/form/login")
                notification.warning({
                    message: "Please Login!!",
                    placement: "bottomRight",
                    duration: 3
                })
            }
        }
    })

    return (
        <>
            <div className='top'>
                <h2>Leave some comments</h2>
                <div className='rateting'>
                    <Rate defaultValue={5} onChange={onchange} />
                    <span className='content-rate'>Rating</span>
                </div>
            </div>
            <form onSubmitCapture={formik.handleSubmit}>
                <textarea className='input' required="" name="noiDung" cols="100" rows="5" placeholder='input some comment' onChange={formik.handleChange} ></textarea>
                {formik.errors.noiDung && formik.touched.noiDung && (
                    <span className="text-danger">{formik.errors.noiDung}</span>
                )}
                <div className='btn-submit'>
                    <button type="submit" className="comment-submit" fdprocessedid="e76c6">Comment</button>
                </div>
            </form>
        </>
    )
}
