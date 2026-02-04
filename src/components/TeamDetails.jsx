import React from 'react'
import { Link } from 'react-router-dom'

export const TeamDetails = () => {

    var teamName = [
      {id:1, name:"Mumbai Indians"},
      {id:2, name:"Chennai Super Kings"},
      {id:3, name:"Kolkata Knight Riders"},
      {id:4, name:"Delhi Capitals"},
      {id:5, name:"Bangalore Royal Challengers"},
      {id:6, name:"Hyderabad Sunrisers"},
      {id:7, name:"Pune Warriors"},
      {id:8, name:"Gujarat Lions"},
      {id:9, name:"Rajasthan Royals"},
      {id:10, name:"Lucknow Kings"},
    ]


  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>

        <h1>Team Details Page</h1>
        {
            teamName.map((team)=>{
                return <li>
                        <Link to={`/playing/${team.name}`}>{team.name}</Link>
                                
                        </li>



            })
        }
    </div>
  )
}

