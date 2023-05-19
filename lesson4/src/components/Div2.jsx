import React, {useState} from 'react'

function Div2() {
    const [cordinates, setCordinate] = useState({ x: 0, y: 0 })

    const hadeleMouseMove = (event) => {
        setCordinate({
            x: event.nativeEvent.offsetX,
            y: event.nativeEvent.offsetY,
        })
        
    }
    
    return (
        <div style={{ width: "500px",height: "500px", border: "3px solid black"}} onMouseMove={hadeleMouseMove}>
            <p style={{bottom:"0", left: "0", backgroundColor: "beige"}}>Координаты x: {cordinates.x} y: {cordinates.y}</p>
        </div>
    )
}

export default Div2