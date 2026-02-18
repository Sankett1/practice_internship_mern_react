import React, {useState} from 'react'
import axios from 'axios'

export const ApiDemo2 = () => {
    const [products, setproducts] = useState([])
    const getProducts = async()=>{

        const response = await axios.get("https://dummyjson.com/products")
        console.log(response)
        console.log(response.data)
        console.log(response.data.products)     
        setproducts(response.data.products)
       
    }


  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        

        <h1>TABLE 1</h1>
        

        <table border="1" align="center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>DESCRIPTION</th>
                            <th>CATEGORIES</th>
                            <th>PRISE</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product)=>{
                                return <tr> 
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td> 
                            
                            </tr>
                            })
                        }
                        
                    </tbody>
                </table>
             <button onClick={()=>{getProducts()}}>GET</button>

    </div>  
  )
}