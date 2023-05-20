import React from 'react'

const Task =({title,description,deleteTask,index })=>{
    
    return(
      <div className='task'>
        <div>
        <h5>{title}</h5>
        <p>{description}</p>
        </div>
        <button onClick={()=>{deleteTask(index)}}>-</button>
      </div>
    )
  }

export default Task
