import React from 'react'
import { Rate } from 'antd';


export default function LeaveComent() {
    return (
        <>
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
        </>
    )
}
