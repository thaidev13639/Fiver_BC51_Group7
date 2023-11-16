import React from 'react'
import Star from '../../JobInfo/components/Star'
import { useNavigate } from 'react-router-dom'
import { manageService } from '../../../services/manage'


export default function ContentRight(props) {
    const navigate = useNavigate()

    const fetchDeleteHireJob = async (id, name) => {
        const answer = window.confirm(`Are You Sure Delete JOB ${name}`)
        if (answer) {
            try {
                await manageService.fetchHireJobsDeleteApi(id)
                window.location.reload()
            } catch (error) {
                console.log(error)
            }
        }
    }

    const renderContent = () => {
        return props?.listRentJob?.map((ele) => {
            const { danhGia, giaTien, hinhAnh, tenCongViec, moTa, saoCongViec, id } = ele.congViec
            return <div key={ele.id} className="content">
                <div className='info-job'>
                    <div className='info-job-left'>
                        <img src={hinhAnh} alt="...hình job" />
                    </div>
                    <div className='info-job-right'>
                        <h5>{tenCongViec}</h5>
                        <p>{moTa}</p>
                        <div className='start-review'>
                            <div className='review'>
                                <Star />
                                <span>{saoCongViec}</span>
                                <strong>({danhGia})</strong>
                            </div>
                            <span className='price'>${giaTien}</span>
                        </div>
                    </div>
                </div>
                <div className='button'>
                    <p>Job Hire Date: <span>{ele.ngayThue}</span></p>
                    <div>
                        <button className='btn' onClick={() => navigate(`/job-info/${id}`)} >View Detail</button>
                        <button className='btn btn-delete' onClick={() => fetchDeleteHireJob(ele.id, tenCongViec)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        })
    }
    return (
        <>
            {renderContent()}
        </>
    )
}
