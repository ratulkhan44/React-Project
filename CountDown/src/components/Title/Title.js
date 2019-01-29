import React, {Component} from 'react';
import './Title.css'

class Title extends Component {

    constructor(props){
        super(props)

        this.state ={
            title: "This is a Dummy Title",
            isInput: false
        }
    }

    editHandler() {
        this.setState ({
            ...this.state,
            isInput: true
        })

    }

    inputChange (event) {
        this.setState({
            ...this.state,
            title:event.target.value
        })
    }

    keyChange (event) {
        if(event.key==="Enter"){
            this.setState({
                ...this.state,
                isInput:false
            })
        }
    }

    blurHandler (event) {
        this.setState({
            ...this.state,
            isInput: false
        })
    }
    

    render() {

        let output = null;

        if(this.state.isInput){
            output= (
                <div className="demo">
                    <input 
                        onChange= { (event) => this.inputChange(event)} 
                        onKeyPress= { (event) => this.keyChange(event)}
                        onBlur= { (event) => this.blurHandler(event)}
                        className="form-control" type="text" value={this.state.title}>
                    </input>
                </div>
            )
        }else {
            output= (
                <div className="d-flex title ">
                    <h1 className="display-4"> {this.state.title} </h1>
                    <span onClick={ () => this.editHandler() } className="ml-auto icon-edit">
                        <i className="fas fa-pencil-alt"></i>
                    </span>
                </div>
            )
        }


        return (
            
            <div>
                { output }
            </div>
        )
    }
}

export default Title