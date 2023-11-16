import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { userService } from '../../services/user'
import { jobsService } from '../../services/jobs'
import TopLeft from './components/TopLeft'
import BottomLeft from './components/BottomLeft'
import ContentRight from './components/ContentRight'
import ActionRight from './components/ActionRight'
import { Modal, Radio, Select, notification } from 'antd';
import dayjs from 'dayjs'
import { useFormik } from 'formik'
import { validationUserPageHome } from '../../ValidateYup/ValidateYup'

export default function InfoUser() {
    const param = useParams()
    const [userInfo, setUserInfo] = useState({})
    const [listRentJob, setlistRentJob] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const convertDateFormat = (dateString, currentFormat, targetFormat) => {
        // Kiểm tra xem chuỗi ngày có đúng định dạng hay không
        if (!dayjs(dateString, { format: currentFormat, strict: true }).isValid()) {
            return dateString;
        }

        // Chuyển đổi định dạng ngày
        const convertedDate = dayjs(dateString, { format: currentFormat }).format(targetFormat);

        return convertedDate;
    }
    const fetchInfoUser = async () => {
        const data = await userService.fetchGetInfoUserApi(param.id)
        setUserInfo(data.data.content)
    }
    const fetchListRentUser = async () => {
        const data = await jobsService.fetchRentJobListUserApi()
        setlistRentJob(data.data.content)
    }
    useEffect(() => {
        fetchInfoUser()
        fetchListRentUser()
    }, [isModalOpen])


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: userInfo?.id,
            name: userInfo?.name,
            email: userInfo?.email,
            phone: userInfo?.phone,
            birthday: convertDateFormat(userInfo?.birthday, "DD-MM-YYYY", "DD-MM-YYYY"),
            gender: userInfo?.gender,
            role: userInfo?.role,
            skill: userInfo?.skill,
            certification: userInfo?.certification
        },
        validationSchema: validationUserPageHome,
        onSubmit: async (values) => {
            try {
                await userService.fetchUserUpdateApi(userInfo?.id, values)
                notification.success({
                    message: "Update Info Success",
                    placement: "topLeft",
                    duration: 3
                })
                setIsModalOpen(false)
            } catch (error) {
                console.log(error)
            }
        }
    })

    const handlChangeGender = (e) => {
        console.log(e.target.value)
        if (e.target.value === "Male") {
            formik.setFieldValue("gender", true);
        } else {
            formik.setFieldValue("gender", false);
        }
    }
    const handleChangeSKill = (value) => {
        console.log(`selected ${value}`);
        formik.setFieldValue("skill", value);
    };
    const handleChangeCertification = (value) => {
        console.log(`selected ${value}`);
        formik.setFieldValue("certification", value);
    };
    const optionsSkill = [
        {
            label: "Front End",
            value: "Front End"
        },
        {
            label: "Back End",
            value: "Back End"
        },
        {
            label: "full Stack",
            value: "full Stack"
        },
        {
            label: "Data Analyst",
            value: "Data Analyst"
        },
    ];
    const optionsCertification = [
        {
            label: "CyberSoft",
            value: "CyberSoft"
        },
        {
            label: "F8 Acadamy",
            value: "F8 Acadamy"
        },
        {
            label: "FPT Acadamy",
            value: "FPT Acadamy"
        },
        {
            label: "HoaSen University",
            value: "HoaSen University"
        },
    ];

    return (
        <div className='home-user-info'>
            <div className='left'>
                <div className="top">
                    <TopLeft jobInfo={userInfo} showModal={showModal} />
                </div>
                <div className='bottom'>
                    <BottomLeft jobInfo={userInfo} showModal={showModal} convertDateFormat={convertDateFormat} />
                </div>
            </div>
            <div className='right'>
                <ActionRight />

                <ContentRight listRentJob={listRentJob} />
            </div>
            <Modal okText="Update" footer={null} title="Update User" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <form onSubmitCapture={formik?.handleSubmit}>
                    <div className='input-update input-update-email'>
                        <input onChange={formik?.handleChange} name="email" required autoComplete='off' type="text" disabled defaultValue={formik?.values.email} />
                        <label className='label-input'>Email</label>
                    </div>
                    <div className='input-update'>
                        <input onChange={formik?.handleChange} name="phone" required autoComplete='off' type="number" defaultValue={formik?.values.phone} />
                        <label className='label-input'>Phone</label>
                        {formik?.errors.phone && formik?.touched.phone && (
                            <span className="text-danger">{formik?.errors.phone}</span>
                        )}
                    </div>
                    <div className='input-update'>
                        <input onChange={formik?.handleChange} name="name" required autoComplete='off' type="text" defaultValue={formik?.values.name} />
                        <label className='label-input'>Name</label>
                        {formik?.errors.name && formik?.touched.name && (
                            <span className="text-danger">{formik?.errors.name}</span>
                        )}
                    </div>
                    <div className='input-update'>
                        <input onChange={formik?.handleChange} name="birthday" required autoComplete='off' type="text" defaultValue={formik?.values.birthday} />
                        <label className='label-input'>Birthday</label>
                        {formik?.errors.birthday && formik?.touched.birthday && (
                            <span className="text-danger">{formik?.errors.birthday}</span>
                        )}
                    </div>
                    <Radio.Group name="gender" defaultValue={formik?.values.gender ? "Male" : "Female"} onChange={handlChangeGender}>
                        <p>Gender</p>
                        <Radio value={"Male"}>Male</Radio>
                        <Radio value={"Female"}>Female</Radio>
                    </Radio.Group>
                    <Select
                        name="skill"
                        mode="multiple"
                        defaultValue={formik?.values.skill}
                        allowClear
                        style={{
                            width: '47%',
                        }}
                        placeholder="Select Skill"
                        onChange={handleChangeSKill}
                        options={optionsSkill}
                    />
                    <Select
                        name="certification"
                        mode="multiple"
                        defaultValue={formik?.values.certification}
                        allowClear
                        style={{
                            width: '47%',
                        }}
                        placeholder="Select Certification"
                        onChange={handleChangeCertification}
                        options={optionsCertification}
                    />
                    <div className='wrap-button'>
                        <button className='button btn-cancel' type="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
                        <button className='button btn-update' type="submit">Update</button>
                    </div>
                </form>
            </Modal>
        </div >
    )
}
