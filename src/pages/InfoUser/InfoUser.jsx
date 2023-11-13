import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { userService } from '../../services/user'
import { jobsService } from '../../services/jobs'
import TopLeft from './components/TopLeft'
import BottomLeft from './components/BottomLeft'
import ContentRight from './components/ContentRight'
import ActionRight from './components/ActionRight'
import { Button, Modal } from 'antd'

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
    }, [])

    return (
        <div className='home-user-info'>
            <div className='left'>
                <div className="top">
                    <TopLeft jobInfo={userInfo} showModal={showModal} />
                </div>
                <div className='bottom'>
                    <BottomLeft jobInfo={userInfo} showModal={showModal} />
                </div>
            </div>
            <div className='right'>
                <ActionRight />

                <ContentRight listRentJob={listRentJob} />
            </div>
            <div className='box-edit-info'>
                <Modal title="Edit Info User" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        </div>
    )
}
