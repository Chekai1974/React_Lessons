const initialState = {
    posts: [],
    error: null
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POSTS_SUCCESS":
            return {
                ...state,
                posts: action.payload,
            };
        case "FETCH_POSTS_ERROR":
            return {
                ...state,
                error: action.error
            }
        case "DELETE_POSTS_SUCCESS":
            const newPosts = state.posts.filter(post => post.id !== action.payload)
            return { ...state, posts: newPosts }
        case "DELETE_POSTS_ERROR":
            return {...state, error: action.error};
        
        default:
        return state;
    };
};