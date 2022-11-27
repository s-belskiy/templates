import AppLayout from '../../../layouts/AppLayout';
import SimpleTable from '../../../layouts/SimpleTable';
import { FAKE_IDEA_STATUSES } from './list';

const FAKE_COLUMNS = [
	{ id: 'id', title: 'Идентификатор', columnWidth: '10%' },
	{ id: 'name', title: 'Наименование' },
];

export default function IdeaStatuses(props: {}) {
	return (
		<AppLayout title={'Статусы идей'}>
			<SimpleTable
				columns={FAKE_COLUMNS}
				list={FAKE_IDEA_STATUSES}
				title='Статусы идей'
			/>
		</AppLayout>
	);
}
