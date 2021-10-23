import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import { Menu } from '../Menu/Menu';
import Logo from './logo.svg';
import { Search } from '../../components';

const cn = require('classnames');

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<div className={styles.logo}>
				<Logo />
				<span className={styles.brain}>
					Brain <span className={styles.app}> App</span>
				</span>
			</div>
			<Search />
			<Menu />
		</div>
	);
};
