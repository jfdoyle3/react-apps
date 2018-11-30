import React from 'react'

const Todos = ({todos}) =>{
    
    const todoList= todos.length ? (
        todos.map(todo =>{
            return (
             <div className="collection-item" key={todo.id}>
                 <span>{todo.content}</span>
             </div> 
            )
        })
    ) : (
        <p className="center">Tasks Completes</p>
    )

    return (
        <div className="todos collections">

        </div>
    )
}

export default Todos