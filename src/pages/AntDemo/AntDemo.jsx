import React from 'react'

import { DatePicker } from 'antd';
import { Button } from 'antd';
import { Badge, Avatar } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

export default function AntDemo(props) {
  return (
    <div className="container">
      <DatePicker />
      <Badge count={5}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={0} showZero>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
        <Avatar shape="square" size="large" />
      </Badge>
    </div>
  )
}
