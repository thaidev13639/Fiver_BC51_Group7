import React from 'react'

export default function Button(props) {

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {props.name}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <p className='name-job'>All Catagories</p>
                <div className='option'>
                    <p>Web Programing</p> <span>(20,566)</span>
                </div>
                <div className='option'>
                    <p>Data Entry</p> <span>(20,566)</span>
                </div>
            </div>
        </div>
    )
}
