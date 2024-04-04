import "./style/App.scss";
import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";
import AppPar from "./components/Particles/Particles";
// import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";



function App() {
 const location = useLocation();

  return (
    <>
      <div className="App">
        <AppPar className="particles" />
        <Nav />
        <Outlet />
        <Footer className={`${location.pathname === "/" ? "none" : ""}`} />
      </div>
    </>
  );
}

export default App;
