import { Fragment } from "react";
import Authenticate from "./pages/authenticate/index";
import LandingPage from "./pages/landing";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ConductInterview from "./pages/conduct-interview/index";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Authenticate />} />
          <Route path="landing" element={<LandingPage />} />
          <Route path="conduct-interview" element={<ConductInterview />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
