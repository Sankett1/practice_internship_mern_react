import React from 'react'

let cars = ["BMW", "Volvo", "Saab", "Ford"];

export const MapDemo1 = () => {
  return (

        
    <div>
        <h1>Map Demo 1</h1>
        {
            cars.map((c)=> {
                return <h1>{c} </h1>
            })
        }
    </div>
  )
}
