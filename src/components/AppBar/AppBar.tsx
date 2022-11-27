import {
	Toolbar,
	AppBar as MUIAppBar,
	Typography,
	Breadcrumbs,
	Link,
} from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import UserMenu from './UserMenu';
import { useLocation, useNavigate } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import Modal from '../../layouts/Modal';
import UserProfile from '../UserProfile/UserProfile';

export type ItemList = {
	id: string;
	text: string;
	action?: () => void;
	children?: ItemList[];
};

type AppBarProps = {
	title?: string;
};

export default function AppBar(props: AppBarProps) {
	const navigate = useNavigate();
	const location = useLocation();
	const { title } = props;
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
				id: 'ideas-register',
				text: 'Реестр идей',
				action: () => navigate('/ideas-register'),
			},

			{
				id: 'catalogs',
				text: 'Справочники',
				children: [
					{
						id: 'users',
						text: 'Пользователи',
						action: () => navigate('/catalogs/users'),
					},
					{
						id: 'tags',
						text: 'Теги (технологии)',
						action: () => navigate('/catalogs/tags'),
					},
					{
						id: 'idea-statuses',
						text: 'Статусы идей',
						action: () => navigate('/catalogs/idea-statuses'),
					},
					{
						id: 'offer-statuses',
						text: 'Статусы идей (предложения заказчику)',
						action: () => navigate('/catalogs/offer-statuses'),
					},
				],
			},
		];
	}, [navigate]);

	return (
		<MUIAppBar sx={{position: 'relative'}}>
			<Toolbar sx={{ display: 'flex', width: '100%' }}>
				<BurgerMenu list={BURGER_MENU_LIST} />

				<Breadcrumbs>
					{!location.pathname.includes('/main') && (
						<Link
							sx={{ cursor: 'pointer' }}
							underline='hover'
							color='inherit'
							onClick={() => navigate('/main')}
						>
							На главную
						</Link>
					)}
					{title && <Typography color='text.primary'>{title}</Typography>}
				</Breadcrumbs>

				<UserMenu toggleOpenUserProfile={toggleOpenUserProfile} />
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
