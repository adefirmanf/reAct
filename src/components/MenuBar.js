import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd'

class MenuBar extends Component {
  render() {
    return (
      <Menu theme="light" mode="horizontal" style={{ lineHeight: '42px' }}>
        <Menu.Item>
          Home
          </Menu.Item>
        <Menu.Item>
          Notification
          </Menu.Item>
        <Menu.Item>
          Message
          </Menu.Item>
      </Menu>
    )
  }
}

export default MenuBar