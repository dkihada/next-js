export interface ProductModel {
	_id: string;
	categories: string[];
	tags: string[];
	title: string;
	image: string;
	description: string;
	link: string;
	price: number;
	credit: number;
	oldPrice: number;
	characteristics: ProdcutCharacteristic[];
	advantages?: string;
	initialRating: number;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	html?: string;
	reviews: ReviewModel[];
	reviewCount: number;
	reviewAvg: number;
}

export interface ProdcutCharacteristic {
	value: string;
	name: string;
}

export interface ReviewModel {
	_id: string;
	name: string;
	title: string;
	description: string;
	rating: number;
	createdAt: Date;
}
