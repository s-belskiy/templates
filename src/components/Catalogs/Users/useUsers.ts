import { useSnackbar } from 'notistack';
import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { getUserList, User } from '../../../api/users.api';

export default function useUsers(props: {}) {
	const { enqueueSnackbar } = useSnackbar();

	const [selected, setSelected] = useState<User | undefined>(undefined);

	const toggleSelected = useCallback((user: User | undefined) => {
		setSelected(user);
	}, []);

	const usersQuery = useQuery(['users', 'list'], () => getUserList(), {
		onError: error => {
			enqueueSnackbar('Ошибка загрузки пользователей', {
				variant: 'error',
			});
		},
	});

	return {
		usersQuery,
		toggleSelected,
		selected
	};
}
