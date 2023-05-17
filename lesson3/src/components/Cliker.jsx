import React, {useState} from 'react'

function Cliker() {
    const [number, setNumber] = useState(0)
    function setcliker() {
        const newNumber = number + 1
        setNumber(newNumber)
    }
    return (
        <>
            <p>{number}</p>
            <button onClick={()=> setcliker()}>Cliker</button>
        </>
    )
}

export default Cliker