// import { useSelector, useDispatch } from 'react-redux';
// import { fetchCandidates } from '../../store/candidate/candidate.action';

import ListOfInterviews from './table';
const LandingPage = () => {
	//TODO - fetch form data

	// const [candidateData, setCandidateData] = useState([]);
	// const [userData, setUserData] = useState([]);

	// const dispatch = useDispatch();
	// const users = useSelector((state) => state.user.value);

	// useEffect(() => {
	// 	const getCandidates = async () => {
	// 		const { payload } = await dispatch(fetchCandidates());
	// 		setCandidateData(payload);
	// 	};
	// 	getCandidates();
	// }, []);

	return (
		<>
			<ListOfInterviews />;
		</>
	);
};

export default LandingPage;
