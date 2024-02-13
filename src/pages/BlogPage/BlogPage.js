import { useState, useEffect } from "react";
// import blogData from "../../data/blog-posts.json";
import "./BlogPage.scss";
// import { LikesButton } from "../../components/LikesButton/LikesButton";
import { formatTimeFromNow } from "../../_utility/utility";
import avatar from "../../assets/images/Pngtree—avatar vector icon white background_5184638.png";
import ReactPlayer from "react-player";
import { NavLink, Link } from "react-router-dom";

export const BlogPage = ({ blogPosts }) => {
  const [displayedPosts, setDisplayedPosts] = useState(3);

  useEffect(() => {
    // Sort the blog posts by date (timestamp)
    blogPosts.sort((a, b) => a.timestamp - b.timestamp);
    // eslint-disable-next-line
  }, []);

  // const handleUpdateLikes = (postId, updatedLikes) => {
  //   const updatedPost = blogData.map(blogData =>
  //     blogData.id === postId ? { ...blogData, likes: updatedLikes } : blogData,
  //   );
  //   setBlogPosts(updatedPost);
  // };

  const handleLoadMore = () => {
    // Increase the number of displayed posts by 3 when the "Load More" button is clicked
    setDisplayedPosts(prevDisplayedPosts => prevDisplayedPosts + 1);
  };
  return (
    <article>
      {/* added a ternary to the entire body to check for axios data, if not there, then state loading... */}
      {blogPosts.length > 0 ? (
        <div className="blog">
          {blogPosts.slice(0, displayedPosts).map(post => (
            <div className="blog__post blog__post--line-break" key={post.id}>
              <h4 className="blog__post--title">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h4>

              <p className="blog__post--time">{formatTimeFromNow(post.timestamp)}</p>
              {post.paragraph && (
                <div>
                  {Array.isArray(post.paragraph) ? (
                    post.paragraph.map(paragraph => (
                      <>
                        <p key={paragraph.id} className="blog__post--body">
                          {paragraph.para}
                        </p>
                        <br />
                      </>
                    ))
                  ) : (
                    <p key={post.id} className="blog__post--body">
                      {post.paragraph}
                    </p>
                  )}
                </div>
              )}

              {post.urlLink && (
                <NavLink target="_blank" to={post.urlLink}>
                  Here
                </NavLink>
              )}
              <div className="blog__post--image-wrapper">
                {post.videos &&
                  post.videos.map(video => (
                    <ReactPlayer
                      className="blog__post--vid"
                      key={video.id}
                      url={video.videoUrl}
                      controls={false}
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
                {/* <LikesButton
                  postId={post.id}
                  likes={post.likes}
                  // likes={post.likes === 0 ? "" : post.likes}
                  handleUpdateLikes={handleUpdateLikes}
                ></LikesButton> */}
              </div>
            </div>
          ))}
          {/* Display the "Load More" button if there are more posts to load */}
          {displayedPosts < blogPosts.length && (
            <button className="blog__load-more" onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </div>
      ) : (
        <p>Cannot find posts...sorry</p>
      )}
    </article>
  );
};

// the code below is for jsonbin.io api

// const { v4: uuid } = require("uuid");
// import { useState, useEffect } from "react";
// import "./BlogPage.scss";
// import axios from "axios";
// // import { LikesButton } from "../../components/LikesButton/LikesButton";
// import { formatTimeFromNow } from "../../_utility/utility";

// export const BlogPage = () => {
//   // const NETLIFY_AUTH_TOKEN = "nfp_xi2TyiKVS7EaoF7Q8DcaJA3YbEAGMXMn2818";
//   const [blogPosts, setBlogPosts] = useState([]);

//   useEffect(() => {
//     const fetchBlogPosts = async (xMasterKey, xAccessKey) => {
//       try {
//         const response = await axios.get(url, {
//           headers: {
//             "X-Master-Key": xMasterKey,
//             "X-Access-Key": xAccessKey,
//           },
//         });
//         console.log(response.data);
//         // Extract the record data from the response
//         const { record } = response.data;

//         // Set the blog posts state with the fetched data
//         setBlogPosts(record);
//       } catch (error) {
//         console.error("Error fetching blog posts:", error);
//       }
//     };

//     fetchBlogPosts(xMasterKey, xAccessKey);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

// const handleUpdateLikes = async (postId, updatedLikes) => {
//   console.log("Updating likes for post:", postId);
//   try {
//     const postUrl = `${url}/${postId}`;
//     console.log(postUrl);
//     const response = await axios.put(
//       postUrl,
//       { likes: updatedLikes },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "X-Master-Key": xMasterKey,
//           "X-Access-Key": xAccessKey,
//         },
//       },
//     );
//     console.log("Update response:", response.data);
//     // Assuming response.data contains the updated post
//     const updatedPost = response.data.record;
//     console.log("Updated post:", updatedPost);
//     // Update the state by mapping over the existing blogPosts array
//     const updatedBlogPosts = blogPosts.map(post =>
//       post.id === updatedPost.id ? updatedPost : post,
//     );
//     console.log("Updated blog posts:", updatedBlogPosts);
//     setBlogPosts(updatedBlogPosts);
//   } catch (error) {
//     console.error("Error updating likes:", error);
//     // Handle error gracefully, e.g., display an error message to the user
//   }
// };

//   return (
//     <article>
//       {/* added a ternary to the entire body to check for axios data, if not there, then state loading... */}
//       {blogPosts.length > 0 ? (
//         <div className="blog">
//           {blogPosts.map(post => (
//             <div className="blog__post blog__post--line-break" key={post.id}>
//               <h4 className="blog__post--title">{post.title}</h4>
//               <p className="blog__post--time">{formatTimeFromNow(post.timestamp)}</p>
//               <p className="blog__post--body">{post.paragraph}</p>
//               <div className="blog__post--image-wrapper">
//                 {post.images.map(image => (
//                   <img
//                     className="blog__post--image"
//                     key={image.id}
//                     src={image.imgUrl}
//                     alt={image.alt}
//                   />
//                 ))}
//                 {post.comments.map(comment => (
//                   <p className="blog__post--image-comment" key={comment.id}>
//                     {comment.comment}
//                   </p>
//                 ))}
//               </div>
//               <div className="blog__post--like-button">
//                 {/* <LikesButton
//                   postId={post.id}
//                   likes={post.likes}
//                   handleUpdateLikes={handleUpdateLikes}
//                 ></LikesButton> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="cannot-find">
//           <p className="cannot-find__text">Cannot find posts...sorry friend.</p>
//         </div>
//       )}
//     </article>
//   );
// };
