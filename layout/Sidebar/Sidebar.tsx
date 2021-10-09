import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
const cn = require('classnames');

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	return <div {...props}>Sidebar</div>;
};
