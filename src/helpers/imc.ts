export interface LevelData {
	id: number;
	title: string;
	color: string;
	icon: 'down' | 'up';
	imc: number[];
	yourImc?: number;
}

export const levels: LevelData[] = [
	{
		id: 1,
		title: 'Magreza',
		color: '#96a3ab',
		icon: 'down',
		imc: [0, 18.59],
	},
	{
		id: 2,
		title: 'Normal',
		color: '#0ead69',
		icon: 'up',
		imc: [18.6, 24.99],
	},
	{
		id: 3,
		title: 'Sobrepeso',
		color: '#e2b036',
		icon: 'down',
		imc: [25, 30],
	},
	{
		id: 4,
		title: 'Obesidade',
		color: '#c3423f',
		icon: 'down',
		imc: [30.1, 99],
	},
];

export const calculateImc = (height: number, weight: number) => {
	const imc = +(weight / (height * height)).toFixed(2);

	for (const i in levels) {
		if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
			let levelCopy = { ...levels[i] };
			levelCopy.yourImc = imc;
			return levelCopy;
		}
	}

	return null;
};
