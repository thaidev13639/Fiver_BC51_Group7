import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

export default function ShowOption() {
    const items = [
        {
            label: "Relavence",
            key: '0',
        },
        {
            label: "Best Selling",
            key: '1',
        },
        {
            label: 'New Arrival',
            key: '3',
        },
    ];
    return (
        <span>
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
            >
                <a href='/' onClick={(e) => e.preventDefault()}>
                    <Space>
                        Relevance
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </span>
    )
}
