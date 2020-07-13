import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import './custom_nav.css'
import  $ from 'jquery';

const Menu = () =>{
  useEffect(()=>{
    $('.hide_nav').on('click', function(){
      window.$('.navbar-collapse').collapse('hide');
      console.log('test');
  });
  })


    return(
        <nav className="navbar navbar-expand-lg custom_nav">
        <div className="container">
        <a className="navbar-brand" href="#">Portfolio</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav" aria-controls="mynav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
  </button>

  <div className="collapse navbar-collapse" id="mynav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link hide_nav"  to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link hide_nav" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link hide_nav" to="/education">Education</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link hide_nav" to="/skill">Skill</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link hide_nav" to="/projects">Project</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link hide_nav" to="/contact">Contact</Link>
      </li>
      
     
    </ul>
    
  </div>
        </div>
</nav>
    )
}

export default Menu