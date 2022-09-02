import { useParams } from 'react-router-dom';

const CandidateDetails = () => {
	const { candidateId } = useParams();
	return (
		<>
			<h1>CandidateDetails Page {candidateId}</h1>
		</>
	);
};

export default CandidateDetails;
