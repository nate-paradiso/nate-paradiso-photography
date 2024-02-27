import axios from "axios";
import { useState } from "react";
import tubeSpinner from "../../assets/images/tube-spinner.svg";

export const CommentForm = ({ postTitle, onCommentPosted, setBlogPosts }) => {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    comment: "",
  });
  const [isButtonVisible, setIsButtonVisible] = useState(true); // State to control button visibility

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Clear validation error for the changed field
    setValidationErrors(prevErrors => ({
      ...prevErrors,
      [name]: "", // Clear the validation error for the changed field
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    let form = event.target;
    // Basic form validation
    let submitButton = form.querySelector("button[type=submit]");
    submitButton.disabled = true; // Disable the submit button

    if (!validateName(formData.name)) {
      setValidationErrors(prevErrors => ({
        ...prevErrors,
        name: "Please enter a valid name.",
      }));
      form.removeAttribute("data-submitting"); // Release the form from submitting state
      submitButton.disabled = false; // Re-enable the submit button
      return;
    }
    if (!validateComment(formData.comment)) {
      setValidationErrors(prevErrors => ({
        ...prevErrors,
        comment: "Please enter a valid comment.",
      }));
      form.removeAttribute("data-submitting"); // Release the form from submitting state
      submitButton.disabled = false; // Re-enable the submit button
      return;
    }
    try {
      // Call the handlePostComment function to post the comment
      setIsButtonVisible(false);
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
      setIsButtonVisible(true);
      onCommentPosted(setBlogPosts(updateSessionStorage));
    } catch (error) {
      console.error("Error posting comment:", error);
      throw error; // Rethrow the error to handle it in the calling code
    }
    try {
      const response = await axios.post("/.netlify/functions/sendEmail", {
        comment: formData,
        postTitle: postTitle,
      });
      console.log("Email sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending email for new comment", error);
    }
  };

  function validateName(name) {
    return name.trim() !== ""; // Check if the name is not empty
  }
  function validateComment(comment) {
    return comment.trim() !== ""; // Check if the name is not empty
  }

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
            {validationErrors.name && (
              <span className="contact__error-message">{validationErrors.name}</span>
            )}
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
            {validationErrors.comment && (
              <span className="contact__error-message">{validationErrors.comment}</span>
            )}
            <div>
              {isButtonVisible ? (
                <button className="contact__button" type="submit">
                  Submit
                </button>
              ) : (
                <img className="contact__tube-spinner" src={tubeSpinner} alt="loading icon" />
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
