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
import "./styles/_global.scss";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { SinglePostPage } from "./pages/SinglePostPage/SinglePostPage";
import { Helmet } from "react-helmet";

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
        <Helmet>
          <title>Nate Paradiso Photography - Seattle Photographer</title>
          <meta
            name="description"
            content="Nate Paradiso Photography - Seattle-based photographer specializing in weddings, portraits, underwater, and lifestyle photography. Crafting immersive visual content. Also providing web development services. Contact us for your photography needs."
          />
          {/* Add more meta tags as needed */}
        </Helmet>

        <main className="body">
          <Header />
          <Routes>
            <Route path="/" element={<AdventurePage />} />
            <Route path="/weddings" element={<WeddingPage />} />
            <Route path="/couples" element={<CouplesPage />} />
            <Route path="/real-estate" element={<RealEstatePage />} />
            <Route path="/still-life" element={<StillLifePage />} />
            <Route path="/video" element={<VideoPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
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
