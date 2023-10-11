export const load = async () => {
	type Education = {
		school: string;
		degree: string;
		period: `${number} - ${number}`;
		vote: number | undefined;
		eqf: number;
	};
	const educations: Education[] = [
		{
			school: 'ITS Alto Adriatico',
			degree: 'Tecnico Superiore Cloud Developer',
			period: '2022 - 2024',
			vote: undefined,
			eqf: 5
		},
		{
			school: 'ISIS A. Malignani',
			degree: 'Diploma in IT and Telecomunications',
			period: '2017 - 2022',
			vote: 68,
			eqf: 4
		}
	];

	type Language = {
		language: string;
		level: 'native' | (string & {});
	};
	const languages: Language[] = [
		{ language: 'italian', level: 'native' },
		{ language: 'english', level: 'B2' }
	];

	type Work = {
		company_name: string;
		job_position: string;
		type: 'stage' | 'work';
		location: `${string} (${string})`;
		period: `${number}/${number}/${number} - ${number}/${number}/${number}`;
	};
	const works: Work[] = [
		{
			company_name: 'Bizaway',
			period: '12/06/2023 - 04/08/2023',
			location: 'Spilimbergo (IT)',
			type: 'stage',
			job_position: 'Backend Developer'
		},
		{
			company_name: 'Nordest Servizi',
			period: '17/01/2022 - 29/01/2022',
			location: 'Tavagnacco (IT)',
			type: 'stage',
			job_position: 'System Engineer'
		}
	];

	type Skill = {
		type: 'frontend' | 'backend' | 'devops' | 'databases';
		languages: string[];
	};
	const skills: Skill[] = [
		{ type: 'frontend', languages: ['sveltekit', 'tailwind', 'flutter'] },
		{ type: 'backend', languages: ['typescript', 'golang'] },
		{ type: 'devops', languages: ['github actions', 'argocd', 'kubernetes'] },
		{ type: 'databases', languages: ['postgres', 'redis', 'mongodb'] }
	];

	type Contact = {
		text: string;
		icon: string;
	};
	const contacts: Contact[] = [
		{ icon: 'smartphone', text: '+39 3518853376' },
		{ icon: 'email', text: 'paludgnachmatteo.dev@gmail.com' },
		{ icon: 'http', text: 'portfolio.mp281x.xyz' },
		{ icon: 'code_blocks', text: 'github.com/MP281X' },
		{ icon: 'map', text: 'Moimacco (UD)' }
	];

	return { educations, languages, works, skills, contacts };
};
