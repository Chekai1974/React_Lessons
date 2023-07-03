import React, {useState, useEffect} from 'react'

function Timer() {
    const [num, setNum] = useState(0)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setNum((prevNum)=>prevNum+1)
        },2000)
        return () => {
            clearTimeout(timeout)
        }
    },[num])
    return (
        <div>
            <p>{num}</p>
        </div>
    )
}

export default Timer