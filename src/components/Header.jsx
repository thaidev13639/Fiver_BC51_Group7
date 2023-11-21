import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ThunderboltFilled, GlobalOutlined } from "@ant-design/icons"
import { loginAction } from '../redux-toolkit/reducer/userReducer';
import { jobsService } from '../services/jobs'
import { useNavigate } from 'react-router';
import { NavLink, useLocation } from 'react-router-dom';
import "../css/style.css"
import { LoadingContext } from '../contexts/LoadingContext';
import { useFormik } from 'formik';
import { notification } from 'antd';

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const location = useLocation()
    const [scroll, setScroll] = useState(false);
    const [listJobs, setListJobs] = useState([]);
    const [showToggleNav, setShowToggleNav] = useState(false)
    const [menuColor, setMenuColor] = useState(false)
    const [_, setLoading] = useContext(LoadingContext)
    const accountState = useSelector((state) => state.userReducer);

    const handleScroll = () => {
        if (window.pageYOffset > 50) {
            setScroll(true);
            return;
        }
        setScroll(false);
    };
    const handleOpenToggle = () => {
        showToggleNav ? setShowToggleNav(false) : setShowToggleNav(true)
    }
    const handleColorMenu = () => {
        location.pathname === "/" ? setMenuColor(true) : setMenuColor(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    useEffect(() => {
        fetchGetListJobs()
        handleColorMenu()
    }, [location])

    const fetchGetListJobs = async () => {
        setLoading({ isLoading: true })

        const data = await jobsService.fetchListJobsNavbarApi();
        setListJobs(data.data.content)

        setLoading({ isLoading: false })
    }

    const renderListJobsNavbar = () => {
        return listJobs.map((jobs) => {
            return (
                <li key={jobs.id} onClick={() => setShowToggleNav(false)}><NavLink to={`/job-title/${jobs.id}`}>{jobs.tenLoaiCongViec}</NavLink>
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
        navigate("/")
        setShowToggleNav(false)
    }
    const renderListUl = () => {
        if (accountState?.userInfo) {
            return (
                <>
                    <ul className={menuColor ? "navbar-nav mr-auto mt-2 mt-lg-0 color-menu" : "navbar-nav mr-auto mt-2 mt-lg-0"}>
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
                    <ul className={menuColor ? "navbar-nav mr-auto mt-2 mt-lg-0 color-menu" : "navbar-nav mr-auto mt-2 mt-lg-0"}>
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
    const renderToggleUser = () => {
        if (accountState?.userInfo) {
            return (
                <>
                    <NavLink className="nav-link" to={`/home-info-user/${accountState?.userInfo?.user?.id}`} onClick={() => setShowToggleNav(false)}>  User : {accountState?.userInfo?.user?.name}</NavLink>
                    <button className="btn btn-warning my-sm-0 btn-logout" type="submit" onClick={() => logout()}>Logout</button>
                </>
            )
        } else {
            return (
                <>
                    <NavLink className="nav-link" to="/form/login">Sign in</NavLink>
                </>
            )
        }
    }
    const formik = useFormik({
        initialValues: {
            keyword: "",
        },
        onSubmit: (values) => {
            if (values.keyword) {
                if (location.pathname === `/research-job/${values.keyword}`) {
                    window.location.reload()
                } else {
                    navigate(`/research-job/${values.keyword}`)
                }
            } else {
                notification.warning({
                    message: "Please enter keyword for search Job",
                    placement: "bottomRight",
                    duration: 3
                })
            }
        }
    })
    return (
        <div className={scroll ? "header-container header-active" : "header-container"}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between navbar-page-home">
                <button className="navbar-toggler" type="button" onClick={() => handleOpenToggle()}>
                    <span className={menuColor ? "navbar-toggler-icon color-button-toggle" : "navbar-toggler-icon"} />
                </button>
                <div className='left-header-home d-flex align-items-center'>
                    <NavLink className="navbar-brand name-home d-flex mr-3" to="/" onClick={() => setShowToggleNav(false)}>
                        <span className={menuColor ? 'mr-1 color-name-menu' : 'mr-1'}>Fiverr</span>
                        <ThunderboltFilled className='logo-home' />
                    </NavLink>
                    <form className="form-inline my-lg-0" onSubmitCapture={formik.handleSubmit}>
                        <input className="form-control" type="search" placeholder="Find Service" aria-label="Search" name='keyword' onChange={formik.handleChange} />
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
            <div className={showToggleNav ? "toggle-button active-toggle-button" : "toggle-button"}>
                <div className='icon-close-toggle'>
                    <i className="fa-solid fa-xmark" onClick={() => setShowToggleNav(false)} />
                </div>
                <ul className='listContent-nav-home'>
                    <li className="nav-item">
                        {renderToggleUser()}
                    </li>
                    {renderListJobsNavbar()}
                </ul>
            </div>
        </div>
    )
}
