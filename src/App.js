import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { Header } from "./components/Header/Header";

import { Footer } from "./components/Footer/Footer";

import "./styles/_global.scss";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <div>
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
