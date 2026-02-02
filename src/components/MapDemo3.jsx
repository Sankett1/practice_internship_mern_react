import React from 'react'

export const MapDemo3 = () => {

        var students=[
            {id:1, name:"amit", age:24, city:"Delhi", course:"MERN", gender:"male"},
            {id:2, name:"priya", age:22, city:"Mumbai", course:"JAVA", gender:"female"},
            {id:3, name:"guru", age:24, city:"Bangalore", course:"PYTHON", gender:"male"},
            {id:4, name:"sunita", age:26, city:"Chennai", course:"ANGULAR", gender:"female"},
            {id:5, name:"rohit", age:28, city:"Hyderabad", course:"AI", gender:"male"},
        ]
  return (
    <div>
        <h1>MapDemo3</h1>
        <table border="2" align='center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Course</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((st)=> {
                        return <tr>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td>{st.age}</td>
                            <td>{st.city}</td>
                            <td>{st.course}</td>
                            <td>{st.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
