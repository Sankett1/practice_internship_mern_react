import React from 'react'

export const MapDemo5 = () => {
     var students=[
            {id:1, name:"amit", age:24, city:"Delhi", course:"MERN", gender:"male"},
            {id:2, name:"priya", age:22, city:"Mumbai", course:"JAVA", gender:"female"},
            {id:3, name:"guru", age:24, city:"Bangalore", course:"PYTHON", gender:"male"},
            {id:4, name:"sunita", age:26, city:"Chennai", course:"ANGULAR", gender:"female"},
            {id:5, name:"rohit", age:28, city:"Hyderabad", course:"JAVA", gender:"male"},
        ]
  return (
    <div style={{ textAlign: 'center' }}>
        <h1>MapDemo5</h1>
        <table className='table'>
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
                            <td style={{color: st.age > 27 ? "red" : "black"}}>{st.age}</td>
                            <td>{st.city}</td>
                            <td style={{backgroundColor: st.course === "JAVA" && "yellow"}}>{st.course}</td>
                            <td style={{color: st.gender === "male" && "darkblue"}}>{st.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>

  )
}
