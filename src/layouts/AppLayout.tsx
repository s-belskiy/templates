import React from 'react';
import AppBar from '../components/AppBar/AppBar';
import { Box, Drawer, CssBaseline, ThemeProvider } from '@mui/material';
import useTheme from '../themes/useTheme';

type AppLayoutProps = {
	children: React.ReactNode;
};

export default function AppLayout(props: AppLayoutProps) {
	const { children } = props;
	const { theme, toggleTheme } = useTheme();
	console.log('🚀 ~ file: AppLayout.tsx ~ line 13 ~ AppLayout ~ theme', theme);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box sx={{ height: '100%' }}>
				<AppBar toggleTheme={toggleTheme} />
				{children}
			</Box>
		</ThemeProvider>
	);
}
