import React from 'react'
import { Switch } from 'antd';

export default function StyleSwitch(props) {

    return (
        <div className='switch-style'>
            <Switch defaultChecked={false} style={{ width: "20px" }} /> <span>{props.name}</span>
        </div>
    )
}
