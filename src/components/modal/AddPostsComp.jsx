import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, getPosts } from "../../store/actions/PostsAction";
function AddPostsComp(props) {
  const dispatch = useDispatch();
  const { addResult } = useSelector((state) => state.PostsReducer);
  const [form, setform] = useState({
    title: "",
    description: "",
    status: false,
  });

  console.log(addResult);

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addPosts({
        title: form.title,
        description: form.description,
        status: form.status,
      })
    );
  };

  useEffect(() => {
    if (addResult) {
      dispatch(getPosts());
    }
  }, [dispatch, addResult]);

  return (
    props.Show && (
      <div className="w-full px-8 lg:px-0 fixed top-0 py-10 bg-zinc-800 bg-opacity-25 right-0 bottom-0 left-0">
        <div className="z-20 bg-white rounded-lg mx-auto w-full lg:w-2/4 py-4 px-4">
          <div className="flex justify-between">
            <p className="font-bold text-shadow-300 text-zinc-400">
              ADD NEW TODO
            </p>
            <button onClick={() => props.Close(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="w-full  shadow-lg py-2 bg-gray-100 mt-4 rounded-lg px-2">
            <input
              type="text"
              name="title"
              className="w-full bg-gray-100 text-zinc-500 px-2 "
              placeholder="title"
              onChange={handleChange}
            />
          </div>
          <div className="w-fulll  shadow-lg py-2 bg-gray-100 mt-4 rounded-lg px-2">
            <input
              type="text"
              name="description"
              className="w-full bg-gray-100 text-zinc-500 px-2"
              placeholder="description"
              onChange={handleChange}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold w-full rounded-lg py-2 mt-2 "
          >
            ADD
          </button>
        </div>
      </div>
    )
  );
}

export default AddPostsComp;
