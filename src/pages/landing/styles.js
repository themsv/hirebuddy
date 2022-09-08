import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TableSortLabel } from '@mui/material';
import Input from '@mui/material/Input';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import BaseButton from '../../components/button';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
	fontSize: '14px',
	fontWeight: 300,
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: '#fff',
		fontSize: '14px',
		padding: '4px 8px',
		lineHeight: '1.5',
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: '12.8px',
		padding: '8px 10px',
		lineHeight: '1.2',
		textAlign: 'left',
	},
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(even)': {
		backgroundColor: '#F5FAFF',
	},
}));

export const TableRowHeader = styled(TableRow)(({ theme }) => ({}));

export const TableColumnHeader = styled(TableRow)(({ theme }) => ({}));

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
	'&.Mui-selected': {
		fontWeight: 'bold',
	},
}));

export const StyledList = styled(List)(({ theme }) => ({
	padding: '5px',
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({}));

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
	padding: '5px',
}));

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
	padding: '5px',
}));

export const TableText = styled('h3')(({ theme }) => ({
	textAlign: 'center',
}));

export const SearchInput = styled(Input)(({ theme }) => ({
	width: '200px',
}));

export const LightTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: theme.palette.common.white,
		color: 'rgba(0, 0, 0, 0.87)',
		boxShadow: theme.shadows[1],
		fontSize: 12,
		padding: '10px 5px',
	},
}));

export const FilterIcon = styled(FilterListIcon)(({ theme }) => ({
	fontSize: 'medium',
	color: '#fff',
}));

export const FilterIconButton = styled(BaseButton)(({ theme }) => ({
	padding: '3px',
	minWidth: '30px',
	boxShadow: 'none',
	borderRadius: '60%',
}));
