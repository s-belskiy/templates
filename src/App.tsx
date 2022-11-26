import useTheme from './themes/useTheme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import {
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom';
import AppLayout from './layouts/AppLayout';

export default function App() {


	return (
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							<AppLayout>
								<div>main</div>
							</AppLayout>
						}
					/>
					<Route
						path='/new-workout'
						element={
							<AppLayout>
								<div>Create new workout</div>
							</AppLayout>
						}
					/>
					<Route
						path='/workouts'
						element={
							<AppLayout>
								<div>Workouts</div>
							</AppLayout>
						}
					/>
					<Route
						path='/auth'
						element={
							<AppLayout>
								<div>login</div>
							</AppLayout>
						}
					/>
				</Routes>
			</Router>
	);
}
