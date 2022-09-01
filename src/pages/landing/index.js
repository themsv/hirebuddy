import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchCandidates } from '../../store/candidate/candidate.action';
import ListOfInterviews from './listofInterviews';

const LandingPage = () => {
	const [candidateData, setCandidateData] = useState([]);
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

	useEffect(() => {
		const getCandidates = async () => {
			const { payload } = await dispatch(fetchCandidates());
			setCandidateData(payload);
		};
		getCandidates();
	}, []);

	const filteredCandidate = user.isAdmin
		? candidateData
		: candidateData.filter((item) => item.interviewedBy === user.oracleId);

	return (
		<>
			<ListOfInterviews candidateDetails={filteredCandidate} />;
		</>
	);
};

export default LandingPage;
