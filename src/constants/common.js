export const RATINGS = [
	{ key: 0, value: 'No experience', iconColor: '#FE414D' },
	{ key: 1, value: 'Theoretical Knowledge', iconColor: '#EB5757' },
	{ key: 2, value: 'Can code with guidance', iconColor: '#FFE63B' },
	{ key: 3, value: 'Confident hands-on developer', iconColor: '#00E6C3' },
];

export const CAREERSTAGES = [
	{ key: '71', value: 'Junior Associate' },
	{ key: '72', value: 'Associate L1' },
	{ key: '73', value: 'Associate L2' },
	{ key: '74', value: 'Sr. Associate L1' },
	{ key: '75', value: 'Sr. Associate L2' },
	{ key: '76', value: 'Manager' },
	{ key: '78', value: 'Sr. Manager' },
];
export const OUTCOMEVALUES = [
	{ key: '81', value: 'selected' },
	{ key: '82', value: 'rejected' },
];
export const ISTRAINABLE = [
	{ key: '91', value: 'Yes' },
	{ key: '92', value: 'No' },
];
export const TRAININGS = [
	{ key: '101', value: 'HTML' },
	{ key: '102', value: 'CSS' },
	{ key: '103', value: 'OOJS - Advanced' },
	{ key: '104', value: 'Functional JS - Advanced' },
	{ key: '105', value: 'ReactJS - Advanced' },
];

export const HEADERCELLS = [
	{ id: 'candidate', label: 'Candidate' },
	{ id: 'interview', label: 'Interview' },
	{ id: 'interviewer', label: 'Interviewer' },
];

export const COLUMNCELLS = [
	//Candidate Fields
	{
		id: 'name',
		label: 'Name',
		numeric: false,
		minWidth: 50,
	},
	{
		id: 'email',
		label: 'Email',
		minWidth: 80,
		disableSorting: true,
	},
	{
		id: 'phone',
		label: 'Phone',
		minWidth: 50,
		disableSorting: true,
	},
	{
		id: 'experience',
		label: 'Experience',
		numeric: true,
		minWidth: 80,
	},

	//Interview Fields
	{
		id: 'date',
		label: 'Date',
		numeric: true,
		minWidth: 100,
		requestSearch: true,
	},
	{
		id: 'careerApplied',
		label: 'CareerStage Applied',
		minWidth: 180,
		disableSorting: true,
		requestFilter: true,
	},
	{
		id: 'outcome',
		label: 'Outcome',
		minWidth: 100,
		disableSorting: true,
		requestFilter: true,
	},
	{
		id: 'careerSelected',
		label: 'CareerStage Selected',
		minWidth: 180,
		disableSorting: true,
		requestFilter: true,
	},

	//Interviewer Fields
	{
		id: 'iname',
		label: 'Name',
		minWidth: 80,
		numeric: false,
	},
	{
		id: 'oracleId',
		label: 'OracleID',
		minWidth: 50,
		numeric: true,
	},
	{
		id: 'iemail',
		label: 'Email',
		minWidth: 50,
		disableSorting: true,
	},
	{
		id: 'careerStage',
		label: 'CareerStage',
		minWidth: 150,
		disableSorting: true,
	},
];
