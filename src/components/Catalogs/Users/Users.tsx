import { useMemo } from 'react';
import AlertMessage from '../../../layouts/AlertMessage';
import AppLayout from '../../../layouts/AppLayout';
import Loader from '../../../layouts/Loader';
import Modal from '../../../layouts/Modal';
import SimpleTable from '../../../layouts/SimpleTable';
import useUsers from './useUsers';

const COLUMNS = [
	{ id: 'username', title: 'Логин' },
	{ id: 'name', title: 'ФИО' },
	{ id: 'email', title: 'Почтовый адрес' },
	{ id: 'phone', title: 'Телефон' },
	{ id: 'website', title: 'Веб сайт' },
];

export default function Users(props: {}) {
	const { usersQuery, selected, toggleSelected } = useUsers({});
	const { data, isLoading, error, isFetching, refetch } = usersQuery;

	const content = useMemo(() => {
		if (isLoading) {
			return <Loader loading={isLoading} />;
		} else if (error) {
			return (
				<AlertMessage
					action={refetch}
					variant={'error'}
					error={JSON.stringify(error)}
				/>
			);
		} else {
			return (
				<SimpleTable
					columns={COLUMNS}
					handleClick={toggleSelected}
					list={data}
					title='Список пользователей'
				/>
			);
		}
	}, [usersQuery]);

	return (
		<AppLayout title={'Пользователи'}>
			{content}
			{selected && (
				<Modal
					open={!!selected}
					maxWidth='sm'
					close={() => toggleSelected(undefined)}
					title={'Редактирование пользователя'}
				>
					<div>{selected.username}</div>
				</Modal>
			)}
		</AppLayout>
	);
}
