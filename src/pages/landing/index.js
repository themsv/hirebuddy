import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCandidates } from '../../store/candidate/candidate.action';
import ListOfInterviews from './listofInterviews';
import Spinner from '../../components/spinner';

const LandingPage = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

	useEffect(() => {
		dispatch(fetchCandidates());
	}, []);

	const candidates = useSelector((state) => state.candidates);

	return (
		<div data-testid="landing">
			{candidates.status === 'pending' && <Spinner />}
			{candidates.status === 'resolved' && (
				<ListOfInterviews
					candidateDetails={candidates.candidates}
					userDetails={user}
				/>
			)}
		</div>
	);
};

export default LandingPage;
