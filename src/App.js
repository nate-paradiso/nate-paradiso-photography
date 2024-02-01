import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NaturePage } from "./pages/NaturePage/NaturePage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./styles/_global.scss";
import { WeddingPage } from "./pages/WeddingPage/WeddingPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { RealEstatePage } from "./pages/RealEstatePage/RealEstatePage";

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

// Default export here
const App = () => {
  return (
    <MyProvider>
      <BrowserRouter>
        <div className="body">
          <Header />
          <Routes>
            <Route path="/" element={<NaturePage />} />
            <Route path="/weddings" element={<WeddingPage />} />
            <Route path="/realestate" element={<RealEstatePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MyProvider>
  );
};

export default App;
