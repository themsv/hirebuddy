import Popover from '@mui/material/Popover';

const BasePopover = ({ id, open, anchorEl, onClick, children }) => {
	return (
		<Popover
			data-testid="pop-over"
			id={id}
			open={open}
			anchorEl={anchorEl}
			onClick={onClick}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
		>
			{children}
		</Popover>
	);
};

export default BasePopover;
