import React, { Component } from 'react'
import Book from "./Book/Book"

class Books extends Component {
  render() {
    return (
      <div>
        {this.props.books.map(book => {
            return (
                <Book 
                    changeHandler={this.props.changeHandler} 
                    deletHandler={this.props.deletHandler} 
                    book={book}/>
                )
        })}
      </div>
    )
  }
}
export default  Books