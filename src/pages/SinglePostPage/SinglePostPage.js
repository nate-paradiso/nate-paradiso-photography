import "./SinglePostPage.scss";
import { formatTimeFromNow } from "../../_utility/utility";
import avatar from "../../assets/images/Pngtree—avatar vector icon white background_5184638.png";
import ReactPlayer from "react-player";
import React, { useState, useEffect } from "react";
import { useNavigate, NavLink, useLocation, useParams } from "react-router-dom";
import { LikesButton } from "../../components/LikesButton/LikesButton";

export const SinglePostPage = () => {
  const navigate = useNavigate();
  const { title } = useParams();
  const location = useLocation();
  const { blogPosts, setBlogPosts } = location.state || {};
  const [post, setPost] = useState(null);
  console.log("hello from single post");

  useEffect(() => {
    // Retrieve blog posts data from session storage
    const storedBlogPosts = sessionStorage.getItem("blogPosts");
    if (storedBlogPosts) {
      const parsedBlogPosts = JSON.parse(storedBlogPosts);
      const foundPost = parsedBlogPosts.find(post => post.urltitle === title);
      setPost(foundPost);
    } else {
      navigate("/blog"); // Handle the case when blog posts data is not found in session storage
    }
  }, [title, navigate]);

  const handleNavigateBack = () => {
    navigate("/blog", { state: { blogPosts } }); // Pass blogPosts as state when navigating back
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
          <div>
            {post.paragraphs.map(paragraph => (
              <div key={paragraph.id}>
                <p className="blog__post--body">{paragraph.paragraph}</p>
                <br />
              </div>
            ))}
          </div>

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
