import { useCallback, useState } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

type UserMenuProps = {
	toggleOpenUserProfile: () => void;
};

export default function UserMenu(props: UserMenuProps) {
	const { toggleOpenUserProfile } = props;

	return (
		<Box sx={{ ml: 'auto' }}>
			<IconButton size='large' onClick={toggleOpenUserProfile} color='inherit'>
				<AccountCircle />
			</IconButton>
		</Box>
	);
}
