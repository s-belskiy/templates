import { Toolbar, AppBar as MUIAppBar, Typography, Box } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import UserMenu from './UserMenu';
import { useNavigate } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import Modal from '../../layouts/Modal';
import UserProfile from '../UserProfile/UserProfile';

export type ItemList = {
	id: string;
	text: string;
	action?: () => void;
};

type AppBarProps = {
	toggleTheme: () => void;
	title?: string;
};

export default function AppBar(props: AppBarProps) {
	const navigate = useNavigate();
	const { toggleTheme, title } = props;
	const [openUserProfile, setOpenUserProfile] = useState<boolean>(false);

	const toggleOpenUserProfile = useCallback(() => {
		setOpenUserProfile(oldValue => !oldValue);
	}, []);

	const BURGER_MENU_LIST = useMemo(() => {
		return [
			{
				id: 'main',
				text: 'Главная',
				action: () => navigate('/main'),
			},

			{
				id: 'workouts',
				text: 'Тренировки',
				action: () => navigate('/workouts'),
			},
			{
				id: 'new-workout',
				text: 'Создать тренировку',
				action: () => navigate('/new-workout'),
			},
		];
	}, [navigate]);

	const USER_MENU_LIST = useMemo(() => {
		return [
			{
				id: 'profile',
				text: 'Профиль',
				action: toggleOpenUserProfile,
			},
			{ id: 'theme', text: 'Сменить тему', action: () => toggleTheme() },
			{
				id: 'logout',
				text: 'Выйти',
			},
		];
	}, [toggleTheme, navigate]);

	return (
		<MUIAppBar>
			<Toolbar sx={{ display: 'flex', width: '100%' }}>
				<BurgerMenu list={BURGER_MENU_LIST} />
				{title && <Typography>{title}</Typography>}
				<UserMenu list={USER_MENU_LIST} />
			</Toolbar>
			{!!openUserProfile && (
				<Modal
					transition
					open={!!openUserProfile}
					close={toggleOpenUserProfile}
					title={'Профиль'}
				>
					<UserProfile />
				</Modal>
			)}
		</MUIAppBar>
	);
}
