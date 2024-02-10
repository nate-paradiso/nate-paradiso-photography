import { useState, useEffect } from "react";
import blogData from "../../data/blog-posts.json";
import "./BlogPage.scss";
import { LikesButton } from "../../components/LikesButton/LikesButton";
import { formatTimeFromNow } from "../../_utility/utility";

export const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setBlogPosts(blogData);
  }, []);

  const handleUpdateLikes = (postId, updatedLikes) => {
    const updatedPost = blogData.map(blogData =>
      blogData.id === postId ? { ...blogData, likes: updatedLikes } : blogData,
    );
    setBlogPosts(updatedPost);
  };
  return (
    <article>
      {/* added a ternary to the entire body to check for axios data, if not there, then state loading... */}
      {blogPosts.length > 0 ? (
        <div className="blog">
          {blogPosts.map(post => (
            <div className="blog__post blog__post--line-break" key={post.id}>
              <h4 className="blog__post--title">{post.title}</h4>
              <p className="blog__post--time">{formatTimeFromNow(post.timestamp)}</p>
              <p className="blog__post--body">{post.body}</p>
              <div className="blog__post--image-wrapper">
                {post.images.map(image => (
                  <img
                    className="blog__post--image"
                    key={image.id}
                    src={image.imgUrl}
                    alt={image.alt}
                  />
                ))}
                {post.comments.map(comment => (
                  <p className="blog__post--image-comment" key={comment.id}>
                    {comment.comment}
                  </p>
                ))}
              </div>
              <div className="blog__post--likes-button">
                <div>
                  <p>tags: {post.tags}</p>
                </div>
                <LikesButton
                  postId={post.id}
                  likes={post.likes}
                  handleUpdateLikes={handleUpdateLikes}
                ></LikesButton>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>There are no posts right now. Come back soon!</p>
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
//               <p className="blog__post--body">{post.body}</p>
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
