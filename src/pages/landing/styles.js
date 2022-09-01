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

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
	fontSize: '14px',
	fontWeight: 300,
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: '#fff',
		fontSize: 14,
		fontWeight: 300,
		padding: '8px',
		lineHeight: '1.4',
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
		fontWeight: 300,
		padding: '12px',
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
