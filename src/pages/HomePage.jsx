import React, { useState } from "react";
import CardPosts from "../components/CardPosts";
import AddPostsComp from "../components/modal/AddPostsComp";

function HomePage() {
  const [modal, setmodal] = useState(false);

  return (
    <div className="px-4">
      <div className="flex justify-between items-center mb-8 mt-4 px-10">
        <p className="text-gray-400 text-2xl font-semibold"></p>
        <button
          onClick={() => setmodal(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-2 rounded-md "
        >
          Add Todo
        </button>
      </div>
      <AddPostsComp Show={modal} Close={() => setmodal(false)} />
      <CardPosts />
    </div>
  );
}

export default HomePage;
