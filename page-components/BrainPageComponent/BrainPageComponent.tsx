import { HhData, Htag, P, Tag } from '../../components';
import { BrainPageComponentProps } from './BrainPageComponent.props';
import styles from './BrainPageComponent.module.css';
import { PageLevelCategory } from '../../interfaces/page.interface';
import { Advantages } from '../../components/Advantages/Advantages';
import parse from 'html-react-parser';

export const BrainPageComponent = ({
	page,
	products,
	firstCategory,
}: BrainPageComponentProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && (
					<Tag color='gray' size='m'>
						{products.length}
					</Tag>
				)}
				<span>Сортировка</span>
			</div>
			<div>
				{products && products.map((p) => <div key={p._id}>{p.title}</div>)}
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
