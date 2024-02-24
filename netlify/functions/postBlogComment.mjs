import axios from "axios";

export async function handler(event, context) {
  try {
    const { X_MASTER_KEY, X_ACCESS_KEY, BIN_ID } = process.env;
    const { postTitle, comment } = JSON.parse(event.body); // Assuming the request body contains postTitle and the new comment

    // Find the correct post based on postTitle and add the comment
    const response = await axios.get(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      headers: {
        "X-Master-Key": X_MASTER_KEY,
        "X-Access-Key": X_ACCESS_KEY,
      },
    });

    // Find the correct post based on postTitle
    const jsonData = response.data.record;
    const postIndex = jsonData.findIndex(post => post.title === postTitle);
    if (postIndex === -1) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Post not found" }),
      };
    }

    // Add the new comment to the correct post
    const newComment = {
      id: jsonData[postIndex].comments.length + 1, // Generate a unique ID for the new comment
      name: comment.name,
      comment: comment.comment,
      timestamp: Date.now(),
    };
    jsonData[postIndex].comments.push(newComment);

    // Update JSONbin with the modified data
    await axios.put(`https://api.jsonbin.io/v3/b/${BIN_ID}`, jsonData, {
      headers: {
        "X-Master-Key": X_MASTER_KEY,
        "X-Access-Key": X_ACCESS_KEY,
        "Content-Type": "application/json",
      },
    });

    // Fetch the updated data again
    const updatedResponse = await axios.get(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      headers: {
        "X-Master-Key": X_MASTER_KEY,
        "X-Access-Key": X_ACCESS_KEY,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(updatedResponse.data),
    };
  } catch (error) {
    console.error("Error adding comment:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to add comment" }),
    };
  }
}
