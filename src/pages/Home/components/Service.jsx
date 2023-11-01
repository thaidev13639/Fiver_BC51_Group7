import React from 'react'
import Slider from "react-slick";

export default function Service() {
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
            <h2 style={{ marginBottom: "30px" }}>Popular professional services</h2>
            <Slider {...settings}>
                <div className='content-swraper'>
                    <img src={require('../../../images/imgHome/sv1.png')} alt="logo" className="carousel-logo" />
                </div>
                <div className='content-swraper'>
                    <img src={require('../../../images/imgHome/sv2.png')} alt="logo" className="carousel-logo" />
                </div>
                <div className='content-swraper'>
                    <img src={require('../../../images/imgHome/sv3.png')} alt="logo" className="carousel-logo" />
                </div>
                <div className='content-swraper'>
                    <img src={require('../../../images/imgHome/sv4.png')} alt="logo" className="carousel-logo" />
                </div>
                <div className='content-swraper'>
                    <img src={require('../../../images/imgHome/sv5.png')} alt="logo" className="carousel-logo" />
                </div>
                <div className='content-swraper'>
                    <img src={require('../../../images/imgHome/sv6.png')} alt="logo" className="carousel-logo" />
                </div>
                <div className='content-swraper'>
                    <img src={require('../../../images/imgHome/sv7.png')} alt="logo" className="carousel-logo" />
                </div>
                <div className='content-swraper'>
                    <img src={require('../../../images/imgHome/sv8.png')} alt="logo" className="carousel-logo" />
                </div>
                <div className='content-swraper'>
                    <img src={require('../../../images/imgHome/sv9.png')} alt="logo" className="carousel-logo" />
                </div>
            </Slider>
        </>
    )
}
