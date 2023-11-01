import React from 'react'

export default function Brands() {
    return (
        <>
            <div className='content-brands-home' style={{ width: "10%", margin: "-36px" }}><span>Trusted by:</span></div>
            <div>
                <img src={require('../../../images/imgHome/fb.png')} alt="logo" className="carousel-logo" />
            </div>
            <div>
                <img src={require('../../../images/imgHome/google.png')} alt="logo" className="carousel-logo" />
            </div>
            <div>
                <img src={require('../../../images/imgHome/netflix.png')} alt="logo" className="carousel-logo" />
            </div>
            <div>
                <img src={require('../../../images/imgHome/P&G.png')} alt="logo" className="carousel-logo" />
            </div>
            <div>
                <img src={require('../../../images/imgHome/paypal.png')} alt="logo" className="carousel-logo" />
            </div>
        </>
    )
}
