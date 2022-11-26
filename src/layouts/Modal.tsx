import Dialog, { DialogProps } from '@mui/material/Dialog';
import {
	Slide,
	DialogTitle,
	DialogContent,
	DialogActions,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { forwardRef } from 'react';

type ModalProps = {
	open: boolean;
	transition?: boolean;
	close: () => void;
	children: React.ReactNode;
	actions?: React.ReactNode;
	title?: string;
	maxWidth?: DialogProps['maxWidth'];
};

export default function Modal(props: ModalProps) {
	const {
		open = false,
		transition = false,
		close,
		actions,
		children,
		title,
		maxWidth = 'xs',
	} = props;

	let Transition = undefined;
	if (!!transition)
		Transition = forwardRef(function Transition(
			props: TransitionProps & {
				children: React.ReactElement<any, any>;
			},
			ref: React.Ref<unknown>
		) {
			return <Slide direction='down' ref={ref} {...props} />;
		});

	return (
		<Dialog
			open={open}
			maxWidth={maxWidth}
			fullWidth={true}
			TransitionComponent={Transition}
			keepMounted
			onClose={close}
		>
			{title && <DialogTitle>{title}</DialogTitle>}
			<DialogContent>{children}</DialogContent>
			{actions && <DialogActions>{actions}</DialogActions>}
		</Dialog>
	);
}
