export interface ISalesLog {
	id: number;
	description: string;
	price: number;
	quantity: number;
	finalPrice: number;
	date: Date | string;
	registrant: string | number;
	method: number | string;
	file: string;
	headquarter?: string | number;
}