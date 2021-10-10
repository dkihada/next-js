import { CardProps } from './Card.props';
import styles from './Card.module.css';
const cn = require('classnames');

export const Card = ({
	children,
	color = 'white',
	className,
	...props
}: CardProps): JSX.Element => {
	return (
		<div
			className={cn(styles.card, className, {
				[styles.blue]: (color = 'blue'),
			})}
			{...props}
		>
			{children}
		</div>
	);
};
