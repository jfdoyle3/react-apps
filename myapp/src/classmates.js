import React, {Component} from 'react'

class Classmates extends Component{
    render(){
       // console.log(this.props)
       const {classmates}=this.props
       const classmateList=classmastes.map(classmate =>{
           return ( 
            <div className="student">
                <div>Name: {name}</div>
                <div>Group: {group}</div>
                <div>Time: {time}</div>
            </div>
            )
       })
        return(

        )
    }
}

export default Classmates