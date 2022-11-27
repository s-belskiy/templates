import {
	Box,
	IconButton,
	InputBase,
	Pagination,
	Paper,
	styled,
	Table,
	TableBody,
	TableCell,
	tableCellClasses,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

type SimpleTableProps = {
	columns?: any[];
	list?: any[];
	title?: string;
	searchable?: boolean;
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

export default function SimpleTable(props: SimpleTableProps) {
	const { columns = [], list = [], title, searchable = true } = props;
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
			<Paper
				elevation={2}
				sx={{
					display: 'flex',
					width: '100%',
					alignItems: 'center',
					p: '.5em',
					borderRadius: 0,
				}}
			>
				{title && <Typography variant='h6'>{title}</Typography>}
				{!!searchable && (
					<Paper sx={{ ml: 'auto' }} elevation={2} component='form'>
						<InputBase placeholder='Поиск...' />
						<IconButton>
							<SearchIcon />
						</IconButton>
					</Paper>
				)}
			</Paper>
			<TableContainer sx={{ borderRadius: 0, height: '100%' }} component={Paper}>
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							{columns.map(column => (
								<StyledTableCell key={column.id}>
									{column.title}
								</StyledTableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{list.map(listItem => (
							<TableRow
								key={listItem.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								{columns.map(column => (
									<StyledTableCell
										align={column?.centered ? 'center' : undefined}
										width={column?.columnWidth || undefined}
									>
										{listItem[column.id]}
									</StyledTableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<Paper
				sx={{ borderRadius: 0, width: '100%', display: 'flex' }}
				elevation={2}
			>
				<Box sx={{ ml: 'auto' }}>
					<Pagination count={10} shape='rounded' />
				</Box>
			</Paper>
		</Box>
	);
}
