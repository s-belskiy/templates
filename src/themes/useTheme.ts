import { createTheme } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';

enum Modes {
	Light = 'light',
	Dark = 'dark',
}

type Mode = Modes.Light | Modes.Dark;

export default function useTheme() {
	const { Light, Dark } = Modes;
	const [mode, setMode] = useState<Mode>(Dark);

	const toggleTheme = useCallback(() => {
		setMode(oldMode => (oldMode === Dark ? Light : Dark));
	}, []);

	const theme = useMemo(() => {
		return createTheme({ palette: { mode } });
	}, [mode]);

	return {
		theme,
		toggleTheme,
	};
}
