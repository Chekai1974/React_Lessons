import React from 'react'

function Form({addNewPost}) {
    const handlSubmit = (e) => {
        e.preventDefault()
        const title = e.target.title.value;
        const text = e.target.text.value;
        addNewPost({
            title,
            text
        })
        e.target.reset()
    }
    return (
        <form onSubmit={handlSubmit}>
            <input type='text' name="title" placeholder='Заголовок' required></input>
            <input type='text' name="text" placeholder='Текс поста' required></input>
            <button type='submit'>Add post</button>
        </form>
    )
}

export default Form