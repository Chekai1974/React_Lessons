import React, { useContext, useEffect } from 'react'
import { MyContext } from '../MyContext'
import { useParams } from 'react-router-dom'


function SinglPost() {
    const { getComents,comments } = useContext(MyContext)
    let {id} = useParams()

    useEffect(() => {
        getComents(id)
    },[id])

    return (
        <div>{comments.map((elem) => {
            return (
                <>
                    <h1>{elem.name}</h1>
                    <h1>{elem.email}</h1>
                </>
            )
            
        })}</div>
    )
}

export default SinglPost