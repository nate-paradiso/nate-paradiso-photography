// const { v4: uuid } = require("uuid");
// import { useState, useEffect } from "react";
// // import blogData from "../../data/blog-posts.json";
// import "./BlogPage.scss";
// import axios from "axios";
// import { LikesButton } from "../../components/LikesButton/LikesButton";
// // require("dotenv").config();

// export const BlogPage = () => {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const apiKey = process.env.REACT_APP_API_KEY;
//   const binId = process.env.REACT_APP_BIN_ID;
//   const url = `https://api.jsonbin.io/v3/b/${binId}`;

//   useEffect(() => {
//     const fetchBlogPosts = async (binId, apiKey) => {
//       try {
//         const response = await axios.get(url, {
//           headers: {
//             "X-Master-Key": apiKey,
//           },
//         });
//         setBlogPosts(response.data);
//       } catch (error) {
//         console.error("Error fetching blog posts:", error);
//       }
//     };

//     fetchBlogPosts(binId, apiKey);
//   }, [binId, apiKey, url]);

//   const handleUpdateLikes = async (postId, updatedLikes) => {
//     try {
//       const response = await axios.patch(
//         `https://api.jsonbin.io/v3/b/65c31407266cfc3fde86e117/${postId}`,
//         {
//           likes: updatedLikes,
//         },
//       );
//       setBlogPosts(response.data);
//     } catch (error) {
//       console.error("Error updating likes:", error);
//     }
//   };

//   const formatTimeFromNow = timestamp => {
//     const timeNow = Date.now();
//     const secondsAgo = Math.floor((timeNow - timestamp) / 1000);
//     if (secondsAgo < 60) {
//       return `${secondsAgo} second${secondsAgo !== 1 ? "s" : ""} ago`;
//     }
//     const minutesAgo = Math.floor(secondsAgo / 60);
//     if (minutesAgo < 60) {
//       return `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
//     }
//     const hoursAgo = Math.floor(minutesAgo / 60);
//     if (hoursAgo < 24) {
//       return `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
//     }
//     const daysAgo = Math.floor(hoursAgo / 24);
//     if (daysAgo < 7) {
//       return `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;
//     }
//     const weeksAgo = Math.floor(daysAgo / 7);
//     if (weeksAgo < 4) {
//       return `${weeksAgo} week${weeksAgo !== 1 ? "s" : ""} ago`;
//     }
//     const monthsAgo = Math.floor(daysAgo / 30);
//     if (monthsAgo < 12) {
//       return `${monthsAgo} month${monthsAgo !== 1 ? "s" : ""} ago`;
//     }
//     const yearsAgo = Math.floor(monthsAgo / 12);
//     return `${yearsAgo} year${yearsAgo !== 1 ? "s" : ""} ago`;
//   };

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
//                 <LikesButton
//                   postId={post.id}
//                   likes={post.likes}
//                   handleUpdateLikes={handleUpdateLikes}
//                 ></LikesButton>
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

// const { v4: uuid } = require("uuid");
import { useState, useEffect } from "react";
import blogData from "../../data/blog-posts.json";
import "./BlogPage.scss";
import { LikesButton } from "../../components/LikesButton/LikesButton";

export const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const formatTimeFromNow = timestamp => {
    const timeNow = Date.now();
    const secondsAgo = Math.floor((timeNow - timestamp) / 1000);
    if (secondsAgo < 60) {
      return `${secondsAgo} second${secondsAgo !== 1 ? "s" : ""} ago`;
    }
    const minutesAgo = Math.floor(secondsAgo / 60);
    if (minutesAgo < 60) {
      return `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
    }
    const hoursAgo = Math.floor(minutesAgo / 60);
    if (hoursAgo < 24) {
      return `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
    }
    const daysAgo = Math.floor(hoursAgo / 24);
    if (daysAgo < 7) {
      return `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;
    }
    const weeksAgo = Math.floor(daysAgo / 7);
    if (weeksAgo < 4) {
      return `${weeksAgo} week${weeksAgo !== 1 ? "s" : ""} ago`;
    }
    const monthsAgo = Math.floor(daysAgo / 30);
    if (monthsAgo < 12) {
      return `${monthsAgo} month${monthsAgo !== 1 ? "s" : ""} ago`;
    }
    const yearsAgo = Math.floor(monthsAgo / 12);
    return `${yearsAgo} year${yearsAgo !== 1 ? "s" : ""} ago`;
  };

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
              <div className="blog__post--like-button">
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
