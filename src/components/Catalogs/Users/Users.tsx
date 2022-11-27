import AppLayout from '../../../layouts/AppLayout';
import SimpleTable from '../../../layouts/SimpleTable';
import { FAKE_USERS } from './list';

const FAKE_COLUMNS = [
	{ id: 'username', title: 'Логин' },
	{ id: 'lastname', title: 'Фамилия' },
	{ id: 'firstname', title: 'Имя' },
	{ id: 'surname', title: 'Отчество' },
	{ id: 'role', title: 'Роль' },
];

export default function Users(props: {}) {
	return (
		<AppLayout title={'Пользователи'}>
			<SimpleTable
				columns={FAKE_COLUMNS}
				list={FAKE_USERS}
				title='Список пользователей'
			/>
		</AppLayout>
	);
}
