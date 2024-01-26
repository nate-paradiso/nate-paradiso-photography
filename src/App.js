import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./styles/_global.scss";
import { Travel } from "./pages/Travel/Travel";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";

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
            <Route path="/" element={<HomePage />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MyProvider>
  );
};

export default App;
