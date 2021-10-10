import { PageLevelCategory, PageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';

export interface BrainPageComponentProps {
	firstCategory: PageLevelCategory;
	page: PageModel;
	products: ProductModel[];
}
