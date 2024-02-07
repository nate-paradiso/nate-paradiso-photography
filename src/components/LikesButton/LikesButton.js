import "./LikesButton.scss";
import thumbsUp from "../../assets/images/thumbsup.png";
// import axios from "axios";

export const LikesButton = ({ postId, likes, handleUpdateLikes }) => {
  const handleClick = async () => {
    const updatedLikes = likes + 1;
    // Update the likes in the parent component
    handleUpdateLikes(postId, updatedLikes);
  };
  return (
    <>
      <button className="likes__button" onClick={handleClick}>
        <span className="likes__button-counter">
          <img className="likes__button-thumb" src={thumbsUp} alt="thumbs up icon" />
          {likes !== 0 ? `${likes}` : ""}
        </span>
      </button>
    </>
  );
};
