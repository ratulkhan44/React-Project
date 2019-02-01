import React, { Component } from 'react'
import Books from "./Books/Books"

class App extends Component {

    state= {
        books:[
            {
               name:"javascript",
               price:50,
               id:1 
            },
            {
                name:"React",
                price:100,
                id:2 
            },
            {
                name:"React-Native",
                price:150,
                id:3 
            },
            {
                name:"Angular",
                price:200,
                id:4  
            }  
        ]
    }

    deletHandler= (id) =>{
        let newBooks=this.state.books.filter(book => {
            return book.id !== id
        })
        this.setState({
            books:newBooks
        })
    }

    changeHandler =(name, id) => {
        let newBooks=this.state.books.map(book => {
            if (book.id===id){
                return {
                    ...book,
                    name: name
                }
            }
            return book
        })
        this.setState ({
            books: newBooks
        })
    }
  render() {

    return (
      <div className="App">
        <Books 
            changeHandler={this.changeHandler.bind(this)}
            deletHandler={this.deletHandler.bind(this)} 
            books={this.state.books}/>
      </div>
    )
  }
}

export default App
