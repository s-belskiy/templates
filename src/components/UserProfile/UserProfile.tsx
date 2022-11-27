import {
	Box,
	Button,
	Typography,
	TextField,
	IconButton,
	useTheme,
} from '@mui/material';
import { Check, Close } from '@mui/icons-material';
import { useCallback, useState, useMemo } from 'react';
import Modal from '../../layouts/Modal';
import { useNavigate } from 'react-router-dom';
type UserProfileProps = {};

export default function UserProfile(props: UserProfileProps) {
	const navigate = useNavigate();
	const [mode, setMode] = useState<string | undefined>(undefined);
	const [password, setPassword] = useState<string>('');

	const toggleMode = useCallback((mode: string | undefined = undefined) => {
		setMode(mode);
	}, []);

	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { target } = event;
			const { value } = target;
			setPassword(value);
		},
		[]
	);

	const isDisabled = useMemo(() => {
		let bool;
		if (!password) bool = true;
		return bool;
	}, [password]);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1em',
				height: '20em',
			}}
		>
			<Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
				<Typography variant='subtitle1'>Имя пользователя: admin</Typography>
				<Typography variant='subtitle1'>
					Роль пользователя: Администратор
				</Typography>
				<Typography variant='subtitle1'>
					Дата регистрации: 31.05.2022
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					width: '100%',
					flexDirection: 'column',
					gap: '1em',
				}}
			>
				<Button variant='contained' color='primary'>
					Сменить тему
				</Button>
				{mode !== 'edit' ? (
					<Button
						variant='contained'
						onClick={() => toggleMode('edit')}
						color='error'
					>
						Сменить пароль
					</Button>
				) : (
					<Box
						sx={{
							display: 'flex',
							gap: '.5em',
							alignItems: 'center',
							width: '100%',
						}}
					>
						<TextField
							sx={{ width: '100%' }}
							size='small'
							name='password'
							type='password'
							value={password}
							onChange={handleChange}
							placeholder='Введите новый пароль'
						/>

						<Box sx={{ display: 'flex' }}>
							<IconButton
								onClick={() => toggleMode('edit')}
								disabled={isDisabled}
							>
								<Check fontSize='medium' />
							</IconButton>
							<IconButton onClick={() => toggleMode(undefined)}>
								<Close fontSize='medium' />
							</IconButton>
						</Box>
					</Box>
				)}
				<Button
					variant='outlined'
					onClick={() => toggleMode('delete')}
					color='error'
				>
					Удалить аккаунт
				</Button>
				<Button onClick={() => navigate('/auth')} color='error'>
					Выйти
				</Button>
			</Box>
			{mode === 'delete' && (
				<Modal
					maxWidth={'xs'}
					open={mode === 'delete'}
					close={() => toggleMode(undefined)}
					title='Удаление аккаунта'
					actions={
						<Box sx={{ display: 'flex', width: '100%' }}>
							<Button
								variant='contained'
								onClick={() => toggleMode(undefined)}
								color='error'
							>
								Уверен (удалить)
							</Button>
							<Button
								variant='contained'
								onClick={() => toggleMode(undefined)}
								sx={{ ml: 'auto' }}
							>
								Передумал (отменить)
							</Button>
						</Box>
					}
				>
					<Box
						sx={{
							height: '8vh',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
						}}
					>
						<Typography variant='h6'>Аккаунт будет удален</Typography>
						<Typography variant='h6'>
							Вы уверены, что хотите удалить аккаунт?
						</Typography>
					</Box>
				</Modal>
			)}
		</Box>
	);
}
