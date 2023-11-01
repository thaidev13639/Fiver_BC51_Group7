import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons';

export default function Logo() {
  return (
    <>
        <h1>Most popular in Graphics & Design</h1>
                <div className='logo-container'>
                    <div className='logo-item'>
                        <img src={require('../../../images/imgDetailLayout/layout-detai-logo1.png')} alt="video..." />
                        <p>Minimalist Logo Design</p>
                        <ArrowRightOutlined />
                    </div>
                    <div className='logo-item'>
                        <img src={require('../../../images/imgDetailLayout/layout-detai-logo2.png')} alt="video..." />
                        <p>Architecture & Interior Design</p>
                        <ArrowRightOutlined />
                    </div>
                    <div className='logo-item'>
                        <img src={require('../../../images/imgDetailLayout/layout-detai-logo3.png')} alt="video..." />
                        <p>Image Editing</p>
                        <ArrowRightOutlined />
                    </div>
                    <div className='logo-item'>
                        <img src={require('../../../images/imgDetailLayout/layout-detai-logo4.png')} alt="video..." />
                        <p>NFT Art</p>
                        <ArrowRightOutlined />
                    </div>
                    <div className='logo-item'>
                        <img src={require('../../../images/imgDetailLayout/layout-detai-logo5.png')} alt="video..." />
                        <p>T-Shirts & Merchandise</p>
                        <ArrowRightOutlined />
                    </div>
                </div>
    
    </>
  )
}
