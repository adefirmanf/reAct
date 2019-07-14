import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Avatar, Card, Icon, Rate } from 'antd'


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
        extra={<Rate style={{ color: '#ff4d4f' }} character={<Icon type="heart" />} allowHalf />}
        actions={[<div><Icon type="smile" /> <span>Up</span></div>, <div><Icon type="meh" /> <span>Meh</span></div>, <div><Icon type="frown" /> <span>Huuu</span></div>]}
        title={< div >
          <Avatar
            style={{ backgroundColor: '#00a2ae', verticalAlign: 'top' }} size="small">
            {this.getTitle().split('')[0]}
          </Avatar>
          <span style={{ marginLeft: "10px" }}>
            {this.getTitle()}
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