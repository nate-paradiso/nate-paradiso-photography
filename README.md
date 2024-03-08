<!-- Nate Paradiso Photography Site.  -->

Nate Paradiso Photography Site


Welcome to my new site and portfolio! After years of using costly #crm software like Squarespace for my basic photography portfolio, I decided it was time for a change and build my own website from scratch using #JavaScript, #React, and Netlify.

One of my main goals was to create a site that not only showcased my work but also kept costs to a minimum. Instead of relying on traditional backend setups, I opted for Netlify's #serverless #functions to power my #api requests for the blog. This approach allowed me to store my blog post data in Jsonbin.io and interact with it using serverless functions. Plus, by securely storing environmental variables in Netlify's account, I ensured a safe and reliable setup. I then utilized Cloudinary to store all my visual content.

Another feature was integrating Google scripts. When the contact form is submitted the data is posted directly into a Google Sheet and email. This streamlined process provides a convenient way to organize email data.

With this approach, I've managed to stay within the confines of budget-friendly accounts while maintaining full control over my site's functionality. The only expense I incur is for the custom domain, which I continue to host on Squarespace while pointing it to Netlify—a simple and straightforward process.


Libraries Used:
@cloudinary/react (^1.11.2)
A library for integrating Cloudinary media management with React applications.

@cloudinary/url-gen (^1.16.0)
A library for generating Cloudinary URLs.

axios (^1.6.5)
A promise-based HTTP client for making AJAX requests.

dotenv (^16.4.1)
A module to load environment variables from a .env file.

nodemailer (^6.9.10)
A module for sending emails with Node.js.

react (^18.2.0)
A JavaScript library for building user interfaces.

react-burger-menu (^3.0.9)
A sidebar navigation component for React.

react-dom (^18.2.0)
React package for DOM manipulation.

react-photo-album (^2.3.1)
A React component for creating photo albums.

react-player (^2.14.1)
A React component for playing media files.

react-router-dom (^6.21.3)
A React package for declarative routing.

react-scripts (^5.0.1)
Scripts and configurations for creating React apps.

sass (^1.70.0)
A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).

uuid (^9.0.1)
A library for generating universally unique identifiers (UUIDs).

web-vitals (^2.1.4)
A library for measuring and reporting web performance metrics.

yet-another-react-lightbox (^3.16.0)
A simple and responsive lightbox component for React.
