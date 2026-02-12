import React from 'react'
import { SubEmployeeList } from './SubEmployeeList'

export const EmployeeList = (props) => {
    console.log("emplist",props)
  return (
    <div style={{margin:"20px", textAlign:"center"}}>
        <h1>Employee List</h1>
        {props.title}
        <h1>{props.company.name}</h1>
        <h2>{props.company.year}</h2>
        <table className='table'>   
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {
                props.employees.map((emp)=>{
                    return <tr>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.age}</td>
                    </tr>
                
             
                })
            }
        </tbody>
        </table>

            <SubEmployeeList title={props.title}></SubEmployeeList>

    </div>
  )
}
