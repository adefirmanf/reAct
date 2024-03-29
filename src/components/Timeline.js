import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Timeline, Icon } from 'antd'

class TimelinePosts extends Component {
  render() {
    return (
      <Timeline mode="alternate" style={{ width: "80%" }}>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo.
      </Timeline.Item>
        <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
          Technical testing 2015-09-01
      </Timeline.Item>
      </Timeline>
    )
  }
}

export default TimelinePosts