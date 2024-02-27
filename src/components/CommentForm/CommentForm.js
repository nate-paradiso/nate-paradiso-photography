import axios from "axios";
import { useState } from "react";

export const CommentForm = ({ postTitle, onCommentPosted, setBlogPosts }) => {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      // Call the handlePostComment function to post the comment
      await handlePostComment(formData, postTitle);
      setFormData({ name: "", comment: "" });
      onCommentPosted();
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };
  const handlePostComment = async (formData, postTitle) => {
    try {
      // Make a POST request to the Netlify function to post a comment
      const response = await axios.post("/.netlify/functions/postBlogComment", {
        comment: formData,
        postTitle: postTitle,
      });

      // Assuming you want to fetch the updated blog post data after posting the comment
      const updatedBlogPost = response.data.record;

      // Do something with the updatedBlogPost data, such as updating your UI
      const updateSessionStorage = sessionStorage.setItem(
        "blogPosts",
        JSON.stringify(updatedBlogPost),
      );
      onCommentPosted(setBlogPosts(updateSessionStorage));
    } catch (error) {
      console.error("Error posting comment:", error);
      throw error; // Rethrow the error to handle it in the calling code
    }
  };

  return (
    <>
      <div className="blog__post-post-comment">
        <h4 className="blog__post-comment--title">post a comment</h4>
        <div>
          <form className="blog__post-post-comment--form" onSubmit={handleSubmit}>
            <label htmlFor="name" className="contact__label">
              Name:
            </label>
            <input
              className="contact__input contact__input--darken"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="comment" className="contact__label">
              Comment: <span className="contact__required"></span>
            </label>
            <textarea
              className="contact__input contact__text-area contact__input--darken"
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="contact__button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
