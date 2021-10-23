import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import LoopIcon from './loop.svg';
import { Button, Input } from '..';
import { useState } from 'react';
import { useRouter } from 'next/router';
const cn = require('classnames');

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			goToSearch();
		}
	};

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search,
			},
		});
	};

	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input
				placeholder='Поиск...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button
				appearance='primary'
				className={styles.button}
				onClick={goToSearch}
			>
				<LoopIcon />
			</Button>
		</div>
	);
};
