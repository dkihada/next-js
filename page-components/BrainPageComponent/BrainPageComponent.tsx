import { HhData, Htag, Tag } from '../../components';
import { BrainPageComponentProps } from './BrainPageComponent.props';
import styles from './BrainPageComponent.module.css';
import { PageLevelCategory } from '../../interfaces/page.interface';

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
			<div className={styles.hh}>
				{firstCategory == PageLevelCategory.Courses && <HhData {...page.hh} />}
			</div>
		</div>
	);
};
