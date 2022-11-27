import AppLayout from '../../../layouts/AppLayout';
import SimpleTable from '../../../layouts/SimpleTable';
import { FAKE_TAGS } from './list';

const FAKE_COLUMNS = [
	{ id: 'id', title: 'Идентификатор', columnWidth: '10%' },
	{ id: 'name', title: 'Наименование' },
];

export default function Tags(props: {}) {
	return (
		<AppLayout title={'Теги (технологии)'}>
			<SimpleTable
				columns={FAKE_COLUMNS}
				list={FAKE_TAGS}
				title='Теги (технологии)'
			/>
		</AppLayout>
	);
}
