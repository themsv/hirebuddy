import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCandidates } from '../../store/candidate/candidate.action';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { StyledTableCell, StyledTableRow } from './styles';
import EnhancedTableHead from './tableHeader';

function createData(
	name,
	email,
	phone,
	experience,
	date,
	careerApplied,
	outcome,
	careerSelected,
	iname,
	oracleId,
	iemail,
	careerStage
) {
	return {
		name,
		email,
		phone,
		experience,
		date,
		careerApplied,
		outcome,
		careerSelected,
		iname,
		oracleId,
		iemail,
		careerStage,
	};
}

const originalData = [
	createData(
		'Justin Case',
		'johnsmith@gmail.com',
		9876543210,
		4.4,
		'17-08-2022',
		'Junior Associate',
		'rejected',
		'Associate L1',
		'John Doe',
		176046,
		'johndoe@publicissapient.com',
		'Sr. Manager'
	),
	createData(
		'Hugh Saturation',
		'johnsmith@gmail.com',
		9876543211,
		6.2,
		'01-08-2022',
		'Junior Associate L1',
		'selected',
		'Associate L1',
		'Brain Cumin',
		176053,
		'braincumin@publissapient.com',
		'Sr. Assocaite L1'
	),
	createData(
		'Phillip Anthropy',
		'phillipanthropy@gmail.com',
		9876543211,
		5.2,
		'27-10-2022',
		'Associate L2',
		'selected',
		'Associate L1',
		'Joss Sticks',
		176014,
		'josssticks@publissapient.com',
		'Sr. Assocaite L2'
	),
	createData(
		'Hanson Deck',
		'hansondeck@gmail.com',
		9876543211,
		7.2,
		'07-09-2022',
		'Associate L2',
		'selected',
		'Sr Associate L1',
		'Joe Nerk',
		176009,
		'joenerk@publissapient.com',
		'Manager'
	),
];

// Sorting
function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
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
}

export default function LandingPage() {
	const [rows, setRows] = useState(originalData);
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [order, setOrder] = useState('asc');
	const [orderBy, setOrderBy] = useState('');
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

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

	// Sorting
	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	//Pagination
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleSortAndPagination = () => {
		return stableSort(rows, getComparator(order, orderBy)).slice(
			page * rowsPerPage,
			page * rowsPerPage + rowsPerPage
		);
	};

	//Searching

	const clickSearchHandler = (event) => {
		setIsSearchOpen(!isSearchOpen);
	};

	//Filtering

	const clickFilterHandler = (event, property) => {
		setIsFilterOpen(!isFilterOpen);
		console.log(property);
	};

	const handleRequestFilter = (event) => {
		const filteredData = rows.filter(
			(item) => item.outcome === event.target.value
		);
		setRows(filteredData);
		setIsFilterOpen(!isFilterOpen);
		// setRows(originalData);
	};

	return (
		<>
			<Paper sx={{ width: '100%', pt: 4 }}>
				<TableContainer sx={{ maxHeight: 500 }}>
					<Table stickyHeader aria-label="sticky table">
						<EnhancedTableHead
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
							clickSearchHandler={clickSearchHandler}
							clickFilterHandler={clickFilterHandler}
							rowCount={rows.length}
						/>
						{/* {isFilterOpen && (
							<>
								<input
									type="checkbox"
									value="selected"
									onClick={handleRequestFilter}
								/>
								Selected
								<input
									type="checkbox"
									value="rejected"
									onClick={handleRequestFilter}
								/>
								Rejected
							</>
						)} */}
						<TableBody>
							{handleSortAndPagination().map((row, index) => {
								return (
									<StyledTableRow hover key={row.name}>
										<StyledTableCell component="th" scope="row">
											{row.name}
										</StyledTableCell>
										<StyledTableCell>{row.email}</StyledTableCell>
										<StyledTableCell>{row.phone}</StyledTableCell>
										<StyledTableCell>
											{row.experience}
										</StyledTableCell>
										<StyledTableCell>{row.date}</StyledTableCell>
										<StyledTableCell>
											{row.careerApplied}
										</StyledTableCell>
										<StyledTableCell>{row.outcome}</StyledTableCell>
										<StyledTableCell>
											{row.careerSelected}
										</StyledTableCell>
										<StyledTableCell>{row.iname}</StyledTableCell>
										<StyledTableCell>{row.oracleId}</StyledTableCell>
										<StyledTableCell>{row.iemail}</StyledTableCell>
										<StyledTableCell>
											{row.careerStage}
										</StyledTableCell>
									</StyledTableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</>
	);
}
