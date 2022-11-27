import React from 'react';
import AppBar from '../components/AppBar/AppBar';
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import useTheme from '../themes/useTheme';

type AppLayoutProps = {
	children?: React.ReactNode;
	title?: string;
};

export default function AppLayout(props: AppLayoutProps) {
	const { children, title } = props;
	const { theme, toggleTheme } = useTheme();
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar title={title} toggleTheme={toggleTheme} />
			<Box sx={{ p: '1em', height: '100%', overflowY: 'auto' }}>{children}</Box>
		</ThemeProvider>
	);
}
