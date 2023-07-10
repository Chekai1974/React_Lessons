const initialState = {
  newPosts: [],
  error: null,
};

export const newPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POSTS_SUCCESS":
      const updatedPosts = [...state.newPosts, action.payload];
      return { ...state, newPosts: updatedPosts };
    case "ADD_PRODUCT_ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
};