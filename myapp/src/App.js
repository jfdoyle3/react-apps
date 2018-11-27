import React, { Component } from 'react';
import Students from './Students';
import AddStudent from './AddStudent'

class App extends Component {
  state={
    students: [
      {name:'jim', group: 'intermediate', time:'evening', id: 1},
      {name:'juan', group: 'advanced', time:'evening', id: 2},
      {name:'Leah', group: 'advanced', time:'evening', id: 3},
    ]
  }
  addStudent=(student)=>{
    student.id=Math.random()
    let students=[...this.state.students, student]
    this.setState({
      students: students
    })
  }
  deleteStudent=(id)=>{
      let students=this.state.students.filter(student =>{
        return student.id != id
            })
        this.setState=({

        })
  }
  render() {
    return (
      <div className="App">
       <h1>Helllooo CareerDevs</h1>
       <p>Welcome :)</p>
       <Students deleteStudent={this.deleteStudent} students={this.state.students} />
       <AddStudent addStudent={this.addStudent}/>
      </div>
    );
  }
}

export default App;
