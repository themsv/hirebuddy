import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchCandidates } from "../../store/candidate/candidate.action";
import { fetchQuestions } from "../../store/questions/questionsAction";

const LandingPage = () => {
  const dispatch = useDispatch();
  const candidates = useSelector((state) => state.candidates);
  const questions = useSelector((state) => state.questions);
  useEffect(() => {
    const getCandidates = async () => {
      await dispatch(fetchCandidates());
      // await dispatch(fetchQuestions("core-xt"));
    };
    getCandidates();
  }, []);

  return <div>LandingPage</div>;
};

export default LandingPage;
