import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, deletePosts } from "../store/actions/PostsAction";
import DetailTodo from "./modal/DetailTodo";

import Error from "./response/Error";
import Loading from "./response/Loading";
function CardPosts() {
  const dispatch = useDispatch();
  const [detail, setdetail] = useState(false);
  const [data, setdata] = useState(null);
  const { deleteResult, resultPosts, PostsLoading, PostsError } = useSelector(
    (state) => state.PostsReducer
  );

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    if (deleteResult) {
      dispatch(getPosts());
    }
  }, [dispatch, deleteResult]);

  const handleDelete = (id) => {
    dispatch(deletePosts(id));
  };
  const handleShow = (item) => {
    setdetail(true);
    setdata(item);
  };
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {PostsLoading ? (
        <Loading />
      ) : PostsError ? (
        <Error />
      ) : resultPosts.length > 0 ? (
        resultPosts?.map((item, idx) => (
          <div
            key={idx}
            className="border-2 border-box border-gray-100  py-4 px-4 rounded-lg shadow-xl"
          >
            <div className="w-full h-40 bg-gray-200 rounded-lg">
              <img
                src={`https://source.unsplash.com/random/200x200?sig=${item?.id}`}
                alt="imagerandom"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="mt-2">
              <p className="text-gray-500 lg:text-md text-xs font-semibold">
                {item?.title}
              </p>
            </div>
            <DetailTodo
              Show={detail}
              item={data}
              Close={() => setdetail(false)}
            />
            <div className="flex gap-2 mt-2 ">
              <p onClick={() => handleDelete(item?.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </p>
              <p onClick={() => handleShow(item)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))
      ) : (
        <div>Not todo</div>
      )}
    </div>
  );
}

export default CardPosts;
