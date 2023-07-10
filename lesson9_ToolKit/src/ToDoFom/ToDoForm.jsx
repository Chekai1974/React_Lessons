import "./ToDoForm.css"
import { useDispatch } from "react-redux"
import { add } from "../Store/Slices/ToDoSlice"

function ToDoForm() {
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(add(e.target.title.value))
        e.target.reset()
    }
    return (
        <form onSubmit={onSubmit} className="form">
            <input type="text" name="title" placeholder="title..."></input>
            <button>Add</button>
        </form>
    )
}
export default ToDoForm;