import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Slider from "react-slick";
import { CheckCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
    const [video, setVideo] = useState("")
    const videoRef = useRef()

    const handleChangevideo = (data) => {
        setVideo(data)
    }

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

    const settingsfouder = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },

        ]
    }
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
            <div className='free-talent-home'>
                <div className='frelance-home row'>
                    <div className='content-frelance col-md-6 col-12'>
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
                    <div className='video-frelance col-md-6 col-12'>
                        <div className='img-btn'>
                            <img src={require('../../images/imgHome/selling.png')} alt="video..." />
                            <button className='btn-img-frelance' type="button" data-toggle="modal" data-target="#exampleModal"
                                onClick={() =>
                                    handleChangevideo("https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7")
                                }
                            >
                                <PlayCircleOutlined /></button>

                        </div>
                        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={(e) => {
                            if (e.target) {
                                if (e.target.id === "exampleModal") {
                                    setVideo("")
                                }
                            }
                        }}>
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <video ref={videoRef} src={video} autoPlay={true} muted={false} id="my-video">
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fouder-home'>
                <div className='fouder-container'>
                    <Slider {...settingsfouder}>
                        <div className='fouder-item'>
                            <div className='fouder-imgBtn'>
                                <img src={require('../../images/imgHome/fouder1.png')} alt="video..." />
                                <button className='btn-img-fouder' type="button" data-toggle="modal" data-target="#exampleModal"
                                    onClick={() =>
                                        handleChangevideo("https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw")
                                    }
                                >
                                    <PlayCircleOutlined /></button>
                            </div>
                            <div className='fouder-text'>
                                <div className='text-top'>
                                    <h5>Kay Kim, Co-Founder</h5>
                                    <span>
                                        <img src={require('../../images/imgHome/logo-fouder1.png')} alt="" />
                                    </span>
                                </div>
                                <div className='text-bottom'>
                                    <i>
                                        "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className='fouder-item'>
                            <div className='fouder-imgBtn'>
                                <img src={require('../../images/imgHome/fouder2.png')} alt="video..." />
                                <button className='btn-img-fouder' type="button" data-toggle="modal" data-target="#exampleModal"
                                    onClick={() => handleChangevideo("https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/plfa6gdjihpdvr10rchl")}>
                                    <PlayCircleOutlined /></button>
                            </div>
                            <div className='fouder-text'>
                                <div className='text-top'>
                                    <h5>Caitlin Tormey, Chief Commercial Officer</h5>
                                    <span>
                                        <img src={require('../../images/imgHome/logo-fouder2.png')} alt="..." />
                                    </span>
                                </div>
                                <div className='text-bottom'>
                                    <i>
                                        "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className='fouder-item'>
                            <div className='fouder-imgBtn'>
                                <img src={require('../../images/imgHome/fouder3.png')} alt="video..." />
                                <button className='btn-img-fouder' type="button" data-toggle="modal" data-target="#exampleModal"
                                    onClick={() => handleChangevideo("https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi")}>
                                    <PlayCircleOutlined /></button>
                            </div>
                            <div className='fouder-text'>
                                <div className='text-top'>
                                    <h5>Brighid Gannon (DNP, PMHNP-BC), Co-Founder</h5>
                                    <span>
                                        <img src={require('../../images/imgHome/logo-fouder3.png')} alt="..." />
                                    </span>
                                </div>
                                <div className='text-bottom'>
                                    <i>
                                        "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className='fouder-item'>
                            <div className='fouder-imgBtn'>
                                <img src={require('../../images/imgHome/fouder4.png')} alt="video..." />
                                <button className='btn-img-fouder' type="button" data-toggle="modal" data-target="#exampleModal"
                                    onClick={() => handleChangevideo("https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/bsncmkwya3nectkensun")}>
                                    <PlayCircleOutlined /></button>
                            </div>
                            <div className='fouder-text'>
                                <div className='text-top'>
                                    <h5>Tim and Dan Joo, Co-Founders</h5>
                                    <span>
                                        <img src={require('../../images/imgHome/logo-fouder4.png')} alt="" />
                                    </span>
                                </div>
                                <div className='text-bottom'>
                                    <i>
                                        "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."
                                    </i>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>
            <div className='marketplace-home'>marketplace-home</div>

        </>
    )
}
