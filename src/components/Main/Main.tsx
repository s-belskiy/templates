import AppLayout from '../../layouts/AppLayout';
import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
	const navigate = useNavigate();
	const CATALOGS_ITEMS = useMemo(() => {
		return [
			{
				id: 'users',
				title: 'Пользователи',
				action: () => navigate('/catalogs/users'),
			},
			{
				id: 'idea-statuses',
				title: 'Статусы идей',
				action: () => navigate('/catalogs/idea-statuses'),
			},
			{
				id: 'offer-statuses',
				title: 'Статуса идей (предложения заказчикам)',
				action: () => navigate('/catalogs/offer-statuses'),
			},
			{
				id: 'tags',
				title: 'Теги (технологии)',
				action: () => navigate('/catalogs/tags'),
			},
		];
	}, [navigate]);

	const OTHER_ITEMS = useMemo(() => {
		return [
			{
				id: 'ideas-register',
				title: 'Реестр идей',
				action: () => navigate('/ideas-register'),
			},
		];
	}, [navigate]);

	return (
		<AppLayout title='Система контроля и учета идей'>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
				<Box>
					<Paper
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: '1em',
							p: '1em',
						}}
					>
						<Typography variant={'h5'}>Остальное</Typography>
						<Divider sx={{ p: 0, m: 0 }} />
						<Grid sx={{ height: '100%' }} container spacing={1}>
							{OTHER_ITEMS.map((catalog: CatalogItemType) => (
								<CatalogCard key={catalog.id} catalog={catalog} />
							))}
						</Grid>
					</Paper>
				</Box>
				<Box>
					<Paper
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: '1em',
							p: '1em',
						}}
					>
						<Typography variant={'h5'}>Справочники</Typography>
						<Divider sx={{ p: 0, m: 0 }} />
						<Grid sx={{ height: '100%' }} container spacing={1}>
							{CATALOGS_ITEMS.map((catalog: CatalogItemType) => (
								<CatalogCard key={catalog.id} catalog={catalog} />
							))}
						</Grid>
					</Paper>
				</Box>
			</Box>
		</AppLayout>
	);
}

type CatalogItemType = {
	id: string;
	title: string;
	action: () => void;
};

type CatalogCardProps = {
	catalog: CatalogItemType;
};
function CatalogCard(props: CatalogCardProps) {
	const { catalog } = props;
	return (
		<Grid xs={12} sm={6} md={3} sx={{ height: '100%' }} item>
			<Paper
				onClick={() => catalog.action()}
				elevation={5}
				sx={{
					height: '250px',
					p: '.5em',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					cursor: 'pointer',
				}}
			>
				<Typography sx={{ textAlign: 'center' }} variant='h6'>
					{catalog.title}
				</Typography>
			</Paper>
		</Grid>
	);
}
