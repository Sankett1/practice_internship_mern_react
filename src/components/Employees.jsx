import React from 'react'
import { EmployeeList } from './EmployeeList';

export const Employees = () => {

    var title = "Employee application"

    var company = {
        name:"sarjan Pvt Ltd",
        year:1990
    }

    var employees = [
        {id:1, name:"john", age:30},
        {id:2, name:"michael", age:35},
        {id:3, name:"susan", age:28},
        {id:4, name:"robert", age:40},
        {id:5, name:"linda", age:32}
    ]

  return (
    <div style={{margin:"20px", textAlign:"center"}}>
        <h1>Employees</h1>
        <EmployeeList title={title} company={company} employees={employees}></EmployeeList>

    </div>
  )
}
