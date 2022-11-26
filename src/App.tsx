import useTheme from './themes/useTheme';
import { ThemeProvider, CssBaseline, Paper } from '@mui/material';

export default function App() {
	const { theme, toggleTheme } = useTheme();
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Paper sx={{ h: '100%', w: '100%', borderRadius: 0 }}>hello</Paper>
		</ThemeProvider>
	);
}
