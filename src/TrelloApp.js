import React from 'react';
import Board from './components/Board/Board';
import {connect} from 'redux-zero/react'
import './TrelloApp.css';


const TrelloApp = ({stages, tasks}) => {
   console.log (stages);
   console.log (tasks);
   
   return <div className="App">
       
       <Board stages={stages}  tasks = {tasks}/>
   </div>
};
const mapToProps = ({stages, tasks})  => ({stages, tasks}) 

export default connect(mapToProps)(TrelloApp);
