import axios from "axios";

export const newPostAction = (post) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        post
      );
      const newPostID = response.data.id;

      dispatch({
        type: "ADD_POSTS_SUCCESS",
        payload: { ...post, id: newPostID },
      });
    } catch (err) {
      dispatch({ type: "ADD_POSTS_ERROR", error: err.message });
    }
  };
};