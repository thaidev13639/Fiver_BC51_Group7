import React, { useEffect, useState } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons';
import { useParams } from 'react-router';
import { jobsService } from '../../services/jobs';


export default function JobsTitle() {
    const [jobTitle, setJobTitle] = useState([])
    const param = useParams()

    const fetchListJobTitle = async () => {
        const data = await jobsService.fetchListJobsTitle(param.id)
        console.log(data.data.content)
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
                            <p key={ele.id}><span>{ele.tenChiTiet}</span><ArrowRightOutlined className='icon' /></p>
                        )
                    })}
                </div>
            )
        })
    }
    return (
        <div className='jobs-title'>
            {renderJobTitle()}
            <div className='item-container'>
                {renderItemJob()}
            </div>
        </div>
    )
}
