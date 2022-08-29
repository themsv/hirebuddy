import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import { StyledTableCell, StyledTableSortLabel } from './styles';

const headerCells = [
	{ id: 'candidate', label: 'Candidate' },
	{ id: 'interview', label: 'Interview' },
	{ id: 'interviewer', label: 'Interviewer' },
];

const columnCells = [
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

const EnhancedTableHead = (props) => {
	const {
		order,
		orderBy,
		clickFilterHandler,
		clickSearchHandler,
		onRequestSort,
	} = props;

	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	const createFilterHandler = (property) => (event) => {
		clickFilterHandler(event, property);
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
							<StyledTableSortLabel
								active={orderBy === columnCell.id}
								direction={orderBy === columnCell.id ? order : 'asc'}
								onClick={createSortHandler(columnCell.id)}
							>
								{columnCell.label}
							</StyledTableSortLabel>
						)}
						{columnCell.requestFilter && (
							<IconButton onClick={createFilterHandler(columnCell.id)}>
								<FilterListIcon
									fontSize="small"
									sx={{ color: '#fff' }}
								/>
							</IconButton>
						)}
						{columnCell.requestSearch && (
							<IconButton onClick={clickSearchHandler}>
								<FilterListIcon
									fontSize="small"
									sx={{ color: '#fff' }}
								/>
							</IconButton>
						)}
					</StyledTableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

export default EnhancedTableHead;
