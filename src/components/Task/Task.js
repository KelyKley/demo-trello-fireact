import React, {Component} from 'react'
import './Task.css';

const Task = ({title}) =>  (
         <div className = 'Task-container'>
            <div className='Task-title' contenteditable="true">  {title} </div>
         </div>
) ;

export default Task;