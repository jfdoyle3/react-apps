import React, {Component} from 'react'

class Students extends Component{
    render(){
       // console.log(this.props)
       const {students}=this.props
       const studentList=students.map(student =>{
           return ( 
            <div className="student" key={student.id}>
                <div>Name: {student.name}</div>
                <div>Group: {student.group}</div>
                <div>Time: {student.time}</div>
            </div>
            )
       })
        return(
            <div className="student-list">
                {studentList}        
            </div>

        )
    }
}

export default Students