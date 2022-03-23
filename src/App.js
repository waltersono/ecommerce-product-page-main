import React from "react";
import SinglePage from "./pages/single.page";
import MainLayout from "./layouts/main.layout";
import Menu from "./components/menu.component";
import Drawer from "./components/drawer.component";
import Overlay from "./components/overlay.component";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <React.Fragment>
      <Menu />
      <Overlay />
      <Drawer />

      <Routes>
        <Route exact path="/" element={<MainLayout />}>
          <Route exact path="single" element={<SinglePage />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
