import React, { useEffect, useState } from 'react'
import axios from 'axios'
// https://jsonplaceholder.typicode.com/posts


function Posts() {
    const styles = {
        border: "1px solid black",
        width: "900px",
        textAlign: "center",
        padding: "10px"
    }
    const [posts,setPosts]= useState(null)
    const [loading,setLoading]= useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
                console.log(response.data);
                setPosts(response.data)
                setLoading(false)
            } catch(error){
                setError(error.message)
                setLoading(false)
            }
            
        }
        getData()
    }, [])
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error: {error}</p>
    }
    return (
        <div style={{display:"flex"}} >
            <ul style={{ margin: "0 auto",listStyle:"none" }}>
                {posts.map((elem, i) => {
                    return <li key={i} style={{...styles}}>
                        <p style={{fontSize: "20px", fontWeight:" 800px"}}>{`Title id: ${elem.id}`}</p>
                        <p>{`Title: ${elem.title}`}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Posts
