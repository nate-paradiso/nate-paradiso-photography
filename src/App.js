import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdventurePage } from "./pages/AdventurePage/AdventurePage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { WeddingPage } from "./pages/WeddingPage/WeddingPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { RealEstatePage } from "./pages/RealEstatePage/RealEstatePage";
import { CouplesPage } from "./pages/CouplesPage/CouplesPage";
import { StillLifePage } from "./pages/StillLifePage/StillLifePage";
import { VideoPage } from "./pages/VideoPage/VideoPage";
import { BlogPage } from "./pages/BlogPage/BlogPage";
import { SinglePostPage } from "./pages/SinglePostPage/SinglePostPage";
import "./styles/_global.scss";
// import blogData from "./data/blog-posts.json";
// import axios from "axios";
// import { v4 as uuidv4 } from "uuid"; // Import uuidv4 function
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
// Create a new context
export const MyContext = React.createContext();
// Create the provider
const MyProvider = props => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  return (
    <MyContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: newState => setMenuOpenState(newState.isOpen),
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

const App = () => {
  return (
    <MyProvider>
      <BrowserRouter>
        <main className="body">
          <Header />
          <Routes>
            <Route path="/" element={<AdventurePage />} />
            <Route path="/weddings" element={<WeddingPage />} />
            <Route path="/couples" element={<CouplesPage />} />
            <Route path="/realestate" element={<RealEstatePage />} />
            <Route path="/still-life" element={<StillLifePage />} />
            <Route path="/video" element={<VideoPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog/" element={<BlogPage />} />
            <Route path="/blog/:title" element={<SinglePostPage />} />

            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </MyProvider>
  );
};

export default App;
