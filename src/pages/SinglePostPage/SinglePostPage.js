import "./SinglePostPage.scss";
import { formatTimeFromNow } from "../../_utility/utility";
import avatar from "../../assets/images/Pngtree—avatar vector icon white background_5184638.png";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { LikesButton } from "../../components/LikesButton/LikesButton";

export const SinglePostPage = ({ blogPosts, setBlogPosts }) => {
  const navigate = useNavigate();
  const { title } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Find the post with the matching postId from the blogData array
    const foundPost = blogPosts.find(post => post.urltitle === title);
    setPost(foundPost);
  }, [blogPosts, title]);

  const handleNavigateBack = () => {
    navigate("/blog");
    window.scrollTo(0, 0);
  };
  const handleUpdateLikes = (postId, updatedLikes) => {
    // Update the likes of the current post
    const updatedPost = { ...post, likes: updatedLikes };
    // Update the state to reflect the changes
    setPost(updatedPost);
    // Optionally, you can also update the likes in the parent component
    const updatedBlogPosts = blogPosts.map(blogPost =>
      blogPost.id === postId ? updatedPost : blogPost,
    );
    setBlogPosts(updatedBlogPosts);
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
          {post.urlLink && (
            <p>
              <NavLink className="blog__post--link" target="_blank" to={post.urlLink}>
                {post.urlLink}
              </NavLink>
            </p>
          )}
          <br />
          {post.paragraph && (
            <div>
              {Array.isArray(post.paragraph) ? (
                post.paragraph.map(paragraph => (
                  <div key={paragraph.id}>
                    <p className="blog__post--body">{paragraph.para}</p>
                    <br />
                  </div>
                ))
              ) : (
                <p className="blog__post--body">{post.paragraph}</p>
              )}
            </div>
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
            post.comments.map(comment => (
              <div className="blog__post-comment" key={comment.id}>
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
            <LikesButton
              postId={post.id}
              likes={post.likes}
              handleUpdateLikes={handleUpdateLikes}
            ></LikesButton>
          </div>
        </div>
        <div className="blog__load-more-container">
          <button onClick={handleNavigateBack} className="blog__load-more-container--button">
            Back to Blog
          </button>
        </div>
      </div>
    </article>
  );
};
