import axios from "axios";

export async function handler(event, context) {
  try {
    const { X_MASTER_KEY, X_ACCESS_KEY, BIN_ID } = process.env;
    const { postTitle, likeIncrement } = JSON.parse(event.body);

    // Fetch the data from the bin
    const responseFromBin = await axios.get(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      headers: {
        "X-Master-Key": X_MASTER_KEY,
        "X-Access-Key": X_ACCESS_KEY,
      },
    });

    // Check if the response status is not OK
    if (responseFromBin.status !== 200) {
      return {
        statusCode: responseFromBin.status,
        body: JSON.stringify({ error: "Failed to fetch data from the bin" }),
      };
    }

    // Find the correct post based on postTitle
    const jsonData = responseFromBin.data.record;
    const postIndex = jsonData.findIndex(post => post.title === postTitle);
    if (postIndex === -1) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Post not found" }),
      };
    }

    // Update the likes for the post
    jsonData[postIndex].likes += likeIncrement;

    // Update the post in the bin
    await axios.put(`https://api.jsonbin.io/v3/b/${BIN_ID}`, jsonData, {
      headers: {
        "X-Master-Key": X_MASTER_KEY,
        "X-Access-Key": X_ACCESS_KEY,
      },
    });

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Likes updated successfully",
        likes: jsonData[postIndex].likes,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
