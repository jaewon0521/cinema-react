import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "components/header/Header";
import MainPage from "pages/MainPage";
import DetailPage from "pages/DetailPage";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id/:name/details" element={<DetailPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
