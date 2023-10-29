import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Home() {
    return (
        <>
            <div className='carousel-home'>
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
                        <img src={require('../../images/imgHome/crs1.png')} alt="logo" className="carousel-logo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={require('../../images/imgHome/crs2.png')} alt="logo" className="carousel-logo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={require('../../images/imgHome/crs3.png')} alt="logo" className="carousel-logo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={require('../../images/imgHome/crs4.png')} alt="logo" className="carousel-logo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={require('../../images/imgHome/crs5.png')} alt="logo" className="carousel-logo" />
                    </SwiperSlide>
                    <div className='content-carousel-home'>
                        <h1>Find the perfect <i>freelance</i> services for your business</h1>
                        <form className="form-inline my-lg-0">
                            <input className="form-control " type="search" placeholder="Try building mobile app" aria-label="Search" />
                            <button className="btn btn-success my-sm-0 btn-search-home" type="button">Search</button>
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
            </div>
            <div className='brands-home'>
                <div className='content-brands-home' style={{ width: "10%", margin: "-36px" }}><span>Trusted by:</span></div>
                <div>
                    <img src={require('../../images/imgHome/fb.png')} alt="logo" className="carousel-logo" />
                </div>
                <div>
                    <img src={require('../../images/imgHome/google.png')} alt="logo" className="carousel-logo" />
                </div>
                <div>
                    <img src={require('../../images/imgHome/netflix.png')} alt="logo" className="carousel-logo" />
                </div>
                <div>
                    <img src={require('../../images/imgHome/P&G.png')} alt="logo" className="carousel-logo" />
                </div>
                <div>
                    <img src={require('../../images/imgHome/paypal.png')} alt="logo" className="carousel-logo" />
                </div>
            </div>
            <div className='service-home'>service-home</div>
            <div className='frelance-home'>frelance-home</div>
            <div className='fouder-home'>fouder-home</div>
            <div className='marketplace-home'>marketplace-home</div>
        </>
    )
}
