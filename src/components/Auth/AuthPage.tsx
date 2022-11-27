import { Box, Typography, Button, TextField } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type AuthPageProps = {};

export default function AuthPage(props: AuthPageProps) {
	const [data, setData] = useState({ username: '', password: '' });
	const navigate = useNavigate();

	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { target } = event;
			const { name, value } = target;
			setData(oldData => ({ ...oldData, [name]: value }));
		},
		[]
	);

	const isDisabled = useMemo(() => {
		const { username, password } = data;
		let bool;
		if (!username.length || !password.length) bool = true;
		else if (username.length < 3 || username.length > 20) bool = true;
		return bool;
	}, [data]);

	return (
		<Box
			sx={{
				display: 'flex',
				width: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
			}}
		>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
				<Typography sx={{ alignSelf: 'center' }} variant='h4'>
					Вход
				</Typography>

				<TextField
					sx={{ width: '30vw' }}
					name='username'
					onChange={handleChange}
					label='Логин'
					variant='outlined'
				/>
				<TextField
					sx={{ width: '30vw' }}
					name='password'
					onChange={handleChange}
					type='password'
					label='Пароль'
					variant='outlined'
				/>
				<Button
					disabled={isDisabled}
					onClick={() => navigate('/')}
					size='large'
					sx={{ width: '30vw' }}
					variant='contained'
				>
					Войти
				</Button>
			</Box>
		</Box>
	);
}
