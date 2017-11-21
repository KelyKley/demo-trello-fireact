
import React from 'react'
import {addStage} from '../../actions/actions'
import { NavLink, Redirect} from 'react-router-dom';
import Stage from '../Stage/Stage';

const NavBar = () => {
  return (
    <div id="k-nav">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <h1 className="navbar-brand navi">
              <img  alt="Brand" src="https://a.trellocdn.com/images/50b4ebc64391dc394a38e73aed57f0e2/header-logo.png"/>
            </h1>
          </div>
        </div>
      </nav>
    </div>
  );
};

const MyBoards = () => {


   return (
    <div>
       <NavBar/>
       <NavLink to="/trello" class="container-boards">
         <h3> Homework 1</h3>
       </NavLink>
       <NavLink to="/trello" class="container-boards">
         <h3> Homework 2</h3>
       </NavLink>
    </div>
   ); 
}

export default MyBoards;
