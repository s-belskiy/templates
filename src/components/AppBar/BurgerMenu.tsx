import { ItemList } from './AppBar';
import {
	Box,
	IconButton,
	Drawer,
	List,
	ListItemButton,
	ListSubheader,
	Collapse,
	ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useCallback, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

type BurgerMenuProps = {
	list: ItemList[];
};

export default function BurgerMenu(props: BurgerMenuProps) {
	const { list = [] } = props;
	const location = useLocation();
	const [open, setOpen] = useState<boolean>(false);
	const [openCollapse, setOpenCollapse] = useState<string | undefined>(
		undefined
	);

	const toggleOpenDrawer = useCallback((bool: boolean) => {
		setOpen(bool);
	}, []);

	const toggleOpenCollapse = useCallback(
		(value: string | undefined) => {
			if (openCollapse === value) setOpenCollapse(undefined);
			else setOpenCollapse(value);
		},
		[openCollapse]
	);

	const listContent = useMemo(() => {
		return list.map(item => (
			<Box>
				<ListItemButton
					selected={
						(!item.children || !openCollapse) &&
						location.pathname.includes(item.id)
					}
					key={item.id}
					onClick={() =>
						(item.action && item.action()) ||
						(item.children && toggleOpenCollapse(item.id))
					}
				>
					<ListItemText>{item.text}</ListItemText>
					{item?.children && (
						<>{openCollapse === item.id ? <ExpandLess /> : <ExpandMore />}</>
					)}
				</ListItemButton>
				{item.children && (
					<Collapse
						in={
							(openCollapse && !!location.pathname.includes(openCollapse)) ||
							openCollapse === item.id
						}
					>
						{item.children.map(childrenItem => (
							<ListItemButton
								selected={location.pathname.includes(childrenItem.id)}
								key={childrenItem.id}
								onClick={() => childrenItem.action && childrenItem.action()}
							>
								<ListItemText sx={{ pl: '1em' }}>
									{childrenItem.text}
								</ListItemText>
							</ListItemButton>
						))}
					</Collapse>
				)}
			</Box>
		));
	}, [list, toggleOpenCollapse, location, openCollapse]);

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
				<Box sx={{ width: 250 }}>
					<List
						subheader={
							<ListSubheader component='div'>Меню навигации</ListSubheader>
						}
					>
						{listContent}
					</List>
				</Box>
			</Drawer>
		</Box>
	);
}
