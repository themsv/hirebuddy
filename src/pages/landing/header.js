import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

import { useState } from 'react';
import {
	StyledTableCell,
	StyledTableSortLabel,
	FilterIcon,
	FilterIconButton,
	Outcomes,
	CareerStageMenu,
	CareerStageCheckBox,
	CareerStageText,
	SearchInput,
	OutcomePopover,
	CareerStagePopover,
	SearchPopover,
} from './styles';

const HEADERCELLS = [
	{ id: 'candidate', label: 'Candidate' },
	{ id: 'interview', label: 'Interview' },
	{ id: 'interviewer', label: 'Interviewer' },
];

const COLUMNCELLS = [
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

const CAREERSTAGES = [
	{ key: '71', value: 'Junior Associate' },
	{ key: '72', value: 'Associate L1' },
	{ key: '73', value: 'Associate L2' },
	{ key: '74', value: 'Sr. Associate L1' },
	{ key: '75', value: 'Sr. Associate L2' },
	{ key: '76', value: 'Manager' },
	{ key: '78', value: 'Sr. Manager' },
];

const OUTCOMEVALUES = [
	{ key: 'selected', value: 'selected' },
	{ key: 'rejected', value: 'rejected' },
];

const TableHeader = (props) => {
	const { order, orderBy, onRequestFilter, onRequestSearch, onRequestSort } =
		props;

	const [anchorOutcome, setAnchorOutcome] = useState(null);
	const [anchorCareerSelected, setCareerSelected] = useState(null);
	const [anchorCareerApplied, setCareerApplied] = useState(null);
	const [anchorSearch, setAnchorSearch] = useState(null);

	const [searchValue, setSearchValue] = useState('');

	const openOutcome = Boolean(anchorOutcome);
	const openCareerSelected = Boolean(anchorCareerSelected);
	const openCareerApplied = Boolean(anchorCareerApplied);
	const openSearch = Boolean(anchorSearch);

	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	const createAnchorHandler = (property) => (event) => {
		if (property === 'outcome') {
			setAnchorOutcome(event.currentTarget);
		} else if (property === 'careerSelected') {
			setCareerSelected(event.currentTarget);
		} else if (property === 'careerApplied') {
			setCareerApplied(event.currentTarget);
		} else if (property === 'date') {
			setAnchorSearch(event.currentTarget);
		}
	};

	const createFilterHandler = (property) => (event) => {
		onRequestFilter(event, property);

		property === 'outcome' && handleClose();
	};

	const createSearchHandler = (event) => {
		setSearchValue(event.target.value);
		onRequestSearch(event.target.value);
		// handleClose();
	};

	const handleClose = () => {
		setAnchorOutcome(null);
		setCareerSelected(null);
		setCareerApplied(null);
		setAnchorSearch(null);
	};

	return (
		<TableHead>
			<TableRow>
				{HEADERCELLS.map((headcell) => (
					<StyledTableCell key={headcell.id} align="center" colSpan={4}>
						{headcell.label}
					</StyledTableCell>
				))}
			</TableRow>
			<TableRow>
				{COLUMNCELLS.map((columnCell) => (
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

						{columnCell.requestSearch && (
							<>
								<FilterIconButton
									aria-describedby={columnCell.id}
									size="small"
									onClick={createAnchorHandler(columnCell.id)}
								>
									<FilterIcon />
								</FilterIconButton>

								<SearchPopover
									id={columnCell.id}
									open={openSearch}
									onClose={handleClose}
									anchorReference="anchorPosition"
									anchorPosition={{ top: 130, left: 550 }}
									anchorOrigin={{
										vertical: 'center',
										horizontal: 'center',
									}}
									transformOrigin={{
										vertical: 'bottom',
										horizontal: 'center',
									}}
								>
									<SearchInput
										label="Search Date"
										type="search"
										value={searchValue}
										startAdornment={
											<InputAdornment position="start">
												<SearchIcon />
											</InputAdornment>
										}
										onChange={createSearchHandler}
									/>
								</SearchPopover>
							</>
						)}

						{columnCell.requestFilter && (
							<>
								<FilterIconButton
									aria-describedby={columnCell.id}
									size="small"
									onClick={createAnchorHandler(columnCell.id)}
								>
									<FilterIcon />
								</FilterIconButton>
								{columnCell.id === 'outcome' && (
									<OutcomePopover
										id={columnCell.id}
										open={openOutcome}
										onClose={handleClose}
										anchorReference="anchorPosition"
										anchorPosition={{ top: 272, left: 850 }}
										anchorOrigin={{
											vertical: 'center',
											horizontal: 'center',
										}}
										transformOrigin={{
											vertical: 'bottom',
											horizontal: 'center',
										}}
									>
										<FormControl>
											<RadioGroup
												aria-labelledby="outcomes-buttons-group-label"
												name="outcomes-buttons-group"
											>
												{OUTCOMEVALUES.map((item) => (
													<FormControlLabel
														key={item.value}
														value={item.value}
														control={<Outcomes size="small" />}
														label={item.value}
														onClick={createFilterHandler(
															columnCell.id
														)}
														sx={{ padding: '5px 15px ' }}
													/>
												))}
											</RadioGroup>
										</FormControl>
									</OutcomePopover>
								)}

								{columnCell.id === 'careerApplied' && (
									<CareerStagePopover
										id={columnCell.id}
										open={openCareerApplied}
										onClose={handleClose}
										anchorReference="anchorPosition"
										anchorPosition={{ top: 270, left: 680 }}
										anchorOrigin={{
											vertical: 'center',
											horizontal: 'center',
										}}
										transformOrigin={{
											vertical: 'bottom',
											horizontal: 'center',
										}}
									>
										<FormControl>
											{CAREERSTAGES.map((item) => (
												<CareerStageMenu key={item.key}>
													<CareerStageCheckBox
														onChange={createFilterHandler(
															columnCell.id
														)}
														value={item.value}
														size="small"
													/>
													<CareerStageText primary={item.value} />
												</CareerStageMenu>
											))}
										</FormControl>
									</CareerStagePopover>
								)}

								{columnCell.id === 'careerSelected' && (
									<CareerStagePopover
										id={columnCell.id}
										open={openCareerSelected}
										onClose={handleClose}
										anchorReference="anchorPosition"
										anchorPosition={{ top: 270, left: 1030 }}
										anchorOrigin={{
											vertical: 'center',
											horizontal: 'center',
										}}
										transformOrigin={{
											vertical: 'bottom',
											horizontal: 'center',
										}}
									>
										<FormControl>
											{CAREERSTAGES.map((item) => (
												<CareerStageMenu key={item.key}>
													<CareerStageCheckBox
														onChange={createFilterHandler(
															columnCell.id
														)}
														value={item.value}
														size="small"
													/>
													<CareerStageText primary={item.value} />
												</CareerStageMenu>
											))}
										</FormControl>
									</CareerStagePopover>
								)}
							</>
						)}
					</StyledTableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

export default TableHeader;
