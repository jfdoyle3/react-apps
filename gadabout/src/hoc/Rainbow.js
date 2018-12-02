import React from 'react'

const Rainbow =(WrappedComponent) =>{

    const colors=['red','blue','purple','yellow','green','orange'],
          randomColor=colors[Math.floor(Math.random()*5)],
          className= randomColor + '-text'
         return(props)=>{
          return(
              <div className={className}>
              <WrappedComponent {...props} />
              </div>
          )
     }
}

export default Rainbow