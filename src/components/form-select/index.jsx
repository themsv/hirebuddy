import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FormSelect = ({ label, items, ...remaining }) => {
	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id={`${label}-label`}>{label}</InputLabel>
				<Select
					labelId={`${label}-label`}
					id={label}
					label={label}
					{...remaining}
				>
					{items?.map((item) => (
						<MenuItem key={item.key} value={item.value}>
							{item.value}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};

export default FormSelect;
