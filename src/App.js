import { Fragment } from "react";
import Authenticate from "./pages/authenticate/index";
import LandingPage from "./pages/landing";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { CANDIDATE_DETAILS, CONDUCT_INTERVIEW } from "./constants/routes";
import ConductInterview from "./pages/conduct-interview/index";
<<<<<<< HEAD
import ProtectedRoute from "./components/protected-route";
=======
import Userdetails from "./pages/candidate-info/CandidateDetail";
>>>>>>> 0cd3f987b087481a5410766a5bf75939d74925f2

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Authenticate />} />
<<<<<<< HEAD

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
=======
          <Route path={CONDUCT_INTERVIEW} element={<ConductInterview />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/candidateinfo/:id" element={<Userdetails />} />
>>>>>>> 0cd3f987b087481a5410766a5bf75939d74925f2
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
