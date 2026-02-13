import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" to="/">NETFLIX</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      {/* <li class="nav-item active">
        <Link class="nav-link" to="/netflixhome">
             Home
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/netflixshows">
             Shows
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/netflixmovies">
             Movies
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/teamdetails">
             Teams
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/usestatedemo1">
             UseStateDemo1
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/usestatedemo2">
              UseStateDemo2
        </Link>
      </li>
        <li class="nav-item">
        <Link class="nav-link" to="/usestatedemo3">
              UseStateDemo3
        </Link>
      </li> */}
      <li class="nav-item">
        <Link class="nav-link" to="/employees">
              Employees
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/inputdemo1">
              InputDemo1
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/inputdemo2">
              InputDemo2
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo">
              FormDemo
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/form1">
              Form1
        </Link>
      </li>
     <li class="nav-item">
        <Link class="nav-link" to="/form2">
              Form2
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/form3">
              Form3
        </Link>
      </li>
      
    </ul>

  </div>
</nav>
    </div>
    
  )
}
