import React from 'react'
import { useState } from 'react'

export const UseStateDemo3 = () => {

    const[users,setUsers]= useState([
        {name:"Rahul",email:"rahul@gmail.com",age:25},
        {name:"Raj",email:"raj@gmail.com",age:26},
        {name:"Ramesh",email:"ramesh@gmail.com",age:27}])

    const addUser = () => {
        const newUser = {name:"Vijay",email:"vijay@gmail.com",age:28}
        setUsers([...users,newUser])
    }

  return (
    <div>
        <h1>Use State Demo 3</h1>
        {
            users.map((item,index) => {
                return <li key={index}>{item.name} - {item.email} - {item.age}</li>
            })
        }
        <button onClick={addUser}>Add</button>
    </div>
  )
}
