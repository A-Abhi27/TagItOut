import React from 'react';
import { Link } from "react-router-dom"

function Header(){

    return <header>
                <Link to="/" style={{textDecoration: "none"}}><span className="header">🎬 AAA Movies </span></Link>
                <Link to="/movies/search" className="searchlink" style={{textDecoration: "none"}}><span>Search 🔍</span></Link>
                <Link to="/movies/genres" className="headerlinks" style={{textDecoration: "none"}}><span>Genres</span></Link>
                <Link to="/movies/about" className="headerlinks" style={{textDecoration: "none"}}><span>About Us</span></Link><hr/>
     </header>
 }
 export default Header;