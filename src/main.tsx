import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.module.scss';
import App from './App';
import {CssBaseline} from '@mui/material'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
    <CssBaseline />
		<App />
	</React.StrictMode>
);
