import { TextAreaProps } from './TextArea.props';
import styles from './TextArea.module.css';
const cn = require('classnames');

export const TextArea = ({
	className,
	...props
}: TextAreaProps): JSX.Element => {
	return (
		<textarea className={cn(className, styles.text_area)} {...props}></textarea>
	);
};
