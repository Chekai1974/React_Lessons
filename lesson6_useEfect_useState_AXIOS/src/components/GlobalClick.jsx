// import React, {useState,useEffect} from 'react'

// function GlobalClick() { 
//     const [count, setCount] = useState(0)

//     const documentClick = () => {
//         setCount((prevCount) => prevCount + 1)
//     }

//     useEffect(() => {
//         document.addEventListener('click', documentClick)
//         return ()=> document.removeEventListener('click', documentClick)
//     }, [count])
    
//     return (
//         <div>
//             <p>{count}</p>
//         </div>
//     )
// }

// export default GlobalClick
import React, {useState,useEffect} from 'react'

function GlobalClick() { 
    const [count, setCount] = useState(0)
    useEffect(() => {
        const documentClick = () => {
            setCount((prevCount) => prevCount + 1)
        }
        document.addEventListener("click", documentClick)
        return ()=> document.removeEventListener('click', documentClick)
    },[count])
    return (
        <div>
            <p>{count}</p>
        </div>
    )
}

export default GlobalClick

//axios для HTTPS запросов 
