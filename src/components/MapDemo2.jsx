import React from 'react'

        var users =[
            {id:1,name:"rahul", age:28,gender:"male"},
            {id:2,name:"anjali", age:22,gender:"female"},
            {id:3,name:"kartik", age:35,gender:"male"},
            {id:4,name:"priya", age:30,gender:"female"}
        ]

export const MapDemo2 = () => {
  return (
    <div>
        <h1>Map Demo 2</h1>
        {
            users.map((u)=> {
                return <li>{u.id} - {u.name} - {u.age} - {u.gender}</li>
            })
        }
    </div>
  )
}
