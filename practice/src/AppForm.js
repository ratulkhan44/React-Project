import React, { Component } from 'react'
import PostForm from './Component/postForm';

export default class AppForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm-8 offset-sm-2">
            <PostForm/>
        </div>    
      </div>
    )
  }
}
