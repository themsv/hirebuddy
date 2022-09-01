export const createData = (
	id,
	candidatename,
	candidateemail,
	phone,
	experience,
	date,
	careerApplied,
	outcome,
	careerSelected,
	interviewername,
	oracleId,
	intervieweremail,
	careerStage
) => {
	return {
		id,
		candidatename,
		candidateemail,
		phone,
		experience,
		date,
		careerApplied,
		outcome,
		careerSelected,
		interviewername,
		oracleId,
		intervieweremail,
		careerStage,
	};
};

export const descendingComparator = (a, b, orderBy) => {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
};

export const getComparator = (order, orderBy) => {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
};

export const stableSort = (array, comparator) => {
	const stabilizedThis = array.map((el, index) => [el, index]);
	// console.log(stabilizedThis);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
};
