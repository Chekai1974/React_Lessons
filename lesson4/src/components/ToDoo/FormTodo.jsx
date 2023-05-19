import React from 'react'

function FormTodo({addText}) {
    const submitTodo = (e) => {
        e.preventDefault()
        const text = e.target.text.value
        addText(text)
        e.target.reset()
    }
  return (
        <form onSubmit={submitTodo}>
          <input type="text" name="text" required />
          <button>Add Text</button>
        </form>
  )
}

export default FormTodo
// постановка задачи
//         - Задача: Создать компонент с формой, который добавляет новое дело в состояние todo
//         разбор задачи
//         - Создаем компонент AddTodo, FormTodo и верстаем там форму
//         - В AddTodo создаем функцию addNewTodo, которая позволяет добавить новое дело в состояние todos и передаем ее в Formtodo
//         - Описываем обработчик формы, который останавливает сетевой запрос через event.preventDefault() и формирует объект с данными из формы
//         - При отправку формы вызываем функцию addNewTodo и передаем туда новый объект с постом. В качестве id используем Date.now() (заглушка).