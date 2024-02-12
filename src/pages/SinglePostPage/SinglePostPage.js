import React from "react";
import { useParams } from "react-router-dom";
import "./SinglePostPage.scss";

export const SinglePostPage = () => {
  const { postId } = useParams();
  console.log(postId);

  return (
    <div>
      <div>
        <h2>Post ID: {postId}</h2>
        {/* Display other details of the post */}
      </div>
    </div>
  );
};
