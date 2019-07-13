import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Avatar, Card } from 'antd'


class Posts extends Component {
  constructor(props) {
    super(props)
    this.title = props.title || 'Lorem ipsum'
    this.content = props.content || ''
  }
  getTitle() {
    return this.title
  }
  getContent() {
    return this.content
  }
  render() {
    return (
      <Card
        type="inner"
        title={<div>
          <Avatar
            style={{ backgroundColor: '#00a2ae', verticalAlign: 'top' }} size="small">
            A
          </Avatar>
          <span style={{ marginLeft: "10px" }}>
            Ade Firman F
          </span>
        </div>
        }
        size="default"
        style={{ backgroundColor: "white", width: 'auto', marginTop: '10px', marginBottom: '10px' }}
        bodyStyle={{ marginTop: 0 }}
        bordered={true}
      >
        {this.getContent()}
      </Card >
    )
  }
}

export default Posts