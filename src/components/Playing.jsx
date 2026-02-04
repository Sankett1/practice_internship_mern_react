import React, { use } from 'react'
import { TeamDetails } from './TeamDetails'
import { useParams } from 'react-router-dom';

export const Playing = () => {

    const TeamDetails = useParams().name

  return (
    <div style={{textAlign:'center', marginTop:'50px'}}>
         <h1> {TeamDetails} is Playing Now </h1>
    </div>
  )
}
