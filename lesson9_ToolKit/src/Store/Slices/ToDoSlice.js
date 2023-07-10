// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// export const fetchToDos = createAsyncThunk("todos/fetchTodos",
//     async (_, thunkAPI) => {
//         try {
//             const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
//             if (!response.ok) {
//                 throw new Error("Server Error")
//             }
//             const data = await response.json();
//             return data
//         } catch(err) {
//             return thunkAPI.rejectWithValue(err.message)
//         }
//     }
// )


// export const fetchToDoById = createAsyncThunk("todos/fetchToDoById",
//     async (todoId, { rejectWithValue }) => {
//         try {
//             const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
//             if (!response.ok) {
//                 throw new Error("Erro fetch")
//             }
//             const data = await response.json()
//             return data
//         } catch(e) {
//             return rejectWithValue(e.message)
//         }
//     }
// )


// export const todoSlice = createSlice({
//     name: "todo",
//     initialState: {
//         list: [
//             { id: 1, title: "поесть", done: true },
//             { id: 2, title: "побегать", done: false }
//         ]
//     },
//     reducers: {
//         add(state, action) {
//             state.list.push({
//                 id: Date.now(),
//                 title: action.payload,
//                 done: false,
//             })
//         },
//         remove(state, action) {
//             state.list = state.list.filter(({id}) => id !== action.payload)
//         },
//         changeStatus(state, action){
//             const target = state.list.find(({ id }) => id === action.payload)
//             target.done = !target.done
//         },
//         // доделать
//         // changeTitle(state, action){
//         //     const { id, title } = action.payload;
//         //     const target = state.list.find((item) => item.id === id);
//         //     if (target) {
//         //         target.title = title;
//         //     }
//         // },
//         // доделать
//         },
//         extraReducers: (buinder) => {
//             buinder
//             .addCase(fetchToDos.pending, (state) => {
//                 state.status = "Loading";
        
//             })
//             .addCase(fetchToDos.fulfilled, (state, action) => {
//                 state.status = "Resolve"
//                 state.list = action.payload.map((item) => ({
//                     ...item,
//                     done: item.completed,
//                 }))
//             })
//             .addCase(fetchToDos.rejected, (state, action) => {
//                 state.status = "Rejected";
//                 state.erro = action.payload
//             })
//             .addCase(fetchToDoById.pending, (state) => {
//                 state.todoStatus = "Loading"
//             })
//             .addCase(fetchToDoById.fulfilled, (state, action) => {
//                 state.todoStatus = "Resolved"
//                 state.currentTodo = action.payload
//             })
//             .addCase(fetchToDoById.rejected, (state, action) => {
//                 state.todoStatus = "Rejected"
//                 state.todoError = action.payload
//             })
//         }
// })
// console.log(todoSlice);
// export const { add, remove, changeStatus } = todoSlice.actions;
// export default todoSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchToDos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) {
        throw new Error("Server error!!");
      }
      const data = await response.json();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const fetchToDoById = createAsyncThunk(
  "todos/fetchTodoByid",
  async (todoId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
      );
      if (!response.ok) {
        throw new Error("Error fetching todo!!!");
      }
      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [
      { id: 1, title: "поесть", done: true },
      { id: 2, title: "побегать", done: false },
    ],
  },
  reducers: {
    add(state, action) {
      state.list.push({
        id: Date.now(),
        title: action.payload,
        done: false,
      });
    },
    remove(state, action) {
      state.list = state.list.filter(({ id }) => id !== action.payload);
    },
    changeStatus(state, action) {
      const target = state.list.find(({ id }) => id === action.payload);
      target.done = !target.done;
    },
    },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToDos.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchToDos.fulfilled, (state, action) => {
        state.status = "Resolve";
        state.list = action.payload.map((item) => ({
          ...item,
          done: item.completed,
        }));
      })
      .addCase(fetchToDos.rejected, (state, action) => {
        state.status = "Rejected";
        state.error = action.payload;
      })
      .addCase(fetchToDoById.pending, (state) => {
        state.todoStatus = "Loading";
      })
      .addCase(fetchToDoById.fulfilled, (state, action) => {
        state.todoStatus = "Resloved";
        state.currentTodo = action.payload;
      })
      .addCase(fetchToDoById.rejected, (state, action) => {
        state.todoStatus = "Rejected";
        state.todoError = action.payload;
      });
  },
});
console.log(todoSlice);

export const { add, remove, changeStatus } = todoSlice.actions;

export default todoSlice.reducer;