import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {

      var movies = [
        {movieId:1, movieName:"Inception"},
        {movieId:2, movieName:"The-Dark-Knight"},
        {movieId:3, movieName:"Interstellar"},
      ]

  return (
    <div style={{textAlign:"center" , marginTop:"50px"}}>
        <h1>Netflix Movies </h1>
        {
            movies.map((movie)=>{
                return <li>
                  <Link to={`/watch/${movie.movieName}`}>
                    {movie.movieName}
                  </Link>
                </li>
            }
                )
        }
    </div>
  )
}
