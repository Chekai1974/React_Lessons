import React, {useState, useEffect} from 'react'

function Local() {
    const [number, setNumber] = useState(() => {
        return Number(localStorage.getItem("number")) ?? 0
    })
    useEffect(() => {
        localStorage.setItem("number", number)
    },[number])
    return (
        <div>
            <p>{number}</p>
            <button onClick={()=> setNumber((prevNumber)=> prevNumber+1)}>Click on me</button>
        </div>
    )
}

export default Local