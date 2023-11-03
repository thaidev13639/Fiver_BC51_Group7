import React from 'react'

export default function Service(props) {
    return (
        <>
            {props.jobTitle.map((ele) => {
                return <h2 key={ele.id}>Services Related To {ele.tenLoaiCongViec}</h2>
            })}
            <ul>
                <li>Minimalist logo design</li>
                <li>Signature logo design</li>
                <li>Mascot logo design</li>
                <li>3d logo design</li>
                <li>Hand drawn logo design</li>
                <li>Vintage logo design</li>
                <li>Remove background</li>
                <li>Photo restoration</li>
                <li>Photo retouching</li>
                <li>Image resize</li>
                <li>Product label design</li>
                <li>Custom twitch overlay</li>
                <li>Custom twitch emotes</li>
                <li>Gaming logo</li>
                <li>Children book illustration</li>
            </ul>
        </>
    )
}
