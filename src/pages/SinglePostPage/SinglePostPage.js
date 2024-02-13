import "./SinglePostPage.scss";
// import { LikesButton } from "../../components/LikesButton/LikesButton";
import { formatTimeFromNow } from "../../_utility/utility";
import avatar from "../../assets/images/Pngtree—avatar vector icon white background_5184638.png";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SinglePostPage = ({ blogPosts }) => {
  const navigate = useNavigate();
  const { title } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const decodedTitle = decodeURIComponent(title);
    // Find the post with the matching postId from the blogData array
    const foundPost = blogPosts.find(post => post.title === decodedTitle);
    setPost(foundPost);
    // eslint-disable-next-line
  }, []);

  const handleNavigateBack = () => {
    navigate("/blog");
  };

  if (!post) {
    return <p>Cannot find post</p>;
  }

  return (
    <article>
      <div className="blog">
        <div className="blog__post blog__post--line-break">
          <h4 className="blog__post--title">{post.title}</h4>
          <p className="blog__post--time">{formatTimeFromNow(post.timestamp)}</p>
          {post.paragraph && (
            <div>
              {Array.isArray(post.paragraph) ? (
                post.paragraph.map((paragraph, index) => (
                  <>
                    <p key={index} className="blog__post--body">
                      {paragraph.para}
                    </p>
                    <br />
                  </>
                ))
              ) : (
                <p className="blog__post--body">{post.paragraph}</p>
              )}
            </div>
          )}

          {post.urlLink && (
            <a href={post.urlLink} target="_blank" rel="noopener noreferrer">
              Link
            </a>
          )}
          <div className="blog__post--image-wrapper">
            {post.videos &&
              post.videos.map((video, index) => (
                <ReactPlayer
                  key={index}
                  className="blog__post--vid"
                  url={video.videoUrl}
                  controls={false}
                />
              ))}
            {post.images &&
              post.images.map((image, index) => (
                <img key={index} className="blog__post--image" src={image.imgUrl} alt={image.alt} />
              ))}
          </div>
          {post.comments &&
            post.comments.map((comment, index) => (
              <div className="blog__post-comment" key={index}>
                <h4 className="blog__post-comment--title">comments ({post.comments.length})</h4>
                <div className="blog__post-comment-container">
                  <img className="blog__post-comment-container--avatar" src={avatar} alt="" />
                  <h3 className="blog__post-comment-container--name">{comment.name}</h3>
                  <p className="blog__post-comment-container--time">
                    {formatTimeFromNow(comment.timestamp)}
                  </p>
                </div>
                <p className="blog__post-comment--comment">{comment.comment}</p>
              </div>
            ))}
          <div className="blog__post--likes-button">
            <div>
              <p className="blog__post--tags">tags: {post.tags}</p>
            </div>
            {/* <LikesButton
            postId={post.id}
            likes={post.likes}
            // likes={post.likes === 0 ? "" : post.likes}
            // handleUpdateLikes={handleUpdateLikes}
        ></LikesButton> */}
          </div>
        </div>
        {/* <Link to="/blog"> */}
        <button onClick={handleNavigateBack} className="blog__load-more">
          Back to Blog
        </button>
        {/* </Link> */}
      </div>
    </article>
  );
};
