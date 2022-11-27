import AppLayout from '../../../layouts/AppLayout';
import SimpleTable from '../../../layouts/SimpleTable';
import { FAKE_OFFER_STATUSES } from './list';

const FAKE_COLUMNS = [
	{ id: 'id', title: 'Идентификатор', columnWidth: '10%' },
	{ id: 'name', title: 'Наименование' },
];

export default function OfferStatuses(props: {}) {
	return (
		<AppLayout title={'Статусы идей (предложения заказчику)'}>
			<SimpleTable
				columns={FAKE_COLUMNS}
				list={FAKE_OFFER_STATUSES}
				title='Статусы идей (предложения заказчику)'
			/>
		</AppLayout>
	);
}
