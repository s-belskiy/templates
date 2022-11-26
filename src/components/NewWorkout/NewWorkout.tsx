import { Box } from '@mui/material';
import AppLayout from '../../layouts/AppLayout';

type NewWorkoutProps = {};

export default function NewWorkout(props: NewWorkoutProps) {
	const {} = props;

	return (
		<AppLayout title={'Новая тренировка'}>
			<Box sx={{ p: '10em' }}>New Workout</Box>
		</AppLayout>
	);
}
