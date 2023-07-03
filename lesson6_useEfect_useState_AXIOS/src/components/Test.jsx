import React, {useEffect, useState} from 'react'

function Test() {
    // const test =  1;          масив зависемости
    // useEffect(callback func, [test])
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`Новое значения ${count}`);
    },[count])
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount((prevCount)=>prevCount+1)}>Click</button>
        </div>
    )
}

export default Test