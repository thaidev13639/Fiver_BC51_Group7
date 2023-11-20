import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PageNotFound() {
    const navigate = useNavigate()
    return (
        <div className='page-not-found'>
            <h4 className='text-center'>Sorry Page You Want Can Not Found This Wed Site</h4>
            <button className='btn btn-success' onClick={() => navigate("/")}>Come Back Home</button>
            <img style={{ width: "100%" }} src={require('../../images/imgHome/loi-404.png')} alt="" />
        </div>
    )
}
