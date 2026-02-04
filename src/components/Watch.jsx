import React, { use } from 'react'
import { useParams } from 'react-router-dom';

export const Watch = () => {

    const movieName = useParams().name 

  return (
    <div style={{textAlign:'center', marginTop:'50px'}}>
        <h1>WATCHING......{movieName}</h1>
    </div>
  )
}
