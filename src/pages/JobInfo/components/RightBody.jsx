import React from 'react'
import Star from './Star'

export default function RightBody() {
    return (
        <>
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
        </>
    )
}
