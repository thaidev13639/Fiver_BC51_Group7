import React from 'react'
import { ThunderboltFilled, GlobalOutlined } from "@ant-design/icons"
import "../css/style.css"

export default function Header() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between navbar-page-home">
                <button className="navbar-toggler" type="button" >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className='left-header-home d-flex align-items-center'>
                    <a className="navbar-brand name-home d-flex mr-3" href="#"><span className='mr-1'>Fiverr</span> <ThunderboltFilled className='logo-home' /></a>
                    <form className="form-inline my-lg-0">
                        <input className="form-control " type="search" placeholder="Find Service" aria-label="Search" />
                        <button className=" my-sm-0 btn-search-home" type="submit">Search</button>
                    </form>
                </div>
                <div className='right-header-home d-flex align-items-center'>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item li-1 active">
                            <a className="nav-link" href="#">Fiverr Business<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item li-1">
                            <a className="nav-link" href="#">Explore</a>
                        </li>
                        <li className="nav-item li-1">
                            <a className="nav-link d-flex align-items-center" href="#"> <GlobalOutlined /><span className='ml-1'>English</span></a>
                        </li>
                        <li className="nav-item li-1">
                            <a className="nav-link" href="#">US$ USD</a>
                        </li>
                        <li className="nav-item li-1">
                            <a className="nav-link" href="#">Become a Seller</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sign in</a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-success my-sm-0 btn-join-home" type="submit">Join</button>
                </div>
                {/* <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                    tesst
                </div> */}
            </nav>
            <div className='content-nav-home '>
                <ul className='listContent-nav-home'>
                    <li><a href="#">Graphics & Design</a></li>
                    <li><a href="#">Digital Marketing</a></li>
                    <li><a href="#">Writing & Translation</a></li>
                    <li><a href="#">Video & Animation</a></li>
                    <li><a href="#">Music & Audio</a></li>
                    <li><a href="#">Programing & Tech</a></li>
                    <li><a href="#">AI</a></li>
                    <li><a href="#">Hacking 104</a></li>
                    <li><a href="#">string</a></li>
                </ul>
            </div>
        </div>
    )
}
