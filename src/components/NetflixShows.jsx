import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div style={{textAlign:"center" , marginTop:"50px"}}>
        <h1>Netflix Shows </h1>
        <ul>
          <li> 
            <Link to="/watch/Stranger Things">Stranger Things</Link>
          </li>
            
          <li>
            <Link to="/watch/The Witcher">The Witcher</Link>
          </li>
          <li>
            <Link to="/watch/Money Heist">Money Heist</Link>
          </li>
          <li>
            <Link to="/watch/Bridgerton">Bridgerton</Link>
          </li>
          <li>
            <Link to="/watch/The Crown">The Crown</Link>
          </li>
        </ul>
    </div>
  )
}
