import { API } from "../../config/index";
import swal from "sweetalert";
export const GET_POSTS = "GET_POSTS";
export const ADD_POSTS = "ADD_POSTS";
export const UPDATE_POSTS = "UPDATE_POSTS";
export const DELETE_POSTS = "DELETE_POSTS";

export const getPosts = () => {
  return (dispatch) => {
    dispatch({
      type: GET_POSTS,
      payload: {
        loading: true,
        data: false,
        error: false,
      },
    });
    async function getPostsUser() {
      try {
        const response = await API.get("/todos", {});
        dispatch({
          type: GET_POSTS,
          payload: {
            loading: false,
            data: response.data,
            error: false,
          },
        });
      } catch (error) {
        dispatch({
          type: GET_POSTS,
          payload: {
            loading: false,
            data: false,
            error: error.message,
          },
        });
      }
    }
    return getPostsUser();
  };
};

export const addPosts = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_POSTS,
      payload: {
        loading: true,
        data: false,
        error: false,
      },
    });

    async function addPostsUser() {
      console.log("2. masuk actiion ");
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await API.post("/todos", data, config);
        dispatch({
          type: ADD_POSTS,
          payload: {
            loading: false,
            data: response.data,
            error: false,
          },
        });
        if (response.status === 201) {
          swal("Good job!", "Upload new Posts Success!", "success");
        }
      } catch (error) {
        console.log(error);
        dispatch({
          type: ADD_POSTS,
          payload: {
            loading: false,
            data: false,
            error: error.message,
          },
        });
      }
    }
    return addPostsUser();
  };
};

export const updatePosts = ({ data, id }) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_POSTS,
      loading: true,
      data: false,
      error: false,
    });

    async function updatePostsUser() {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await API.put(`/posts/${id}`, data, config);
        dispatch({
          type: UPDATE_POSTS,
          payload: {
            loading: false,
            data: response.data,
            error: false,
          },
        });
      } catch (error) {
        dispatch({
          type: UPDATE_POSTS,
          payload: {
            loading: false,
            data: false,
            error: error.message,
          },
        });
      }
    }
    return updatePostsUser();
  };
};

export const deletePosts = (id) => {
  return (dispatch) => {
    //   loading
    dispatch({
      type: DELETE_POSTS,
      payload: {
        loading: true,
        data: false,
        error: false,
      },
    });

    async function deletePostsUser() {
      try {
        const response = await API.delete(`/todos/${id}`);
        console.log(response);
        if (response.status === 200) {
          swal("Good job!", "Delete Posts Success!", "success");
          console.log("2. berhasil mendapatkan data");
          console.log(response.data);
        }
        dispatch({
          type: DELETE_POSTS,
          payload: {
            loading: false,
            data: response.data,
            error: false,
          },
        });
      } catch (error) {
        dispatch({
          type: DELETE_POSTS,
          payload: {
            loading: false,
            data: false,
            error: error.message,
          },
        });
      }
    }
    return deletePostsUser();
  };
};
