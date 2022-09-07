import { styled } from '@mui/material/styles';

import FilterListIcon from '@mui/icons-material/FilterList';
import BaseButton from '../button';

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
