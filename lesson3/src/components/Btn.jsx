import React, {useState} from 'react'

//hook useSatae => [state, setState]


function Btn() {
                                 //начальное состояния 
    const [color, setColor] = useState("yellow");

    function randomColor() {
        const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
        setColor(newColor)
    }


    return (
        <>
            <h1>Color: {color}</h1>
            <button onClick={() => randomColor()} style={{ backgroundColor: color }}>Generate color</button>
        </>
    )
}

export default Btn