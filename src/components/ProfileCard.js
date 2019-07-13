import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd'

const { Meta, Grid } = Card

class ProfileCard extends Component {
  render() {
    return (
      <Card
        size="default"
        style={{ backgroundColor: "white", width: 'auto' }}
        cover={
          <img
            src="https://www.vocaloidnews.net/wp-content/uploads/2019/03/androidgirlfeatured.png"
          >
          </img>
        }
        bodyStyle={{ marginTop: 0 }}
        bordered={true}
      >
        <Grid style={{ width: '100%' }}>
          <Meta
            avatar={<Avatar
              src="https://d3ieicw58ybon5.cloudfront.net/ex/350.350/shop/product/091c9c2fd83e49e8820731a4d93f0335.jpg"
              size="large"
            ></Avatar>}
            title="Ade Firman Fauzi"
            description="Lorem ipsum dolor sir amet"
          >
          </Meta>
        </Grid>
      </Card>
    )
  }
}

export default ProfileCard