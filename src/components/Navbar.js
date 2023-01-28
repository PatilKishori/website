import React from 'react'
import { Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
      <header id="header" className="fixed-top bg-dark ">
        <div className="container d-flex align-items-center">

          <h1 className="logo me-auto"><a href="index.html">Arsha</a></h1>
          <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

          <nav id="navbar" className="navbar">
            <ul>


             
              <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>
    </>
  )
}
