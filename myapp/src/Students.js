import React from 'react';
const Students = ({students, deleteStudent}) => {
    // This renders out the return template directly. the other 2 below output the data through a varible.
    // using a varible allows the logic and return template to be cleaner code.
       return(
           <div className="student-list">
               {
                   students.map(student=>{
                       return student.group==='advanced' ? (
                        <div className='student' key={student.id}>
                           <div>Name: {student.name}</div>
                           <div>Group: {student.group}</div>
                           <div>Time: {student.time}</div>
                           <button onClick={()=>deleteStudent(student.id)}>Delete Student</button>
                        </div>
                       ): null
                   })
               }
           </div>
       )
    }
//       using the IF statement 
//       ------------------------------------       
//       const studentList=students.map(student =>{
//           if(student.group==='advanced'){
//           return ( 
//            <div className="student" key={student.id}>
//                <div>Name: {student.name}</div>
//                <div>Group: {student.group}</div>
//                <div>Time: {student.time}</div>
//            </div>
//            )
//           } else {
//               return null
//           }
//       })
//        return(
//            <div className="student-list">
//                {studentList}        
//            </div>
//        )
//    }


//  using a ternary operator
//  -------------------------
//const studentList=students.map(student =>{
//   return student.group === 'advanced' ? (
//                <div className="student" key={student.id}>
//                   <div>Name: {student.name}</div>
//                   <div>Group: {student.group}</div>
//                   <div>Time: {student.time}</div>
//               </div>
//               ):null
//})
//        return(
//            <div className="student-list">
//                {studentList}        
//            </div>
//
//        )
//    }


export default Students