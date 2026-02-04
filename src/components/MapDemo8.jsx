import React from 'react'
import image from '../assets/images/virat.jpg'

export const MapDemo8 = () => {

    var users =[
            {id:1,name:"rahul", age:28,city:"delhi",gender:"male", image:image},
            {id:2,name:"anjali", age:22,city:"mumbai",gender:"female", image:image},
            {id:3,name:"kartik", age:35,city:"bangalore",gender:"male", image:image},
            {id:4,name:"priya", age:30,city:"chennai",gender:"female", image:image}
    ]

  return (
    <div>
        <h1 style={{textAlign:"center", color:"blue"}}>Map Demo 8</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th> 
                    <th>City</th>
                    <th>Gender</th>
                    <th>Image</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    users.map((u)=> {
                        return <tr style={{fontWeight: u.id === 4 && "bold" }} key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td style={{backgroundColor: u.age > 27 ? "purple": "white"}}>{u.age}</td>
                            <td>{u.city}</td>
                            <td style={{color: u.gender === "female" ? "lightcoral": "black"}}>{u.gender}</td>
                            <td> 
                                 {u.image && <img src={u.image} clalt="user" width="50" height="50"/>}
                                   
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        
    </div>
  )
}
