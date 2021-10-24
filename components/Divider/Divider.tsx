import { DividerProps } from './Divider.props';
import styles from './Divider.module.css';
const cn = require('classnames');

export const Divider = ({
	children,
	className,
	...props
}: DividerProps): JSX.Element => {
	return <hr className={cn(className, styles.hr)} {...props} />;
};
