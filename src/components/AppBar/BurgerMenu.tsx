import { ItemList } from './AppBar';
import {
	Box,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

type BurgerMenuProps = {
	list: ItemList[];
};

export default function BurgerMenu(props: BurgerMenuProps) {
	const { list = [] } = props;
	const location = useLocation();
	const [open, setOpen] = useState<boolean>(false);

	const toggleOpenDrawer = useCallback((bool: boolean) => {
		setOpen(bool);
	}, []);

	return (
		<Box>
			<IconButton
				size='large'
				edge='start'
				color='inherit'
				aria-label='menu'
				sx={{ mr: 2 }}
				onClick={() => toggleOpenDrawer(true)}
			>
				<MenuIcon />
			</IconButton>
			<Drawer anchor='left' onClose={() => toggleOpenDrawer(false)} open={open}>
				<Box sx={{ width: 250, p: '.5em' }}>
					<List>
						{list.map(item => (
							<ListItem
								selected={location.pathname.includes(item.id)}
								key={item.id}
								onClick={() => item.action && item.action()}
								disablePadding
							>
								<ListItemButton>{item.text}</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</Box>
	);
}
