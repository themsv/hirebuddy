import { Fragment } from "react";
import Login from "./pages/login/index";
import NavBar from "./components/navbar";
import LandingPage from "./pages/landing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="landing" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
