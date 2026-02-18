import { useState } from 'react'
import axios from 'axios'

export const ApiDemo3 = () => {

    const [comments, setcomments] = useState([])
    const getComments = async()=>{
        const response = await axios.get(" https://dummyjson.com/comments")
        console.log(response)
        setcomments(response.data.comments)
    }

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>

        <h1>TABLE 2</h1>

        <table border="1" align="center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>BODY</th>
                            <th>POST ID</th>
                            <th>LIKES</th>
                            <th>USER ID</th>
                            <th>USERNAME</th>
                            <th>FULLNAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            comments.map((comment)=>{
                                return <tr> 
                            <td>{comment.id}</td>
                            <td>{comment.body}</td>
                            <td>{comment.postId}</td>
                            <td>{comment.likes}</td>
                            <td>{comment.user.id}</td>
                            <td>{comment.user.username}</td>
                            <td>{comment.user.fullName}</td>
                            </tr>
                            })
                        }

                    </tbody>
                </table>
                        <button onClick={()=>{getComments()}}>GET</button>
      
    </div>
  )
}
