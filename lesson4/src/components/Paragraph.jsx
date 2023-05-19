import React from 'react'

function Paragraph() {
    function pToConsole(event) {
        console.log(`Text paragraphs: ${event.target.textContent}`);
    }
    return (
        <div onClick={pToConsole}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat animi expedita voluptates aspernatur. Pariatur alias rerum totam reiciendis impedit quidem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolorum!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vel. Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </div>
  )
}

export default Paragraph