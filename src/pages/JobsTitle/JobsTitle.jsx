import React, { useEffect, useState } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons';
import { useParams, useNavigate } from 'react-router';
import { jobsService } from '../../services/jobs';
import Carousel from './components/Carousel';
import Logo from './components/Logo';
import Service from './components/Service';


export default function JobsTitle() {
    const [jobTitle, setJobTitle] = useState([])
    const param = useParams()
    const navigate = useNavigate()

    const fetchListJobTitle = async () => {
        const data = await jobsService.fetchListJobsTitle(param.id)
        setJobTitle(data.data.content)
    }

    useEffect(() => {
        fetchListJobTitle()
    }, [param.id])

    const renderJobTitle = () => {
        return jobTitle.map((ele) => {
            return (
                <h2 key={ele.id}>Explore {ele.tenLoaiCongViec}</h2>
            )
        })
    }

    const renderItemJob = () => {
        return jobTitle[0]?.dsNhomChiTietLoai.map((ele) => {
            return (
                <div key={ele.id} className='jobs-item'>
                    <img src={ele.hinhAnh} alt="video..." />
                    <h4>{ele.tenNhom}</h4>
                    {ele.dsChiTietLoai.map((ele) => {
                        return (
                            <p key={ele.id} onClick={() => navigate(`/job-detail/${ele.id}`)}><span>{ele.tenChiTiet}</span><ArrowRightOutlined className='icon' /></p>
                        )
                    })}
                </div>
            )
        })
    }
    return (
        <>
            <div className='layout-detail'>
                <div className='layout-detail-carousel'>
                    <Carousel />
                </div>
                <div className='layout-detail-logo'>
                    <Logo jobTitle={jobTitle} />
                </div>
                <div className='jobs-title'>
                    {renderJobTitle()}
                    <div className='item-container'>
                        {renderItemJob()}
                    </div>
                </div>
                <div className='layout-detail-service'>
                    <Service jobTitle={jobTitle} />
                </div>
            </div>

        </>
    )
}
