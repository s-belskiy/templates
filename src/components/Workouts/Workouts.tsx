import { Box } from '@mui/material';
import AppLayout from '../../layouts/AppLayout';

type WorkoutsProps = {};

export default function Workouts(props: WorkoutsProps) {
	const {} = props;

	return (
		<AppLayout title={'Тренировки'}>
			<Box sx={{ p: '10em' }}>Workouts</Box>
		</AppLayout>
	);
}
