import React, { Component} from 'react'

class AddStudent extends Component{
        state={
            name: null,
            group: null,
            time: null
        }
        handleChange=(e) =>{
            this.setState({
                [e.target.id]: e.target.value
            })
        }
        handleSubmit=(e)=>{
            e.preventDefault()
            this.props.addStudent(this.state)
        }
        render(){
          return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={this.handleChange} />
                <label htmlFor="name">Group:</label>
                <input type="text" id="group" onChange={this.handleChange} />
                <label htmlFor="name">Time:</label>
                <input type="text" id="time" onChange={this.handleChange} />
                <button>Submit</button>
                </form>
            </div>
        )
    }

}

export default AddStudent