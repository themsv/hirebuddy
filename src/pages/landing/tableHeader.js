import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableSortLabel } from '@mui/material';
import { StyledTableCell } from './styles';

const headerCells = [
	{ id: 'candidate', label: 'Candidate' },
	{ id: 'interview', label: 'Interview' },
	{ id: 'interviewer', label: 'Interviewer' },
];

const columnCells = [
	//Candidate Fields
	{ id: 'name', label: 'Name', minWidth: 50, numeric: false },
	{
		id: 'email',
		label: 'Email',
		minWidth: 80,
		disableSorting: true,
	},
	{
		id: 'phone',
		label: 'Phone',
		minWidth: 80,
		disableSorting: true,
	},
	{ id: 'experience', label: 'Experience', numeric: true, minWidth: 80 },

	//Interview Fields
	{ id: 'date', label: 'Date', numeric: true, minWidth: 80 },
	{
		id: 'careerApplied',
		label: 'CareerStage Applied',
		minWidth: 100,
		disableSorting: true,
	},
	{ id: 'outcome', label: 'Outcome', minWidth: 80, disableSorting: true },
	{
		id: 'careerSelected',
		label: 'CareerStage Selected',
		minWidth: 100,
		disableSorting: true,
	},

	//Interviewer Fields

	{ id: 'iname', label: 'Name', numeric: false, minWidth: 50 },
	{ id: 'oracleId', label: 'OracleID', numeric: true, minWidth: 50 },
	{ id: 'iemail', label: 'Email', minWidth: 80, disableSorting: true },
	{
		id: 'careerStage',
		label: 'CareerStage',
		minWidth: 100,
		disableSorting: true,
	},
];

const EnhancedTableHead = (props) => {
	const { order, orderBy, onRequestSort } = props;
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				{headerCells.map((headcell) => (
					<StyledTableCell key={headcell.id} align="center" colSpan={4}>
						{headcell.label}
					</StyledTableCell>
				))}
			</TableRow>
			<TableRow>
				{columnCells.map((columnCell) => (
					<StyledTableCell
						key={columnCell.id}
						align={columnCell.align}
						style={{ minWidth: columnCell.minWidth }}
						sortDirection={orderBy === columnCell.id ? order : false}
					>
						{columnCell.disableSorting ? (
							columnCell.label
						) : (
							<TableSortLabel
								active={orderBy === columnCell.id}
								direction={orderBy === columnCell.id ? order : 'asc'}
								onClick={createSortHandler(columnCell.id)}
							>
								{columnCell.label}
							</TableSortLabel>
						)}
					</StyledTableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

export default EnhancedTableHead;
