import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import Routes from './routes/Routes';
import './scss/App.module.scss';
import { theme } from './themes/theme';


export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<SnackbarProvider
				maxSnack={5}
				autoHideDuration={2500}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<CssBaseline />
				<Routes />
			</SnackbarProvider>
		</ThemeProvider>
	);
}
