import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "pages/Main";
import Header from "components/header/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
