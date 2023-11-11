import React from 'react'

export default function LeftBody() {
    return (
        <>
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
        </>
    )
}
