import { Fragment } from "react";
import Authenticate from "./pages/authenticate/index";
import NavBar from "./components/navbar";
import LandingPage from "./pages/landing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Authenticate />} />
          <Route path="landing" element={<LandingPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
