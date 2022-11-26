import { Toolbar, AppBar as MUIAppBar } from '@mui/material';
import { useMemo } from 'react';
import useTheme from '../../themes/useTheme';
import UserMenu from './UserMenu';
import { useNavigate } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';

export type ItemList = {
	id: string;
	text: string;
	action?: () => void;
};

type AppBarProps = {
	toggleTheme: () => void;
};

export default function AppBar(props: AppBarProps) {
	const navigate = useNavigate();
	const {toggleTheme} = props;

	const BURGER_MENU_LIST = useMemo(() => {
		return [
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
			{ id: 'theme', text: 'Сменить тему', action: () => toggleTheme() },
			{
				id: 'profile',
				text: 'Профиль',
				action: () => navigate('/profile'),
			},
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
				<UserMenu list={USER_MENU_LIST} />
			</Toolbar>
		</MUIAppBar>
	);
}
