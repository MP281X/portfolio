/* eslint-disable @typescript-eslint/naming-convention */
export const load = () => {
	type Education = {
		eqf: number
		school: string
		degree: string
		vote: number | undefined
		period: `${number} - ${number}`
	}
	const educations: Education[] = [
		{
			degree: 'Tecnico Superiore Cloud Developer',
			eqf: 5,
			period: '2022 - 2024',
			school: 'ITS Alto Adriatico',
			vote: 95
		},
		{
			degree: 'IT and Telecomunications Diploma',
			eqf: 4,
			period: '2017 - 2022',
			school: 'ISIS A. Malignani',
			vote: 68
		}
	]

	type Language = {
		language: string
		level: 'native' | (string & {}) // eslint-disable-line
	}
	const languages: Language[] = [
		{ language: 'italian', level: 'native' },
		{ language: 'english', level: 'C1' }
	]

	type Work = {
		company_name: string
		job_position: string
		type: 'work' | 'internship'
		location: `${string} (${string})`
		period: `${number}/${number}/${number} - ${number}/${number}/${number}`
	}
	const works: Work[] = [
		{
			company_name: 'Altitudo',
			job_position: 'Frontend Developer',
			location: 'Salzburg (AU)',
			period: '08/01/2024 - 28/03/2024',
			type: 'internship'
		},
		{
			company_name: 'Bizaway',
			job_position: 'Backend Developer',
			location: 'Spilimbergo (IT)',
			period: '12/06/2023 - 04/08/2023',
			type: 'internship'
		},
		{
			company_name: 'Nordest Servizi',
			job_position: 'System Engineer',
			location: 'Tavagnacco (IT)',
			period: '17/01/2022 - 29/01/2022',
			type: 'internship'
		}
	]

	type Skill = {
		languages: string[]
		type: 'devops' | 'backend' | 'frontend' | 'databases'
	}
	const skills: Skill[] = [
		{ languages: ['sveltekit', 'tailwind', 'flutter'], type: 'frontend' },
		{ languages: ['node.js', 'golang'], type: 'backend' },
		{ languages: ['docker', 'kubernetes', 'github actions'], type: 'devops' },
		{ languages: ['postgres', 'redis', 'mongodb'], type: 'databases' }
	]

	type Contact = {
		text: string
		icon: string
	}
	const contacts: Contact[] = [
		{ icon: 'smartphone', text: '+39 3518853376' },
		{ icon: 'email', text: 'paludgnachmatteo.dev@gmail.com' },
		{ icon: 'http', text: 'portfolio.mp281x.xyz' },
		{ icon: 'code_blocks', text: 'github.com/MP281X' },
		{ icon: 'map', text: 'Moimacco (UD)' }
	]

	return { contacts, educations, languages, skills, works }
}
