import React from 'react'

const Tasks = ({tasks}) =>{
    
    const taskList= tasks.length ? (
        tasks.map(task =>{
            return (
             <div className="collection-item" key={task.id}>
                 <span>{task.content}</span>
             </div> 
            )
        })
    ) : (
        <p className="center">Tasks Completed</p>
    )

    return (
        <div className="tasks collections">

        </div>
    )
}

export default Tasks