import React from 'react'
import { PlayCircleOutlined } from '@ant-design/icons';


export default function Carousel() {
    return (
        <>
            <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/509f310d48d17eafe768a87f78d10af8-1688626459703/G_D-%20Desktop%20banner.png" alt="..." />
            <div className='content'>
                <h2>Make Your Life Bester</h2>
                <p>Bring your story to life with creative videos.</p>
                <div><PlayCircleOutlined />How Fiverr Work</div>
            </div>
        </>
    )
}
