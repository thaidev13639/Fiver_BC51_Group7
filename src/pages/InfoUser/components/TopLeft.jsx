import React, { useState } from 'react'

export default function TopLeft(props) {
    const [img, setimg] = useState(false)
    const { avatar, name, email } = props.jobInfo
    return (
        <>
            <div className='online'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
                    <span>Online</span>
                </div>
            </div>
            <div className='img'>
                <img src={avatar ? avatar : require("../../../images/imgHome/AvaterUser.png")} alt="...Avatar" />
            </div>
            <div className='info'>
                <div className='item'>
                    <span>{name}</span>
                </div>
                <div className='item'>
                    <span>{email}</span>
                </div>
                <div className='pencil' onClick={() => props?.showModal()}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" /></svg>
                </div>
            </div>
            <div className='from'>
                <div className='item'>
                    <div className="left-from">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                        <span>From</span>
                    </div>
                    <div className="right-from">
                        <p>VietNam</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="left-from">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                        <span>Member Since</span>
                    </div>
                    <div className="right-from">
                        <p>Oct2023</p>
                    </div>
                </div>
            </div>
        </>
    )
}
