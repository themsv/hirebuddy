import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TableSortLabel } from '@mui/material';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
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
	// hide last border
	// '&:last-child td, &:last-child th': {
	// 	border: 0,
	// },
}));

export const StyledTableSortLabel = styled(TableSortLabel)(({ theme }) => ({}));
