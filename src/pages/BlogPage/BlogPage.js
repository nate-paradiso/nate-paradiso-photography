import { useState, useEffect } from "react";
import "./BlogPage.scss";
import { LikesButton } from "../../components/LikesButton/LikesButton";
import { formatTimeFromNow } from "../../_utility/utility";
import avatar from "../../assets/images/Pngtree—avatar vector icon white background_5184638.png";
import ReactPlayer from "react-player";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { CommentForm } from "../../components/CommentForm/CommentForm";

export const BlogPage = () => {
  const [displayedPosts, setDisplayedPosts] = useState(6);
  const [blogPosts, setBlogPosts] = useState([]);

  console.log("hello from blog");

  const fetchBlogPosts = async () => {
    try {
      let fetchedBlogPosts = sessionStorage.getItem("blogPosts");
      if (!fetchedBlogPosts) {
        const response = await axios.get("/.netlify/functions/fetchBlogPosts");
        fetchedBlogPosts = response.data.record;
      } else {
        fetchedBlogPosts = JSON.parse(fetchedBlogPosts);
      }
      const updatedBlogData = fetchedBlogPosts.map(post => ({
        ...post,
        id: uuidv4(), // Always generate a new UUID
        images: post.images.map(image => ({
          ...image,
          id: uuidv4(), // Always generate a new UUID
        })),
        comments: post.comments.map(comment => ({
          ...comment,
          id: uuidv4(), // Always generate a new UUID
        })),
        paragraphs: post.paragraphs.map(paragraph => ({
          ...paragraph,
          id: uuidv4(), // Generate UUID for each paragraph
        })),
      }));
      sessionStorage.setItem("blogPosts", JSON.stringify(updatedBlogData));
      setBlogPosts(updatedBlogData);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };
  useEffect(() => {
    fetchBlogPosts();
    // Sort the blog posts by date (timestamp)
    blogPosts.sort((a, b) => b.timestamp - a.timestamp);
    // eslint-disable-next-line
  }, []);

  const handleUpdateLikes = (postId, updatedLikes) => {
    const updatedPost = blogPosts.map(blogPosts =>
      blogPosts.id === postId ? { ...blogPosts, likes: updatedLikes } : blogPosts,
    );
    setBlogPosts(updatedPost);
  };

  const handleLoadMore = () => {
    // Increase the number of displayed posts by 3 when the "Load More" button is clicked
    setDisplayedPosts(prevDisplayedPosts => prevDisplayedPosts + 3);
  };

  const onCommentPosted = () => {
    // Trigger a rerender by updating a state variable
    setBlogPosts(JSON.parse(sessionStorage.getItem("blogPosts")));
  };

  return (
    <article>
      {/* added a ternary to the entire body to check for axios data, if not there, then state loading... */}
      {blogPosts.length > 0 ? (
        <div className="blog">
          {blogPosts.slice(0, displayedPosts).map(post => (
            <div className="blog__post blog__post--line-break" key={post.id}>
              <h4 className="blog__post--title" key={post.id}>
                <Link to={`/blog/${post.urltitle}`}>{post.title}</Link>
              </h4>
              <p className="blog__post--time">{formatTimeFromNow(post.timestamp)}</p>
              {post.urlLink && (
                <p>
                  <NavLink className="blog__post--link" target="_blank" to={post.urlLink}>
                    {post.urlLink}
                  </NavLink>
                </p>
              )}
              <br />

              <div className="blog__post-container">
                {post.paragraphs.map(paragraph => (
                  <div key={paragraph.id}>
                    <p className="blog__post--body">{paragraph.paragraph}</p>
                    <br />
                  </div>
                ))}
              </div>

              <div className="blog__post--image-wrapper">
                {post.videos &&
                  post.videos.map(video => (
                    <ReactPlayer
                      className="blog__post--vid"
                      key={video.id}
                      url={video.videoUrl}
                      controls={true}
                    />
                  ))}
                {post.images &&
                  post.images.map(image => (
                    <img
                      className="blog__post--image"
                      key={image.id}
                      src={image.imgUrl}
                      alt={image.alt}
                    />
                  ))}
              </div>
              <CommentForm
                postTitle={post.title}
                onCommentPosted={onCommentPosted}
                setBlogPosts={setBlogPosts}
              />
              <h4 className="blog__post-comment--title">comments ({post.comments.length})</h4>
              {post.comments &&
                post.comments.map(comment => (
                  <div className="blog__post-comment" key={comment.id}>
                    <div className="blog__post-comment-container">
                      <div className="blog__post-comment-container-box">
                        <img
                          className="blog__post-comment-container--avatar"
                          src={avatar}
                          alt="avatar"
                        />
                        <h3 className="blog__post-comment-container--name">{comment.name}</h3>
                      </div>
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
          ))}
          {/* Display the "Load More" button if there are more posts to load */}
          {displayedPosts < blogPosts.length && (
            <div className="blog__load-more-container">
              <button className="blog__load-more-container--button" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          )}
        </div>
      ) : (
        <p>searching the vast web for blog posts.....</p>
      )}
    </article>
  );
};
