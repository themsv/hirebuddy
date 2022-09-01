import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { StyledTableCell, StyledTableRow, TableText } from './styles';
import { getComparator, stableSort, createData } from './sorting';
import Header from './header';

const originalData = [
	createData(
		1,
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
		2,
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
		3,
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
		4,
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

const ListOfInterviews = (props) => {
	// const originalData = props.candidateDetails.map((candidate) => {
	// 	const { interviewData, finalFeedback } = candidate;
	// 	const tempData = {
	// 		...interviewData,
	// 		...finalFeedback,
	// 		candidateName: `${interviewData.candidateFirstName} ${interviewData.candidateLastName}`,
	// 		interviewerName: `${interviewData.interviewerFirstName} ${interviewData.interviewerFirstName}`,
	// 	};
	// 	createData(
	// 		tempData.candidateName,
	// 		tempData.candidateEmail,
	// 		tempData.candidatePhone,
	// 		tempData.candidateExperience,
	// 		tempData.interviewDate,
	// 		tempData.candidateCareerStageInterviewedFor,
	// 		tempData.outcome,
	// 		tempData.recommendedCareerStage,
	// 		tempData.interviewerName,
	// 		tempData.interviewerOracleId,
	// 		tempData.interviewerEmail,
	// 		tempData.interviewerCareerStage
	// 	);
	// });

	const navigate = useNavigate();

	const [rows, setRows] = useState(originalData);
	const [order, setOrder] = useState('asc');
	const [orderBy, setOrderBy] = useState('');
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

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
	const handleRequestSearch = (value) => {
		const filteredData = originalData.filter((item) =>
			item.date.includes(value)
		);
		setRows(filteredData);
	};

	//Filtering

	const handleOutcomeFilter = (event) => {
		setRows(
			originalData.filter(
				(item) => item.outcome === event.currentTarget.dataset.myValue
			)
		);
	};

	const handleCareerAppliedFilter = (event) => {
		setRows(
			originalData.filter(
				(item) => item.careerApplied === event.target.value
			)
		);
	};

	const handleCareerSelectedFilter = (event) => {
		setRows(
			originalData.filter(
				(item) => item.careerSelected === event.target.value
			)
		);
	};

	//Navigation

	const handleCickHandler = (candidateId) => (event) => {
		navigate('/candidate-details/' + candidateId);
	};

	return (
		<Paper sx={{ width: '100%', pt: 4 }}>
			<TableContainer sx={{ maxHeight: 500 }}>
				<Table stickyHeader aria-label="sticky table">
					<Header
						order={order}
						orderBy={orderBy}
						onRequestSort={handleRequestSort}
						onRequestSearch={handleRequestSearch}
						onOutcomeFilter={handleOutcomeFilter}
						onCareerAppliedFilter={handleCareerAppliedFilter}
						onCareerSelectedFilter={handleCareerSelectedFilter}
						rowCount={rows.length}
					/>

					<TableBody>
						{handleSortAndPagination().length > 0 ? (
							handleSortAndPagination().map((row) => {
								return (
									<StyledTableRow
										hover
										key={row.id}
										onClick={handleCickHandler(row.id)}
									>
										<StyledTableCell component="th" scope="row">
											{row.candidatename}
										</StyledTableCell>
										<StyledTableCell>
											{row.candidateemail}
										</StyledTableCell>
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
										<StyledTableCell>
											{row.interviewername}
										</StyledTableCell>
										<StyledTableCell>{row.oracleId}</StyledTableCell>
										<StyledTableCell>
											{row.intervieweremail}
										</StyledTableCell>
										<StyledTableCell>
											{row.careerStage}
										</StyledTableCell>
									</StyledTableRow>
								);
							})
						) : (
							<TableRow>
								<TableCell colSpan={12}>
									<TableText>No Records Found!!</TableText>
								</TableCell>
							</TableRow>
						)}
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
	);
};

export default ListOfInterviews;
