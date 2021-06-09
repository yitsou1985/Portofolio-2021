import React from 'react';
import {Link,NavLink} from 'react-router-dom'; 
function Menu(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/myskill">My skill with React </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/myskill2">My skill with Hooks </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/whoiam">Who I am</NavLink>
      </li>
    
    </ul>
  </div>
</nav>
    )
}

export default Menu;