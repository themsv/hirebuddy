import { Fragment } from "react";
import Authenticate from "./pages/authenticate/index";
import LandingPage from "./pages/landing";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { CONDUCT_INTERVIEW } from "./constants/routes";
import TechnicalRound from "./components/technical-round";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Authenticate />} />
          <Route path="landing" element={<LandingPage />} />
          <Route
            path={CONDUCT_INTERVIEW}
            element={<TechnicalRound type={"core-xt"} />}
          />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
