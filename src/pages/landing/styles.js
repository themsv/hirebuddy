import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: '#fff',
		fontSize: 14,
		fontWeight: 300,
		padding: '12px',
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
		fontWeight: 300,
		padding: '12px',
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
