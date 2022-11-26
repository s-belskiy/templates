import {
	Route,
	BrowserRouter,
	Routes as ReactRoutes,
	Navigate,
} from 'react-router-dom';
import NewWorkout from '../components/NewWorkout/NewWorkout';
import Workouts from '../components/Workouts/Workouts';
import AppLayout from '../layouts/AppLayout';

export default function Routes() {
	return (
		<BrowserRouter>
			<ReactRoutes>
				<Route path='/main' element={<AppLayout title={'Главная'} />} />
				<Route path='/new-workout' element={<NewWorkout />} />
				<Route path='/workouts' element={<Workouts />} />
				<Route path='/' element={<Navigate to={'/main'} />} />
			</ReactRoutes>
		</BrowserRouter>
	);
}
