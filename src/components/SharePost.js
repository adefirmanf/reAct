import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input, Card, Button } from 'antd'

const { TextArea } = Input
class PostCard extends Component {
  render() {
    return (
      <Card
        size="small"
        style={{
          backgroundColor: "white"
        }}
        bodyStyle={{ marginTop: 0 }}
        bordered={true}
      >
        <Card.Meta
          title="What's happening?"
          // description=""
          style={{ marginBottom: 10 }}
        >
        </Card.Meta>
        <TextArea
          style={{ marginBottom: 10 }}
          placeholder="I left my money in car">
        </TextArea>

        <Button
          style={{ float: 'left' }}
          type="primary"> Share! </Button>
      </Card>
    )
  }
}

export default PostCard