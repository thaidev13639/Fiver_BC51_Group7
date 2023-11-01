import React from 'react'
import { Outlet } from 'react-router'
import Carousel from './components/Carousel';
import Logo from './components/Logo';
import Service from './components/Service';

export default function DetailLayout() {
    return (
        <div className='layout-detail'>
            <div className='layout-detail-carousel'>
                <Carousel />
            </div>
            <div className='layout-detail-logo'>
                <Logo />
            </div>
            <Outlet />
            <div className='layout-detail-service'>
                <Service />
            </div>
        </div>
    )
}
