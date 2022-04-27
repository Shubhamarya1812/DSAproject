import React from 'react';

import "../components/navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
    return (
//         <div>
// {/*                   
//     <nav className="navigation max-width-1 m-auto">
//         <div className="nav-left">
//             <span>Algoguruzz</span>
//             <ul>
//             {/* <Link to="/">Home</Link>
//       <Link to="/contact">Contact</Link> */}
              
//             </ul>

//         </div>
//         <div className="nav-right">
//             <form action="/search.html" method="get">
//                 <input className="form-input" type="text" name="query" placeholder="Search Article"/>
//                 <button className="btn">Search</button>
//             </form>

//         </div>

//     </nav>
//  */}

<div>

 <nav className="navbar navbar-dark " style={{display:"block "}}>
  <nav className="navbar navbar-expand-lg navbar-light bg-black">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Algoguruzz</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <li><Link to="/" className="nav-link" href="#">Home</Link></li>
      
        
        </li>
        <li><Link to="/contact" className="nav-link" href="#">Contact</Link></li>
        <li><Link to="/search" className="nav-link" href="#">Search</Link></li>
        <li><Link to="/about" className="nav-link" href="#">About</Link></li>
      
        
      
    

      </ul>
      <form className="d-flex">
      <div class="container">
        <button type="button" class="btn btn-info btn-round" data-toggle="modal" data-target="#loginModal">
        Login
       </button>  
      </div>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</nav>


        </div>
    );
}

export default Navbar;