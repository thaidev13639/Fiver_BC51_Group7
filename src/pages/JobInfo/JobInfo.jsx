import React, { useEffect } from 'react'
import { Rate } from 'antd';
import Payment from './components/Payment';
import ShowOption from '../JobsDetail/components/ShowOption';
import Star from './components/Star';
import { SearchOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { useLocation, useParams } from 'react-router-dom';


export default function JobInfo() {
    const location = useLocation()
    const param = useParams()
    
    window.addEventListener("scroll", () => {
        if (location.pathname === `/job-info/${param.id}`) {
            const scrollYYY = window.scrollY
            if (Math.floor(scrollYYY) >= 3100) {
                if (document.getElementById("box-service")) {
                    document.getElementById("box-service").style.display = "none"
                }
            } else {
                if (document.getElementById("box-service")) {
                    document.getElementById("box-service").style.display = "block"
                }
            }
        }
    })
    // useEffect(() => {

    // }, [])

    return (
        <div className='jobInfo-page' id='page-jobInfo'>
            <div className='jobInfo-container'>
                <h1>I will setup facebook and instagram ads campaign to boost your business</h1>
                <div className='jobInfo-user'>
                    <div className='jobinfo-img'>
                        <img className="rounded-circle" width={30} src="http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg" alt="avatar" />
                    </div>
                    <div className='jobInfo-name'>
                        <span>Admin</span>
                    </div>
                    <div className='jobInfo-level'>
                        <span>Level 2 seller</span>
                    </div>
                    <div className='jobInfo-rating'>
                        <Rate allowHalf disabled defaultValue={3.5} />
                        <span className='star'>4.5</span>
                        <span className='count'>(26)</span>
                    </div>
                    <div className='valible'>
                        <span >2 Order in Queue</span>
                    </div>
                </div>
                <div className='jobInfo-img'>
                    <img src="http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg" alt="..." />
                </div>
                <div className='jobInfo-box-service' id='box-service'>
                    <Payment />
                </div>
                <div className='jobInfo-about'>
                    <h2>About This Gig</h2>
                    <p>Do you need a marketer with EXTREMELY WIDE experience in facebook and instagram ads? Well, you have come to the right place! I would love to boost your sales and revenue and Ensure Your Business Growth with Expertise in facebook and instagram ads. I will help you to get targeted customers and generate more QUALIFIED TRAFFIC, Leads, Message To make more sales. I will provide you a target audience with interests, behaviors, demographics and keywords</p>
                </div>
                <div className='jobInfo-seller'>
                    <h2>About The Seller</h2>
                    <div className='user'>
                        <div className='img'>
                            <img className="rounded-circle" width={100} src="http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg" alt="avatar" />
                        </div>
                        <div className='about'>
                            <h3>Admin</h3>
                            <p>Social Media Advertising</p>
                            <div className='about-rating'>
                                <Rate allowHalf disabled defaultValue={4.5} />
                                <span className='star'>4.5</span>
                                <span className='count'>(26)</span>
                            </div>
                            <button>Contact Me</button>
                        </div>
                    </div>
                    <div className='FAQ'>
                        <h2>FAQ</h2>
                        <div className='item'>
                            <a className="button" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                                <span>
                                    There are many passages but the majority?
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                            </a>
                            <div className="collapse togle" id="collapseExample1">
                                <div className="card card-body">
                                    Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, ad corrupti libero omnis sapiente non assumenda, incidunt officiis eaque iste minima autem.
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <a className="button" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                                <span>
                                    There are many passages but the majority?
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                            </a>
                            <div className="collapse togle" id="collapseExample2">
                                <div className="card card-body">
                                    Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, ad corrupti libero omnis sapiente non assumenda, incidunt officiis eaque iste minima autem.
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <a className="button" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                                <span>
                                    There are many passages but the majority?
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                            </a>
                            <div className="collapse togle" id="collapseExample3">
                                <div className="card card-body">
                                    Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, ad corrupti libero omnis sapiente non assumenda, incidunt officiis eaque iste minima autem.
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <a className="button" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <span>
                                    There are many passages but the majority?
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                            </a>
                            <div className="collapse togle" id="collapseExample">
                                <div className="card card-body">
                                    Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, ad corrupti libero omnis sapiente non assumenda, incidunt officiis eaque iste minima autem.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='review'>
                        <div className='top'>
                            <div className='left'>
                                <span className='content'>316 Reviews</span>
                                <Rate className='rate' allowHalf disabled defaultValue={3.5} />
                                <span className='star'>4.5</span>
                            </div>
                            <div className='right'>
                                <span>Sort By</span>
                                <ShowOption />
                            </div>
                        </div>
                        <div className='body'>
                            <div className='left'>
                                <div className='item'>
                                    <span>5 Stars</span>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <span>(315)</span>
                                </div>
                                <div className='item'>
                                    <span>4 Stars</span>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <span>(20)</span>
                                </div>
                                <div className='item'>
                                    <span>3 Stars</span>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <span>(10)</span>
                                </div>
                                <div className='item'>
                                    <span>2 Stars</span>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <span>(0)</span>
                                </div>
                                <div className='item'>
                                    <span>1 Stars</span>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '5%' }} aria-valuenow={5} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <span>(1)</span>
                                </div>
                            </div>
                            <div className='right'>
                                <h2>Rating Breakdown</h2>
                                <div className='item'>
                                    <span>Seller communication level</span>
                                    <div className='star'>
                                        <Star />
                                        <span>5</span>
                                    </div>
                                </div>
                                <div className='item'>
                                    <span>Recommend to a friend</span>
                                    <div className='star'>
                                        <Star />
                                        <span>4</span>
                                    </div>
                                </div>
                                <div className='item'>
                                    <span>Service as described</span>
                                    <div className='star'>
                                        <Star />
                                        <span>3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bottom'>
                            <h2>Fillter</h2>
                            <input type="text" placeholder='search review' />
                            <button><SearchOutlined /></button>
                        </div>
                    </div>
                    <div className='comments'>
                        <h1>Comments</h1>
                        <div className='item'>
                            <div className='img'>
                                <img className="rounded-circle" width={100} src="http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg" alt="avatar" />
                            </div>
                            <div className='content'>
                                <div className='user-comment'>
                                    <span className='name'>NameUser</span>
                                    <Star />
                                    <span className='number-star'>4</span>
                                </div>
                                <div className='contries'>
                                    <img width={20} height={20} src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1ed.png" alt="avata" className="country-flag" />
                                    <span>VietNam</span>
                                </div>
                                <div className='comment-user'>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quibusdam, saepe earum dicta ut rerum suscipit itaque sint iste consequatur ea. Sint quam, ad sequi saepe vel ipsam libero dignissimos!
                                        Nobis debitis itaque iure explicabo sunt! Possimus eius voluptatem voluptates ducimus, praesentium harum neque saepe inventore fugit doloremque? Iure aliquam hic repellat iste, officiis animi porro odio magni ipsam aperiam?</p>
                                </div>
                                <div className='acction'>
                                    <span>Helpfulls?</span>
                                    <span className='active'><LikeOutlined /> Like</span>
                                    <span className='active'><DislikeOutlined /> UnLike</span>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='img'>
                                <img className="rounded-circle" width={100} src="http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg" alt="avatar" />
                            </div>
                            <div className='content'>
                                <div className='user-comment'>
                                    <span className='name'>NameUser</span>
                                    <Star />
                                    <span className='number-star'>4</span>
                                </div>
                                <div className='contries'>
                                    <img width={20} height={20} src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1ed.png" alt="avata" className="country-flag" />
                                    <span>VietNam</span>
                                </div>
                                <div className='comment-user'>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quibusdam, saepe earum dicta ut rerum suscipit itaque sint iste consequatur ea. Sint quam, ad sequi saepe vel ipsam libero dignissimos!
                                        Nobis debitis itaque iure explicabo sunt! Possimus eius voluptatem voluptates ducimus, praesentium harum neque saepe inventore fugit doloremque? Iure aliquam hic repellat iste, officiis animi porro odio magni ipsam aperiam?</p>
                                </div>
                                <div className='acction'>
                                    <span>Helpfulls?</span>
                                    <span className='active'><LikeOutlined /> Like</span>
                                    <span className='active'><DislikeOutlined /> UnLike</span>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='img'>
                                <img className="rounded-circle" width={100} src="http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg" alt="avatar" />
                            </div>
                            <div className='content'>
                                <div className='user-comment'>
                                    <span className='name'>NameUser</span>
                                    <Star />
                                    <span className='number-star'>4</span>
                                </div>
                                <div className='contries'>
                                    <img width={20} height={20} src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1ed.png" alt="avata" className="country-flag" />
                                    <span>VietNam</span>
                                </div>
                                <div className='comment-user'>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quibusdam, saepe earum dicta ut rerum suscipit itaque sint iste consequatur ea. Sint quam, ad sequi saepe vel ipsam libero dignissimos!
                                        Nobis debitis itaque iure explicabo sunt! Possimus eius voluptatem voluptates ducimus, praesentium harum neque saepe inventore fugit doloremque? Iure aliquam hic repellat iste, officiis animi porro odio magni ipsam aperiam?</p>
                                </div>
                                <div className='acction'>
                                    <span>Helpfulls?</span>
                                    <span className='active'><LikeOutlined /> Like</span>
                                    <span className='active'><DislikeOutlined /> UnLike</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='leave-comment'>
                        <div className='top'>
                            <h2>Leave some comments</h2>
                            <div className='rateting'>
                                <Rate allowHalf defaultValue={5} />
                                <span className='content-rate'>Rating</span>
                            </div>
                        </div>
                        <form>
                            <textarea className='input' required="" name="noiDung" cols="100" rows="5" placeholder='input some comment'></textarea>
                            <div className='btn-submit'>
                                <button type="button" className="comment-submit" fdprocessedid="e76c6">Comment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
