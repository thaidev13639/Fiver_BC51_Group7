import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ThunderboltFilled, GlobalOutlined } from "@ant-design/icons"
import { loginAction } from '../redux-toolkit/reducer/userReducer';
import { jobsService } from '../services/jobs'
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import "../css/style.css"

export default function Header() {
    const [listJobs, setListJobs] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const accountState = useSelector((state) => state.userReducer);
    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 50) {
            setScroll(true);
            return;
        }
        setScroll(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    useEffect(() => {
        fetchGetListJobs()
    }, [])

    const fetchGetListJobs = async () => {
        const data = await jobsService.fetchListJobsNavbarApi();
        setListJobs(data.data.content)
    }

    const renderListJobsNavbar = () => {
        return listJobs.map((jobs) => {
            return (
                <li key={jobs.id}><NavLink to={`/job-title/${jobs.id}`}>{jobs.tenLoaiCongViec}</NavLink>
                    <div className='togle-content-nav'>
                        {jobs.dsNhomChiTietLoai.map((group) => {
                            return (
                                <div className='content-togle' key={group.id}>
                                    <h6 >{group.tenNhom}</h6>
                                    {
                                        group.dsChiTietLoai.map((jd) => {
                                            return <p key={jd.id} onClick={() => navigate(`/job-detail/${jd.id}`)} >{jd.tenChiTiet}</p>
                                        })
                                    }
                                </div>
                            )
                        })}
                    </div>
                </li>
            );
        })
    }
    const logout = () => {
        dispatch(loginAction.SET_INFO_USER(null));
        localStorage.removeItem("INFO_ACCOUNT");
    }
    const renderListUl = () => {
        if (accountState?.userInfo) {
            return (
                <>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item li-1 active">
                            <a className="nav-link" href="/">Fiverr Business<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item li-1">
                            <a className="nav-link" href="/">Explore</a>
                        </li>
                        <li className="nav-item li-1">
                            <a className="nav-link d-flex align-items-center" href="/"> <GlobalOutlined /><span className='ml-1'>English</span></a>
                        </li>
                        <li className="nav-item li-1">
                            <a className="nav-link" href="/">US$ USD</a>
                        </li>
                        <li className="nav-item li-1">
                            <a className="nav-link" href="/">Become a Seller</a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`/home-info-user/${accountState?.userInfo?.user?.id}`}>{accountState?.userInfo?.user?.name}</NavLink>
                        </li>
                    </ul>
                    <button className="btn btn-warning my-sm-0 btn-logout" type="submit" onClick={() => logout()}>Logout</button>
                </>
            )
        } else {
            return (
                <>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item li-1 active">
                            <a className="nav-link" href="/">Fiverr Business<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item li-1">
                            <a className="nav-link" href="/">Explore</a>
                        </li>
                        <li className="nav-item li-1">
                            <a className="nav-link d-flex align-items-center" href="/"> <GlobalOutlined /><span className='ml-1'>English</span></a>
                        </li>
                        <li className="nav-item li-1">
                            <a className="nav-link" href="/">US$ USD</a>
                        </li>
                        <li className="nav-item li-1">
                            <a className="nav-link" href="/">Become a Seller</a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/form/login">Sign in</NavLink>
                        </li>
                    </ul>
                    <button className="btn btn-outline-success my-sm-0 btn-join-home" type="submit" onClick={() => navigate("/form/register")}>Join</button>
                </>
            )
        }
    }

    return (
        <div className={scroll ? "header-container header-active" : "header-container"}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between navbar-page-home">
                <button className="navbar-toggler" type="button" >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className='left-header-home d-flex align-items-center'>
                    <NavLink className="navbar-brand name-home d-flex mr-3" to="/"><span className='mr-1'>Fiverr</span> <ThunderboltFilled className='logo-home' /></NavLink>
                    <form className="form-inline my-lg-0">
                        <input className="form-control " type="search" placeholder="Find Service" aria-label="Search" />
                        <button className=" my-sm-0 btn-search-home" type="submit">Search</button>
                    </form>
                </div>
                <div className='right-header-home d-flex align-items-center'>
                    {renderListUl()}
                </div>

            </nav>
            <div className='content-nav-home'>
                <ul className='listContent-nav-home'>
                    {renderListJobsNavbar()}
                </ul>
            </div>
        </div>
    )
}
