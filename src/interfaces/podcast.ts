
export interface Podcasts {
	"im:name": {
		label: string;
	};
	"im:image": {
		label: string;
	}[];
	"im:artist": {
		label: string;
	};
	id: {
		attributes: {
			"im:id": string;
		};
	};
}