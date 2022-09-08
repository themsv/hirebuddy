import { useState, useEffect } from 'react';

import TableHead from '@mui/material/TableHead';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import BasePopover from '../../components/popover/BasePopover';
import Checkbox from '@mui/material/Checkbox';

import {
	HEADERCELLS,
	COLUMNCELLS,
	CAREERSTAGES,
	OUTCOMEVALUES,
} from '../../constants/common';

import {
	FilterIcon,
	FilterIconButton,
	TableRowHeader,
	TableColumnHeader,
	StyledTableCell,
	StyledTableSortLabel,
	SearchInput,
	StyledList,
	StyledListItem,
	StyledListItemText,
	StyledListItemButton,
	StyledMenuItem,
} from './styles';

const Header = (props) => {
	const {
		order,
		orderBy,
		onOutcomeFilter,
		onCareerAppliedFilter,
		onCareerSelectedFilter,
		onRequestSearch,
		onRequestSort,
	} = props;

	const [searchValue, setSearchValue] = useState('');
	const [anchorElSearch, setAnchorElSearch] = useState(null);
	const [anchorElOutcome, setAnchorOutcome] = useState(null);
	const [anchorElCareerApplied, setAnchorCareerApplied] = useState(null);
	const [anchorElCareerSelected, setAnchorCareerSelected] = useState(null);

	const handleSearchClick = (event) => {
		setAnchorElSearch(event.currentTarget);
	};
	const handleOutcomeClick = (event) => {
		setAnchorOutcome(event.currentTarget);
	};
	const handleCareerAppliedClick = (event) => {
		setAnchorCareerApplied(event.currentTarget);
	};
	const handleCareerSelectedClick = (event) => {
		setAnchorCareerSelected(event.currentTarget);
	};

	const handleSearchClose = () => {
		setAnchorElSearch(null);
	};
	const handleOutcomeClose = () => {
		setAnchorOutcome(null);
	};
	const handleCareerAppliedClose = () => {
		setAnchorCareerApplied(null);
	};
	const handleCareerSelectedClose = () => {
		setAnchorCareerSelected(null);
	};

	const openSearch = Boolean(anchorElSearch);
	const openOutcome = Boolean(anchorElOutcome);
	const openCareerApplied = Boolean(anchorElCareerApplied);
	const openCareerSelected = Boolean(anchorElCareerSelected);

	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	const createFilterHandler = (property) => (event) => {
		if (property === 'outcome') {
			onOutcomeFilter(event);
			handleOutcomeClose();
		}
		if (property === 'candidateCareerStageInterviewedFor') {
			onCareerAppliedFilter(event);
			handleCareerAppliedClose();
		}
		if (property === 'recommendedCareerStage') {
			onCareerSelectedFilter(event);
			handleCareerSelectedClose();
		}
	};

	const createSearchHandler = (event) => {
		setSearchValue(event.target.value);
		onRequestSearch(event.target.value);
	};

	return (
		<TableHead data-testid="table-header">
			<TableRowHeader
				sx={{ border: '1' }}
				data-testid="table-header-row-primary"
			>
				{HEADERCELLS.map((headcell) => (
					<StyledTableCell
						key={headcell.id}
						align="center"
						colSpan={4}
						sx={{ borderRight: '1px solid white' }}
					>
						{headcell.label}
					</StyledTableCell>
				))}
			</TableRowHeader>
			<TableColumnHeader data-testid="table-header-row-secondary">
				{COLUMNCELLS.map((columnCell) => (
					<StyledTableCell
						key={columnCell.id}
						align={columnCell.align}
						style={{ top: '30px', minWidth: columnCell.minWidth }}
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
									onClick={handleSearchClick}
								>
									<FilterIcon />
								</FilterIconButton>

								<BasePopover
									id={columnCell.id}
									open={openSearch}
									anchorEl={anchorElSearch}
									onClick={handleSearchClose}
								>
									<SearchInput
										label="Search Date"
										placeholder="Search Date"
										type="search"
										data-testid="open-search"
										value={searchValue}
										endAdornment={
											<InputAdornment position="start">
												<SearchIcon />
											</InputAdornment>
										}
										sx={{ fontSize: '12px' }}
										onChange={createSearchHandler}
									/>
								</BasePopover>
							</>
						)}
						{columnCell.requestFilter && (
							<>
								{columnCell.id === 'outcome' && (
									<>
										<FilterIconButton
											aria-describedby={columnCell.id}
											size="small"
											onClick={handleOutcomeClick}
										>
											<FilterIcon />
										</FilterIconButton>
										<BasePopover
											id={columnCell.id}
											open={openOutcome}
											anchorEl={anchorElOutcome}
											onClick={handleOutcomeClose}
										>
											{OUTCOMEVALUES.map((item) => (
												<StyledList
													key={item.key}
													data-testid="outcome"
												>
													<StyledMenuItem
														data-my-value={item.value}
														onClick={createFilterHandler(
															columnCell.id
														)}
														sx={{ padding: '5px' }}
													>
														{item.value}
													</StyledMenuItem>
												</StyledList>
											))}
										</BasePopover>
									</>
								)}
								{columnCell.id ===
									'candidateCareerStageInterviewedFor' && (
									<>
										<FilterIconButton
											aria-describedby={columnCell.id}
											size="small"
											onClick={handleCareerAppliedClick}
										>
											<FilterIcon />
										</FilterIconButton>
										<BasePopover
											id={columnCell.id}
											open={openCareerApplied}
											anchorEl={anchorElCareerApplied}
											onClick={handleCareerAppliedClose}
										>
											<StyledList>
												{CAREERSTAGES.map((item) => (
													<StyledListItem
														key={item.key}
														disablePadding
													>
														<StyledListItemButton>
															<Checkbox
																value={item.value}
																onChange={createFilterHandler(
																	columnCell.id
																)}
																disableRipple
																size="small"
															/>
															<StyledListItemText
																id={item.key}
																primary={item.value}
															/>
														</StyledListItemButton>
													</StyledListItem>
												))}
											</StyledList>
										</BasePopover>
									</>
								)}
								{columnCell.id === 'recommendedCareerStage' && (
									<>
										<FilterIconButton
											aria-describedby={columnCell.id}
											size="small"
											onClick={handleCareerSelectedClick}
										>
											<FilterIcon />
										</FilterIconButton>
										<BasePopover
											id={columnCell.id}
											open={openCareerSelected}
											anchorEl={anchorElCareerSelected}
											onClick={handleCareerSelectedClose}
										>
											<StyledList>
												{CAREERSTAGES.map((item) => (
													<StyledListItem
														key={item.key}
														disablePadding
													>
														<StyledListItemButton>
															<Checkbox
																value={item.value}
																onChange={createFilterHandler(
																	columnCell.id
																)}
																disableRipple
																size="small"
															/>
															<StyledListItemText
																id={item.key}
																primary={item.value}
															/>
														</StyledListItemButton>
													</StyledListItem>
												))}
											</StyledList>
										</BasePopover>
									</>
								)}
							</>
						)}
					</StyledTableCell>
				))}
			</TableColumnHeader>
		</TableHead>
	);
};

export default Header;
