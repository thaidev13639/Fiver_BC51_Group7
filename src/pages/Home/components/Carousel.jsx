import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useFormik } from 'formik';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Carousel() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            keyword: "",
        },
        onSubmit: (values) => {
            if (values.keyword) {
                navigate(`/research-job/${values.keyword}`)
            } else {
                notification.warning({
                    message: "Please enter keyword for search Job",
                    placement: "bottomRight",
                    duration: 3
                })
            }
        }
    })
    return (
        <>
            <Swiper
                modules={[Autoplay, EffectFade]}
                spaceBetween={50}
                effect={'fade'}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={require('../../../images/imgHome/crs1.png')} alt="logo" className="carousel-logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('../../../images/imgHome/crs2.png')} alt="logo" className="carousel-logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('../../../images/imgHome/crs3.png')} alt="logo" className="carousel-logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('../../../images/imgHome/crs4.png')} alt="logo" className="carousel-logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('../../../images/imgHome/crs5.png')} alt="logo" className="carousel-logo" />
                </SwiperSlide>
                <div className='content-carousel-home'>
                    <h1>Find the perfect <i>freelance</i> services for your business</h1>
                    <form className="form-inline my-lg-0" onSubmitCapture={formik.handleSubmit}>
                        <input className="form-control " type="search" placeholder="Try building mobile app" aria-label="Search" name='keyword' onChange={formik.handleChange} />
                        <button className="btn btn-success my-sm-0 btn-search-home" type="submit">Search</button>
                    </form>
                    <div className='choice-carousel-home'>
                        <span>Popular:</span>
                        <button>Wedsite Design</button>
                        <button>WordPress</button>
                        <button>Logo Design</button>
                        <button>Video Editing</button>
                    </div>
                </div>
            </Swiper>
        </>
    )
}
