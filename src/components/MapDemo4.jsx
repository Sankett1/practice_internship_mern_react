import React from 'react'

export const MapDemo4 = () => {

    var cities = [{id:1,name:"ahemdabad",pop:1000000,AQI:320},
                  {id:2,name:"surat",pop:2000000,AQI:240},
                  {id:3,name:"vadodara",pop:1500000,AQI:280},
                  {id:4,name:"rajkot",pop:1200000,AQI:200}];

  return (
    <div style={{ textAlign: 'center' }}>
        <h1>MapDemo4</h1>
        <table className="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>City Name</th>
                    <th>Population</th> 
                    <th>AQI</th>
                </tr>
            </thead>
            <tbody>
                {
                    cities.map((ct)=> {
                        return <tr>
                            <td>{ct.id}</td>
                            <td>{ct.name}</td>
                            <td>{ct.pop}</td>
                            <td>{ct.AQI}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
