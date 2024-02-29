import "./LikesButton.scss";
import thumbsUp from "../../assets/images/thumbsup.png";
import axios from "axios";

export const LikesButton = ({ postTitle, postId, likes, handleUpdateLikes }) => {
  const handleClick = async () => {
    try {
      // Make a POST request to the Netlify function to update likes
      const response = await axios.post("/.netlify/functions/postBlogLikes", {
        postTitle: postTitle,
        likeIncrement: 1, // Assuming you're incrementing likes by 1 each time
      });

      // Extract updated likes from the response data
      const updatedLikes = response.data.likes;

      // Update the likes in the parent component
      handleUpdateLikes(postId, updatedLikes);

      const existingPostsString = sessionStorage.getItem("blogPosts");
      const existingPosts = JSON.parse(existingPostsString);

      // Update the specific post or any other data within the array
      // For example, you can update the likes count of a specific post
      const updatedPosts = existingPosts.map(post => {
        if (post.id === postId) {
          return { ...post, likes: updatedLikes };
        } else {
          return post;
        }
      });

      // Store the updated array back into session storage, overwriting the existing array
      sessionStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
      console.log(`Likes count updated to: ${updatedLikes}`);
    } catch (error) {
      console.error("Error updating likes:", error);
      // Handle error if necessary
    }
  };

  return (
    <button className="likes__button" onClick={handleClick}>
      <span className="likes__button-counter">
        <img className="likes__button-thumb" src={thumbsUp} alt="thumbs up icon" />
        {likes !== 0 ? `${likes}` : ""}
      </span>
    </button>
  );
};
