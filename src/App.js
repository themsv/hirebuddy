import { Fragment } from "react";
import Authenticate from "./pages/authenticate/index";
import LandingPage from "./pages/landing";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { CANDIDATE_DETAILS, CONDUCT_INTERVIEW } from "./constants/routes";
import ConductInterview from "./pages/conduct-interview/index";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Authenticate />} />
          <Route path={CONDUCT_INTERVIEW} element={<ConductInterview />} />
          <Route path="/landing" element={<LandingPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
