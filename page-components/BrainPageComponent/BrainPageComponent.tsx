import { HhData, Htag, P, Sort, Tag } from '../../components';
import { BrainPageComponentProps } from './BrainPageComponent.props';
import styles from './BrainPageComponent.module.css';
import { PageLevelCategory } from '../../interfaces/page.interface';
import { Advantages } from '../../components/Advantages/Advantages';
import parse from 'html-react-parser';
import { SortEnum } from '../../components/Sort/Sort.props';
import { useReducer } from 'react';
import { sortReducer } from './sort.reducer';

export const BrainPageComponent = ({
	page,
	products,
	firstCategory,
}: BrainPageComponentProps): JSX.Element => {
	const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
		sortReducer,
		{
			products,
			sort: SortEnum.Rating,
		}
	);

	const setSort = (sort: SortEnum) => {
		dispatchSort({ type: sort });
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && (
					<Tag color='gray' size='m'>
						{products.length}
					</Tag>
				)}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div>
				{sortedProducts &&
					sortedProducts.map((p) => <div key={p._id}>{p.title}</div>)}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='m'>
					hh.ru
				</Tag>
			</div>
			{firstCategory == PageLevelCategory.Courses && page.hh && (
				<HhData {...page.hh} />
			)}
			{page.advantages && page.advantages.length > 0 && (
				<>
					<div className={styles.advantagesTitle}>
						<Htag tag='h2'>Преимущества</Htag>
					</div>
					<Advantages advantages={page.advantages} />
				</>
			)}
			{page.seoText && <div className={styles.seo}> {parse(page.seoText)}</div>}
			<Htag tag='h2'>Получаемые навыки</Htag>
			{page.tags.map((t) => (
				<Tag color='primary' key={t}>
					{t}
				</Tag>
			))}
		</div>
	);
};
