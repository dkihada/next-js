import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductIcon from './icons/products.svg';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import { PageLevelCategory } from '../interfaces/page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
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

export const priceRu = (price: number): string =>
	price
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		.concat(' ₽');

export const numSpace = (num: number): string =>
	num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const declOfNum = (
	number: number,
	titles: [string, string, string]
): string => {
	const cases = [2, 0, 1, 1, 1, 2];
	return titles[
		number % 100 > 4 && number % 100 < 20
			? 2
			: cases[number % 10 < 5 ? number % 10 : 5]
	];
};
