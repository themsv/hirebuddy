import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { forwardRef, useState } from 'react';
import styled from 'styled-components';

const ErrorSpan = styled.span`
	font-size: 12px;
	color: #d32f2f;
	margin: 3px 14px 0;
`;

const FormSelect = forwardRef(
	({ label, value, onChange, items, error, helperText }, ref) => {
		return (
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth error={!!error}>
					<InputLabel id={`${label}-label`}>{`${label} *`}</InputLabel>
					<Select
						size="small"
						labelId={`${label}-label`}
						id={label}
						label={`${label}`}
						value={value}
						onChange={onChange}
						inputRef={ref}
					>
						{items?.map((item) => (
							<MenuItem key={item.key} value={item.value}>
								{item.value}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				{error && <ErrorSpan>{helperText}</ErrorSpan>}
			</Box>
		);
	}
);

export default FormSelect;
