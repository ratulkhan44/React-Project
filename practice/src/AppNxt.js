import React, { Component } from 'react'
import Axios from 'axios';

export default class AppNxt extends Component {

    state = {
        posts: []
    }

    componentDidMount () {
        Axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            this.setState({
                posts:response.data
            })
        })
        .catch(error => console.log(error))
    }
  render() {
    if (this.state.posts.length===0){
        return <h1 style={{textAlign:"center"}}>Loading....</h1>
    }else {
        return (
            <ul className="list-group container">
                {this.state.posts.map(post => <li key={post.id}className="list-group-item">
                    {post.title}
                </li>)}
            </ul>
        )
    }
    
  }
}
