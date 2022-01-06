import React from "react";

function DetailTodo(props) {
  const { item } = props;

  const handleChange = () => {};
  const handleSubmit = () => {};

  return (
    props.Show && (
      <div className="fixed bg-zinc-800 bg-opacity-20 pt-20 top-0 right-0 bottom-0 left-0">
        <div className="w-3/5 lg:w-1/4 px-2 py-2 mx-auto bg-white rounded-lg">
          <div className="flex justify-between">
            <p className="text-xs text-zinc-500">Detail Todo</p>
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
              defaultValue={item?.title}
              onChange={handleChange}
            />
          </div>
          <div className="w-fulll  shadow-lg py-2 bg-gray-100 mt-4 rounded-lg px-2">
            <input
              type="text"
              name="description"
              className="w-full bg-gray-100 text-zinc-500 px-2"
              placeholder="description"
              defaultValue={item?.description}
              onChange={handleChange}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold w-full rounded-lg py-2 mt-2 "
          >
            UPDATE
          </button>
        </div>
      </div>
    )
  );
}

export default DetailTodo;
