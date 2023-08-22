import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import ContactUs from "./pages/ContactUs";

import { ThemeContextProvider } from "./context/ThemeContext";
import { FilmContextProvider } from "./context/FilmContext";
import React from "react";
import SingleFilm from "./pages/SingleFilm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FrontPage />} />
        <Route path="/:filmSlug" element={<SingleFilm />} /> 
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <FilmContextProvider>
        <App />
      </FilmContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
