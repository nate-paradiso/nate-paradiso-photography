import { useState, useEffect } from "react";
// import blogData from "../../data/blog-posts.json";
import "./BlogPage.scss";
import { LikesButton } from "../../components/LikesButton/LikesButton";
import { formatTimeFromNow } from "../../_utility/utility";
import avatar from "../../assets/images/Pngtree—avatar vector icon white background_5184638.png";
import ReactPlayer from "react-player";
import { NavLink, Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4 function
import { SinglePostPage } from "../SinglePostPage/SinglePostPage";

export const BlogPage = () => {
  const [displayedPosts, setDisplayedPosts] = useState(6);

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get("/.netlify/functions/fetchBlogPosts");
        const fetchedBlogPosts = response.data.record;
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
          paragraph: Array.isArray(post.paragraph)
            ? post.paragraph.map(paragraph => ({
                ...paragraph,
                id: uuidv4(), // Preserve UUIDs for paragraphs
              }))
            : [],
        }));
        setBlogPosts(updatedBlogData);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchBlogPosts();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
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
  return (
    <article>
      {/* added a ternary to the entire body to check for axios data, if not there, then state loading... */}
      {blogPosts.length > 0 ? (
        <div className="blog">
          {blogPosts.slice(0, displayedPosts).map(post => (
            <div className="blog__post blog__post--line-break" key={post.id}>
              <h4 className="blog__post--title">
                <Link to={`/blog/${post.urltitle}`}>{post.title}</Link>{" "}
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
                    <p key={post.id} className="blog__post--body">
                      {post.paragraph}
                    </p>
                  )}
                </div>
              )}

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
      <Routes>
        <Route
          path="/blog/:title"
          element={<SinglePostPage blogPosts={blogPosts} setBlogPosts={setBlogPosts} />}
        />
      </Routes>
    </article>
  );
};
