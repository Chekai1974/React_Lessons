import React, {useState} from 'react'

function Div() {
    const [ color, setColor ] = useState("none")
    function randomColor() {
        const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
        setColor(newColor)
    }
    return (
        <div style={{ width: "500px", height: "500px", backgroundColor: color}} onMouseOut={()=>randomColor()} onMouseOver={()=>{randomColor()}}>
          
    </div>
  )
}

export default Div