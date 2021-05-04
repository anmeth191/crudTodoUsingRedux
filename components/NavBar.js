import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = ()=>{

return(
    <div className="navBarMain item"> 
    <div className="navBarMain-logo"><h2>TODO REDUX</h2></div>
    <nav className="navBarMain-container">
    <div className="navBarMain-container-elements">
    <ul className="navBarMain-container-elements-ul"> 
   <li className="navBarMain-container-elements-ul-li"><Link to="/" className="navBarMain-container-elements-ul-li-link">Home</Link></li>
      </ul>
      </div>
     </nav>
     </div>
)
}

export default NavBar;