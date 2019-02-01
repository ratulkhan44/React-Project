import React, {Component} from "react"

const initialState={
    name:"",
    email:"",
    password:"",
    bio:"",
    country:"",
    gender:"",
    skills:[]
}


class PostForm extends Component {

    constructor(){
        super()
        this.myForm=React.createRef()
    }

    state= {
        ...initialState
    }

    changeHandler= (event) => {
        if(event.target.type==="checkbox"){
            if(event.target.checked){
                this.setState({
                    ...this.state,
                    skills:this.state.skills.concat(event.target.value)
                })
            }else {
                this.setState({
                    ...this.state,
                    skills:this.state.skills.filter(skill=> skill!==event.target.value)
                })
            }
        }else {
            this.setState({
                [event.target.name]:event.target.value
            })
        }
    }

    submitHandler= (event) => {
        event.preventDefault()
        console.log(this.state)

        this.myForm.current.reset()
            this.setState({
                ...initialState
            })
        
    }

    render () {
        return (
            
                <form ref={this.myForm} onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Your Full Name:</label>
                        <input className="form-control"
                            type="text"
                            placeholder="Enter Your Name" 
                            name="name"
                            id="name"
                            value={this.state.name}
                            onChange={this.changeHandler}
                            />
                    </div>

                    <div className="form-group">      
                        <label htmlFor="email">Your Email:</label>
                        <input className="form-control"
                            type="email"
                            placeholder="Enter Your Email" 
                            name="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.changeHandler}
                            />
                    </div> 

                    <div className="form-group">       
                        <label htmlFor="password">Your Password:</label>
                        <input className="form-control"
                            type="password"
                            placeholder="Enter Your Password" 
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.changeHandler}
                            /> 
                    </div>

                    <div className="form-group">      
                        <label htmlFor="name">Your Full Name:</label>
                        <textarea className="form-control"
                            type="text"
                            placeholder="Enter Your Short Bio" 
                            name="bio"
                            id="bio"
                            value={this.state.bio}
                            onChange={this.changeHandler}
                            /> 
                    </div> 

                    <div>
                        <label htmlFor="country">Choose Your Coutry</label>
                        <select className="form-control" onChange={this.changeHandler} name="country" id="country">
                            <option>Select Your Country--></option>
                            <option value="bangladesh">Bangladesh</option>
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="england">England</option>
                        </select>
                    </div>
                    <legend>Gender:</legend>
                    <div className="form-check">
                        <input onChange={this.changeHandler} type="radio" name="gender" id="gender1" value="Male"/>
                        <label htmlFor="gender1">Male</label>
                    </div>

                    <div className="form-check">
                        <input onChange={this.changeHandler} type="radio" name="gender" id="gender2" value="Female"/>
                        <label htmlFor="gender2">Female</label>
                    </div>

                    <div className="form-check">
                        <input onChange={this.changeHandler} type="radio" name="gender" id="gender3" value="Others"/>
                        <label htmlFor="gender3">Others</label>
                    </div>

                    <div className="form-group">
                        <div className="form-check">
                            <input onChange={this.changeHandler} className="form-check-input" type="checkbox" id="js" value="Javascript"/>
                            <label className="form-check-label" htmlFor="js">
                                Javascript
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-check">
                            <input onChange={this.changeHandler} className="form-check-input" type="checkbox" id="react" value="ReactJs"/>
                            <label className="form-check-label" htmlFor="react">
                                ReactJs
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-check">
                            <input onChange={this.changeHandler} className="form-check-input" type="checkbox" id="angular" value="Angular"/>
                            <label className="form-check-label" htmlFor="angular">
                                Angular
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-check">
                            <input onChange={this.changeHandler} className="form-check-input" type="checkbox" id="node" value="NodeJs"/>
                            <label className="form-check-label" htmlFor="node">
                                NodeJs
                            </label>
                        </div>
                    </div>

                    <button className="btn btn-primary my-4" type="submit">Submit</button>                    
                </form>
            
        )
    }
}

export default PostForm