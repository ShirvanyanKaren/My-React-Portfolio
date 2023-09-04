import "./style/App.scss";
import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";
import AppPar from "./components/Particles/Particles";


function App() {
  return (
    <>
      <div className="App">
        <AppPar className="particles" />
        <Nav />
        <Outlet />
      </div>
    </>
  );
}

export default App;
