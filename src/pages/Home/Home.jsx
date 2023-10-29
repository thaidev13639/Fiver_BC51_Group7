import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Slider from "react-slick";
import { CheckCircleOutlined } from '@ant-design/icons';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#b0b0b0", lineHeight: "48px", textAlign: "center", borderRadius: "50%", width: "30px", height: "30px", fontSize: "5px" }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
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
            <div className='service-home'>
                <h2 style={{ marginBottom: "30px" }}>Popular professional services</h2>
                <Slider {...settings}>
                    <div className='content-swraper'>
                        <img src={require('../../images/imgHome/sv1.png')} alt="logo" className="carousel-logo" />
                    </div>
                    <div className='content-swraper'>
                        <img src={require('../../images/imgHome/sv2.png')} alt="logo" className="carousel-logo" />
                    </div>
                    <div className='content-swraper'>
                        <img src={require('../../images/imgHome/sv3.png')} alt="logo" className="carousel-logo" />
                    </div>
                    <div className='content-swraper'>
                        <img src={require('../../images/imgHome/sv4.png')} alt="logo" className="carousel-logo" />
                    </div>
                    <div className='content-swraper'>
                        <img src={require('../../images/imgHome/sv5.png')} alt="logo" className="carousel-logo" />
                    </div>
                    <div className='content-swraper'>
                        <img src={require('../../images/imgHome/sv6.png')} alt="logo" className="carousel-logo" />
                    </div>
                    <div className='content-swraper'>
                        <img src={require('../../images/imgHome/sv7.png')} alt="logo" className="carousel-logo" />
                    </div>
                    <div className='content-swraper'>
                        <img src={require('../../images/imgHome/sv8.png')} alt="logo" className="carousel-logo" />
                    </div>
                    <div className='content-swraper'>
                        <img src={require('../../images/imgHome/sv9.png')} alt="logo" className="carousel-logo" />
                    </div>
                </Slider>
            </div>
            <div className='frelance-home'>
                <div className='content-frelance'>
                    <h2>A whole world of freelance talent at your fingertips</h2>
                    <div className='item-frelance'>
                        <h5> <span><CheckCircleOutlined /></span>The best for every budget</h5>
                        <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                    </div>
                    <div className='item-frelance'>
                        <h5> <span><CheckCircleOutlined /></span>Quality work done quickly</h5>
                        <p>Find the right freelancer to begin working on your project within minutes.</p>
                    </div>
                    <div className='item-frelance'>
                        <h5> <span><CheckCircleOutlined /></span>Protected payments, every time</h5>
                        <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
                    </div>
                    <div className='item-frelance'>
                        <h5> <span><CheckCircleOutlined /></span>24/7 support</h5>
                        <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
                    </div>
                </div>
                <div className='video-frelance'> frelance
                    {/* <button type="button" data-toggle="modal" data-target="#exampleModal">
                        <img src={require('../../images/imgHome/selling.png')} alt="video..." />
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "70%", height: "70%" }}>
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dug56u8NN7g?si=xAMUgst9Advp1ba0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className='fouder-home'>fouder-home</div>
            <div className='marketplace-home'>marketplace-home</div>
        </>
    )
}
