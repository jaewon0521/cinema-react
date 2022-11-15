import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "components/header/Header";
import MainPage from "pages/MainPage";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
