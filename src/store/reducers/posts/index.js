import {
  GET_POSTS,
  ADD_POSTS,
  UPDATE_POSTS,
  DELETE_POSTS,
} from "../../actions/PostsAction";

const initialState = {
  // get posts
  resultPosts: false,
  PostsLoading: false,
  PostsError: false,

  addResult: false,
  addLoading: false,
  addError: false,

  deleteResult: false,
  deleteLoading: false,
  deleteError: false,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        resultPosts: action.payload.data,
        PostsLoading: action.payload.loading,
        PostsError: action.payload.error,
      };
    case ADD_POSTS:
      console.log("3. berhasil masuk ke state");
      return {
        ...state,
        addResult: action.payload.data,
        addLoading: action.payload.loading,
        addError: action.payload.error,
      };
    case DELETE_POSTS:
      console.log(action);
      return {
        ...state,
        deleteResult: action.payload.data,
        deleteLoading: action.payload.loading,
        deleteError: action.payload.error,
      };
    default:
      return state;
  }
};

export default posts;
