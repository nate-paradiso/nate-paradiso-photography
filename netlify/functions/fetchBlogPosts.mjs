import axios from "axios";

export async function handler(event, context) {
  try {
    const { X_MASTER_KEY, X_ACCESS_KEY, BIN_ID } = process.env;
    const response = await axios.get(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      headers: {
        "X-Master-Key": X_MASTER_KEY,
        "X-Access-Key": X_ACCESS_KEY,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch blog posts" }),
    };
  }
}
