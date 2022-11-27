import React from 'react';
import AppBar from '../components/AppBar/AppBar';
import {  Box } from '@mui/material';


type AppLayoutProps = {
	children?: React.ReactNode;
	title?: string;
};

export default function AppLayout(props: AppLayoutProps) {
	const { children, title } = props;

	return (
		<Box sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
			<AppBar title={title} />
			<Box sx={{ p: '1em', height: '100%', overflow: 'auto' }}>{children}</Box>
		</Box>
	);
}
