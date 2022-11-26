import { useCallback, useState } from 'react';
import { ItemList } from './AppBar';
import { Box, Button, Popover, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AuthPage from '../Auth/AuthPage';
import Modal from '../../layouts/Modal';

type UserMenuProps = {
	list: ItemList[];
};

export default function UserMenu(props: UserMenuProps) {
	const isAuthorized = true;
	const { list = [] } = props;
	const [openAuth, setOpenAuth] = useState<boolean>(false);
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const toggleOpenAuth = useCallback(() => {
		setOpenAuth(oldValue => !oldValue);
	}, []);

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
			{!isAuthorized && (
				<Button onClick={toggleOpenAuth} color='inherit'>
					Войти
				</Button>
			)}
			{!!isAuthorized && (
				<IconButton size='large' onClick={handleClick} color='inherit'>
					<AccountCircle />
				</IconButton>
			)}
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
