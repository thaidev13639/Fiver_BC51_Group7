import React from 'react'
import { Switch } from 'antd';

export default function StyleSwitch(props) {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <div className='switch-style'>
            <Switch defaultChecked={false} onChange={onChange} style={{ width: "20px" }} /> <span>{props.name}</span>
        </div>
    )
}
