import React from 'react'
import { useState } from 'react'

export const UseStateDemo1 = () => {

        const [count, setCount] = useState(0)
        const increseCount = () => {
            setCount(count + 1)
            console.log(`countafter increment`, count)
        }

  return (
    <div style={{textAlign:'center'}}>
        <h1>Use State Demo 1</h1>
        <h1>count={count}</h1>
        <button onClick={increseCount}>Increse Count</button>

    </div>
  )
}
