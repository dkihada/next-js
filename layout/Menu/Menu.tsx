import React, { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import styles from './Menu.module.css';
import { PageLevelCategory } from '../../interfaces/page.interface';

import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductIcon from './icons/products.svg';

const cn = require('classnames');

const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Курсы',
		icon: <CoursesIcon />,
		id: PageLevelCategory.Courses,
	},
	{
		route: 'services',
		name: 'Сервисы',
		icon: <ServicesIcon />,
		id: PageLevelCategory.Services,
	},
	{
		route: 'books',
		name: 'Книги',
		icon: <BooksIcon />,
		id: PageLevelCategory.Books,
	},
	{
		route: 'products',
		name: 'Товары',
		icon: <ProductIcon />,
		id: PageLevelCategory.Products,
	},
];

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map((m) => (
					<div key={m.route}>
						<a href={`/${m.route}`}>
							<div
								className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: m.id == firstCategory,
								})}
							>
								{m.icon}
								<span>{m.name}</span>
							</div>
						</a>
						{m.id == firstCategory && buildSecondLevel(m)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map((m) => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>{m._id.secondCategory}</div>
						<div
							className={cn(styles.secondLevelBlock, {
								[styles.secondLevelBlockOpened]: m.isOpened,
							})}
						>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map((p) => (
			<a
				key={p.alias}
				href={`/${route}/${p.alias}`}
				className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: false,
				})}
			>
				{p.category}
			</a>
		));
	};

	return (
		<div className={styles.menu}>
			<ul>{buildFirstLevel()}</ul>
		</div>
	);
};
