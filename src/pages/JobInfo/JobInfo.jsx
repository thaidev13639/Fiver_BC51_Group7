import React, { useContext, useEffect, useState } from 'react'
import { Rate } from 'antd';
import Payment from './components/Payment';
import ShowOption from '../JobsDetail/components/ShowOption';
import Star from './components/Star';
import { SearchOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { useLocation, useParams } from 'react-router-dom';
import { jobsService } from '../../services/jobs';
import LeaveComent from './components/LeaveComent';
import FAQuestion from './components/FAQuestion';
import LeftBody from './components/LeftBody';
import RightBody from './components/RightBody';
import { LoadingContext } from '../../contexts/LoadingContext';


export default function JobInfo() {
    const param = useParams()
    const location = useLocation()
    const [jobDetail, setJobDetail] = useState({})
    const [listComent, setListComent] = useState([])
    const [_, setLoading] = useContext(LoadingContext)

    window.addEventListener("scroll", () => {
        if (location.pathname === `/job-info/${param.id}`) {
            const scrollYYY = window.scrollY
            if (Math.floor(scrollYYY) >= 3100) {
                if (document.getElementById("box-service")) {
                    document.getElementById("box-service").style.display = "none"
                }
            } else {
                if (document.getElementById("box-service")) {
                    document.getElementById("box-service").style.display = "block"
                }
            }
        }
    })

    const fecthJobDetail = async () => {
        setLoading({ isLoading: true })

        const data = await jobsService.fetchJobsDetailApi(param.id)
        setJobDetail(data.data.content[0])

        setLoading({ isLoading: false })
    }
    const fetchListComent = async () => {
        setLoading({ isLoading: true })

        const datacoment = await jobsService.fetchListComentApi(param.id)
        setListComent(datacoment.data.content)

        setLoading({ isLoading: false })
    }

    useEffect(() => {
        fecthJobDetail()
        fetchListComent()
    }, [])

    return (
        <div className='jobInfo-page' id='page-jobInfo'>
            <div className='jobInfo-container'>
                <h1>{jobDetail?.congViec?.tenCongViec}</h1>
                <div className='jobInfo-user'>
                    <div className='jobinfo-img'>
                        <img className="rounded-circle" width={30} src={jobDetail?.avatar} alt="avatar" />
                    </div>
                    <div className='jobInfo-name'>
                        <span>{jobDetail?.tenNguoiTao}</span>
                    </div>
                    <div className='jobInfo-level'>
                        <span>Level {jobDetail?.congViec?.saoCongViec} seller</span>
                    </div>
                    <div className='jobInfo-rating'>
                        <Rate allowHalf disabled defaultValue={4} />
                        <span className='star'>{jobDetail?.congViec?.saoCongViec}</span>
                        <span className='count'>({jobDetail?.congViec?.danhGia})</span>
                    </div>
                    <div className='valible'>
                        <span >{jobDetail?.congViec?.saoCongViec} Order in Queue</span>
                    </div>
                </div>
                <div className='jobInfo-img'>
                    <img src={jobDetail?.congViec?.hinhAnh} alt="..." />
                </div>
                <div className='jobInfo-box-service' id='box-service'>
                    <Payment maCongViec={jobDetail?.congViec?.id} />
                </div>
                <div className='jobInfo-about'>
                    <h2>About This Gig</h2>
                    <p>{jobDetail?.congViec?.moTa}</p>
                </div>
                <div className='jobInfo-seller'>
                    <h2>About The Seller</h2>
                    <div className='user'>
                        <div className='img'>
                            <img className="rounded-circle" width={100} src={jobDetail?.avatar} alt="avatar" />
                        </div>
                        <div className='about'>
                            <h3>Admin</h3>
                            <p>{jobDetail?.tenChiTietLoai}</p>
                            <div className='about-rating'>
                                <Rate allowHalf disabled defaultValue={4.5} />
                                <span className='star'>{jobDetail?.congViec?.saoCongViec}</span>
                                <span className='count'>({jobDetail?.congViec?.danhGia})</span>
                            </div>
                            <button>Contact Me</button>
                        </div>
                    </div>
                    <div className='FAQ'>
                        <h2>FAQ</h2>
                        <FAQuestion number={1} />
                        <FAQuestion number={2} />
                        <FAQuestion number={3} />
                        <FAQuestion number={4} />
                    </div>
                    <div className='review'>
                        <div className='top'>
                            <div className='left'>
                                <span className='content'>{jobDetail?.congViec?.danhGia} Reviews</span>
                                <Rate className='rate' allowHalf disabled defaultValue={3.5} />
                                <span className='star'>{jobDetail?.congViec?.saoCongViec}</span>
                            </div>
                            <div className='right'>
                                <span>Sort By</span>
                                <ShowOption />
                            </div>
                        </div>
                        <div className='body'>
                            <div className='left'>
                                <LeftBody />
                            </div>
                            <div className='right'>
                                <RightBody />
                            </div>
                        </div>
                        <div className='bottom'>
                            <h2>Fillter</h2>
                            <input type="text" placeholder='search review' />
                            <button><SearchOutlined /></button>
                        </div>
                    </div>
                    <div className='comments'>
                        <h1>Comments</h1>
                        {listComent?.map((ele) => {
                            return <div className='item' key={ele.id}>
                                <div className='img'>
                                    <img className="rounded-circle" width={100} src={ele.avatar ? ele.avatar : "http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg"} alt="avatar" />
                                </div>
                                <div className='content'>
                                    <div className='user-comment'>
                                        <span className='name'>{ele.tenNguoiBinhLuan}</span>
                                        <Star />
                                        <span className='number-star'>{ele.saoBinhLuan}</span>
                                    </div>
                                    <div className='contries'>
                                        <img width={20} height={20} src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1ed.png" alt="avata" className="country-flag" />
                                        <span>VietNam</span>
                                    </div>
                                    <div className='comment-user'>
                                        <p>{ele.noiDung}</p>
                                    </div>
                                    <div className='acction'>
                                        <span>Helpfulls?</span>
                                        <span className='active'><LikeOutlined /> Like</span>
                                        <span className='active'><DislikeOutlined /> UnLike</span>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className='leave-comment'>
                        <LeaveComent maCongViec={jobDetail?.congViec?.id} />
                    </div>
                </div>
            </div>
        </div>
    )
}
