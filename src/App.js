import { Fragment } from "react";
import Authenticate from "./pages/authenticate/index";
import LandingPage from "./pages/landing";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { CANDIDATE_DETAILS, CONDUCT_INTERVIEW } from "./constants/routes";
import ConductInterview from "./pages/conduct-interview/index";
import ProtectedRoute from "./components/protected-route";
import Userdetails from "./pages/candidate-info/CandidateDetail";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Authenticate />} />

          <Route
            path={CONDUCT_INTERVIEW}
            element={
              <ProtectedRoute>
                <ConductInterview />
              </ProtectedRoute>
            }
          />
          <Route
            path="/landing"
            element={
              <ProtectedRoute>
                <LandingPage />
              </ProtectedRoute>
            }
          />
          {/* <Route path={CONDUCT_INTERVIEW} element={<ConductInterview />} /> */}
          {/* <Route path="/landing" element={<LandingPage />} /> */}
          <Route path="/candidateinfo/:id" element={<Userdetails />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
