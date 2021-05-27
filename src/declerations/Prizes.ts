export interface PrizeCategory {
	_id: string;
	name: string;
	prereqDescription: string;
	isAvailable: boolean;
	prizes: Prize[];
}

export interface Prize {
	name: string;
	imageURL: string;
}
