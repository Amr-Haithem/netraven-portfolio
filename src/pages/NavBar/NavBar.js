import React from 'react';
import { Link} from "react-router-dom"
import './NavBar.css';


const NavBar = () => {
    return (  
        <nav className="NavBar">
            <Link exact to="/" activeStyle>Home</Link>
            <Link to="/ProjectsPage">Projects</Link>
            <Link to="#">Contact me</Link>
        </nav>
    );
}
 
export default NavBar;