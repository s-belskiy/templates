import {
	Alert,
	AlertColor,
	AlertTitle,
	Box,
	Button,
	IconButton,
} from '@mui/material';
import { Update } from '@mui/icons-material';

type AlertMessageProps = {
	error: string;
	variant: AlertColor | undefined;
	action?: () => void;
};

export default function AlertMessage(props: AlertMessageProps) {
	const { error, variant, action } = props;
	return (
		<Box sx={{width: '100%'}}>
			<Alert
				action={
					action && (
						<IconButton onClick={() => action()} color='inherit' size='large'>
							<Update />
						</IconButton>
					)
				}
				severity={variant}
			>
				<AlertTitle sx={{ textTransform: 'capitalize' }}>{variant}</AlertTitle>
				{error}
			</Alert>
		</Box>
	);
}
