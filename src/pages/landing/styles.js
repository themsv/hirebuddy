import { styled } from '@mui/material/styles';
import { TableSortLabel } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import FilterListIcon from '@mui/icons-material/FilterList';
import Popover from '@mui/material/Popover';
import BaseButton from '../../components/button';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import ListItemText from '@mui/material/ListItemText';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
	fontSize: '14px',
	fontWeight: 300,
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: '#fff',
		padding: '8px',
		lineHeight: '1.4',
	},
	[`&.${tableCellClasses.body}`]: {
		padding: '12px',
		lineHeight: '1.2',
		textAlign: 'left',
	},
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(even)': {
		backgroundColor: '#F5FAFF',
	},
	// hide last border
	// '&:last-child td, &:last-child th': {
	// 	border: 0,
	// },
}));

export const StyledTableSortLabel = styled(TableSortLabel)(({ theme }) => ({
	'&.MuiTableSortLabel-root': {
		color: '#fff',
	},
	'&.MuiButtonBase-root.MuiTableSortLabel-root .MuiTableSortLabel-icon': {
		fill: '#fff',
		opacity: 2,
	},
	'&.Mui-active': {
		fontWeight: 'bold',
	},
}));

export const FilterIcon = styled(FilterListIcon)(({ theme }) => ({
	fontSize: 'medium',
	color: '#fff',
}));

export const FilterIconButton = styled(BaseButton)(({ theme }) => ({
	padding: '5px',
	minWidth: '30px',
	boxShadow: 'none',
	borderRadius: '60%',
}));

export const TableText = styled('h3')(({ theme }) => ({
	textAlign: 'center',
}));

export const Outcomes = styled(Radio)(({ theme }) => ({
	'&.MuiButtonBase-root.MuiRadio-root.Mui-checked': {
		color: '#079FFF',
	},
}));

export const CareerStageMenu = styled(MenuItem)(({ theme }) => {
	return {
		padding: '4px 12px',
		// backgroundColor: '#F5FAFF',
	};
});

export const CareerStageCheckBox = styled(Checkbox)(({ theme }) => ({
	borderRadius: 'none',
	'&.MuiCheckbox-root.Mui-checked': {
		color: '#079FFF',
	},
}));

export const CareerStageText = styled(ListItemText)(({ theme }) => ({
	fontSize: '12px',
}));

export const SearchInput = styled(Input)(({ theme }) => ({
	width: '200px',
}));

export const OutcomePopover = styled(Popover)(({ theme }) => ({}));

export const SearchPopover = styled(Popover)(({ theme }) => ({}));

export const CareerStagePopover = styled(Popover)(({ theme }) => ({
	top: '160px',
}));
