import React from 'react';

const Students = ({students}) => {
    // This renders out the template directly. the other 2 below output the data through a varible.
    // using a varible allows the the logic and template to be cleaner code.
       return(
           <div className="student-list">
               {
                   students.map(student=>{
                       return student.group==='advanced' ? (
                        <div className='student' key={student.id}>
                           <div>Name: {student.name}</div>
                           <div>Group: {student.group}</div>
                           <div>Time: {student.time}</div>
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