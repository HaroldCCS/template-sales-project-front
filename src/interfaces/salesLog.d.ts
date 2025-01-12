export interface ISalesLog {
	id: number;
	description: string;
	price: number;
	quantity: number;
	finalPrice: number;
	date: Date;
	registrant: string;
	method: number;
	file: string;
	headquarter?: string;
}