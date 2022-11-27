import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/index.scss';
import { SnackbarProvider } from 'notistack';
import {
	createTheme,
	CssBaseline,
	ThemeProvider,
	useTheme,
} from '@mui/material';

const theme = createTheme({ palette: { mode: 'dark' } });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<SnackbarProvider maxSnack={5}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</SnackbarProvider>
	</React.StrictMode>
);
