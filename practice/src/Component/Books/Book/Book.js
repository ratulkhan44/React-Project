import React, { Component } from 'react'

class Book extends Component {

    state= {
        iseditable:false
    }

    keyChangeHandler=(event) => {
        if (event.key==="Enter"){
            this.setState({
                iseditable:false
            })
        }
    }
    
  render() {

    let output= this.state.iseditable ? 
                <input 
                    onChange={ (event) => this.props.changeHandler(event.target.value, this.props.book.id)} 
                    onKeyPress={this.keyChangeHandler}
                    type="text" placeholder="Enter Book Name" value={this.props.book.name}/>
                  : <p>{this.props.book.name}</p>  

    return (
      <div className="container my-4">
        <li className="list-group-item d-flex">
            {output}
            <span className="ml-auto">${this.props.book.price}</span>
            <div className="mx-4" style={{cursor:"pointer"}} >
                <span onClick= {()=> this.setState({
                    iseditable:true
                })}>
                <i className="fas fa-edit mx-2"></i>
                </span>
                <span onClick={()=> this.props.deletHandler(this.props.book.id)}> 
                    <i class="fas fa-trash"></i>
                </span>
            </div>    
        </li>
      </div>
    )
  }
}
export default Book