import React, { useEffect, useState } from 'react'
import Button from './components/Button'
import StyleSwitch from './components/StyleSwitch'
import ShowOption from './components/ShowOption'
import { useNavigate, useParams } from 'react-router-dom'
import { jobsService } from '../../services/jobs'

export default function JobsDetail() {
  const param = useParams()
  const [detailJob, setDetailJob] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    fetchListJobDetail()
  }, [param.id])
  const fetchListJobDetail = async () => {
    const data = await jobsService.fetchListJobsDetailApi(param.id)
    setDetailJob(data.data.content)
  }

  const renderCard = () => {
    return detailJob?.map((ele) => {
      const { id, danhGia, giaTien, hinhAnh, tenCongViec, saoCongViec } = ele.congViec;
      return <div key={ele.id} className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={hinhAnh} alt="..." />
        <div className="card-body">
          <div className='user-info'>
            <div className='left' style={{ width: "2rem" }}>
              <img src={ele.avatar} alt="..." />
            </div>
            <div className='right'>
              <h5>Admin</h5>
              <p>Level {saoCongViec} Seller</p>
            </div>
          </div>
          <p className="card-text" onClick={() => navigate(`/job-info/${id}`)} >{tenCongViec}</p>
          <div className='body-logo'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="#ffbe5b" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
            <span className='num-rating'>{saoCongViec}</span>
            <span className='total-rating'>({danhGia})</span>
          </div>
        </div>
        <div className='card-bottom'>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill='#b5b6ba' d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg>
          <div className='right'>
            <span>STARTING AT</span>
            <h2>US${giaTien}</h2>
          </div>
        </div>
      </div>
    })
  }
  return (
    <div className='jobs-detail-body'>
      <div className='jobs-detail-container'>
        <div className='choice-detail'>
          <h1>{detailJob ? detailJob[0]?.tenChiTietLoai : ""}</h1>
          <div className='offtion-detail'>
            <div className='left'>
              <Button name={"Catatogry"} />
              <Button name={"Service Option"} />
              <Button name={"Seller Datails"} />
              <Button name={"Delivery Time"} />
            </div>
            <div className='right'>
              <StyleSwitch name={"Pro services"} />
              <StyleSwitch name={"Local sellers"} />
              <StyleSwitch name={"Online sellers"} />
            </div>
          </div>
        </div>
        <div className='content-detail'>
          <div className='content-option'>
            <div className='left'>{detailJob?.length} services available</div>
            <div className='right'>
              <span className='text'>Sort by</span> <ShowOption />
            </div>
          </div>
          <div className='content-container'>
            {renderCard()}
          </div>
        </div>

      </div>
    </div>
  )
}
