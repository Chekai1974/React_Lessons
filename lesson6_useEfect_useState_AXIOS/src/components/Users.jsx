import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

function Users() {
    const [users, setUsers] = useState(null)
    const [loadind, setLoading] = useState(true)
    const [error, seterror] = useState(null)
    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users")
                setUsers(response.data)
                setLoading(false)
                throw new Error("Error")
            } catch(error){
                seterror(error.message)
                setLoading(false)
            }
        }
        getData()
    }, [])
    if (loadind) {
        return <p>Данные грузяться...</p>
    }
    if (error) {
        return <p>Error:{error}</p>
    }
    return (
        <ul>
            {users.map((elem, i) => {
                return <li key={i}>{elem.name}</li>
            })}
        </ul>
    )
}

export default Users
// https://giphy.com/clips/buzzfeed-cookie-black-family-tries-each-others-chocolate-chip-cookies-tEZddLFxIgq6WRU5Ev