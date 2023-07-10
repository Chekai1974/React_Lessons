const posts = [
    { id: 1, content: "Post1"},
    { id: 2, content: "Post2"},
    { id: 3, content: "Post3"},
]

const postReducers = (state = posts, action) => {
    switch (action.type) {
        case "ADD_POST":
            return  [...state, action.payload];
        case "DELETE_POST":
            return state.filter((posts)=> posts.id !== action.payload)
        default:
            return state;
    }
}
export default postReducers; 