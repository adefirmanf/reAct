import React, { Component } from 'react'
import Posts from './Posts'
import store from '../store'
/**
 * Data 
 * [{
 *  user : <String>
 *  content : <String>,
 *  rate : <Integer> Up ? +1 : Meh ? +0 : -1,
 *  rateCount : <Integer> = Total user who rated this post
 *  average : (rate / rateCount) * 10
 *  timestamps : <Datetime>
 * }]
 */
class MainPost extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Posts></Posts>
        <Posts></Posts>
        <Posts></Posts>
        <Posts></Posts>
      </div>
    )
  }
}

export default MainPost