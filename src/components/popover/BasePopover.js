import Popover from '@mui/material/Popover';
import { FilterIcon, FilterIconButton } from './styles';

const BasePopover = ({
	id,
	open,
	anchorEl,
	handleClick,
	handleClose,
	children,
}) => {
	return (
		<>
			<FilterIconButton
				aria-describedby={id}
				size="small"
				onClick={handleClick}
			>
				<FilterIcon />
			</FilterIconButton>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				{children}
			</Popover>
		</>
	);
};

export default BasePopover;
