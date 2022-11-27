import { Box, CircularProgress } from '@mui/material';

type LoaderProps = {
	loading: boolean;
};
export default function Loader(props: LoaderProps) {
	const { loading } = props;
	return (
		<Box
			sx={{
				display: 'flex',
				width: '100%',
				height: '100%',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{loading && <CircularProgress />}
		</Box>
	);
}
