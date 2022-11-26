import { useState } from 'react';
import { ItemList } from './AppBar';
import {Box, Button, Popover} from '@mui/material';

type UserMenuProps = {
	list: ItemList[];
};

export default function UserMenu(props: UserMenuProps) {
	const { list = [] } = props;
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'user-popover' : undefined;

	return (
		<Box sx={{ ml: 'auto' }}>
			<Button onClick={handleClick} color='inherit'>
				Войти
			</Button>
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
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '.5em',
						p: '1em',
					}}
				>
					{list.map(item => (
						<Button
							onClick={() => item?.action && item.action()}
							key={item.id}
							variant='contained'
						>
							{item.text}
						</Button>
					))}
				</Box>
			</Popover>
		</Box>
	);
}
