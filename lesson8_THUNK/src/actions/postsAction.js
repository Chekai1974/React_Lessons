import axios from "axios"

export const postsAction = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            dispatch({type: "FETCH_POSTS_SUCCESS", payload: response.data})
        } catch(error) {
            dispatch({ type: "FETCH_POSTS_ERROR", error: error.message});
        }
    }
}
export const deletePost = (postId) => {
    return async (dispatch) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            dispatch({ type:"DELETE_POSTS_SUCCESS", payload: postId})
        } catch(error) {
            dispatch({ type: "DELETE_POSTS_ERROR", error: error.meassage})
        }
    }
}