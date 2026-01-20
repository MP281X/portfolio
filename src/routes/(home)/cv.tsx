import { createFileRoute } from '@tanstack/react-router'
import { Separator } from '@/components/ui/separator.tsx'

export const Route = createFileRoute('/(home)/cv')({
	component: Page,
	ssr: true
})

const contactItems = ['+39 3518853376', 'paludgnachmatteo.dev@gmail.com', 'portfolio.mp281x.xyz', 'github.com/MP281X']

const locationItems = ['Moimacco (UD)', 'Italian - native', 'English - C1']

const summaryItems = [
	{
		text: 'Full-stack developer focused on scalable, performant real-time applications using React and Effect-TS.',
		emphasis: true
	},
	{ text: 'Experienced with TypeScript, Svelte, Flutter, Golang, Postgres, Redis, and MongoDB.' },
	{ text: 'DevOps workflows with Docker and GitHub Actions, plus UI/UX design and project planning.' },
	{ text: 'Punctual and reliable, consistently bringing fresh ideas to the table.' }
]

const workExperience = [
	{
		company: 'Tinexta Cyber',
		role: 'Full-Stack Developer',
		period: '01/10/2024 - Present',
		location: 'Udine (UD)'
	},
	{
		company: 'Altitudo (Erasmus)',
		role: 'Frontend Developer',
		period: '08/01/2024 - 28/03/2024',
		location: 'Salzburg (AU)'
	},
	{
		company: 'Bizaway (Internship)',
		role: 'Backend Developer',
		period: '12/06/2023 - 04/08/2023',
		location: 'Spilimbergo (IT)'
	},
	{
		company: 'Nordest Servizi (Internship)',
		role: 'System Engineer',
		period: '17/01/2022 - 29/01/2022',
		location: 'Tavagnacco (IT)'
	}
]

const education = [
	{
		school: 'ITS Alto Adriatico',
		details: ['Final vote: 95', 'Tecnico Superiore Cloud Developer'],
		period: '2022 - 2024',
		eqf: 'EQF: 5'
	},
	{
		school: 'ISIS A. Malignani',
		details: ['Final vote: 68', 'IT and Telecommunications Diploma'],
		period: '2017 - 2022',
		eqf: 'EQF: 4'
	}
]

const skills = [
	{ label: 'Frontend', value: 'svelte - react - tailwind - flutter' },
	{ label: 'Backend', value: 'node.js - golang' },
	{ label: 'DevOps', value: 'docker - github actions' },
	{ label: 'Databases', value: 'postgres - redis - mongodb' }
]

type SectionHeadingProps = {
	readonly title: string
}

function SectionHeading(input: SectionHeadingProps) {
	return (
		<div className="flex items-center gap-3">
			<p className="font-semibold text-xs uppercase tracking-[0.25em] print:text-slate-900">{input.title}</p>
			<Separator className="flex-1 print:bg-slate-300" />
		</div>
	)
}

function Page() {
	return (
		<section className="flex max-h-[calc(100dvh-1.75rem)] min-h-[calc(100dvh-1.75rem)] w-full items-start justify-center overflow-y-auto px-4 py-8 sm:px-6 print:max-h-none print:min-h-0 print:overflow-visible print:bg-white print:px-0 print:py-0 print:text-slate-900">
			<article className="mx-auto w-full max-w-[210mm] border border-border/70 bg-card text-sm leading-relaxed print:h-[297mm] print:w-[210mm] print:max-w-none print:overflow-hidden print:border-0 print:bg-white print:text-[10.75px] print:leading-[1.35]">
				<div className="flex min-h-full flex-col gap-4 p-6 print:gap-3 print:px-[12mm] print:py-[12mm]">
					<header className="flex flex-col gap-3">
						<div className="flex flex-col gap-1">
							<h1 className="font-semibold text-3xl leading-tight tracking-[0.12em] print:text-[20px] print:text-slate-900 print:tracking-[0.14em]">
								PALUDGNACH MATTEO
							</h1>
							<p className="font-medium text-muted-foreground text-sm print:text-slate-600">Full-Stack developer</p>
							<p className="text-muted-foreground text-sm print:text-[10.5px] print:text-slate-600">
								Focus: scalable, performant real-time applications with React and Effect-TS
							</p>
						</div>
						<div className="grid gap-3 text-muted-foreground text-xs leading-5 sm:grid-cols-[1.2fr_1fr] print:text-slate-600">
							<div>
								<p className="font-semibold text-xs uppercase tracking-[0.2em] print:text-slate-900">Contact</p>
								{contactItems.map(item => (
									<p key={item}>{item}</p>
								))}
							</div>
							<div>
								<p className="font-semibold text-xs uppercase tracking-[0.2em] print:text-slate-900">
									Location & Languages
								</p>
								{locationItems.map(item => (
									<p key={item}>{item}</p>
								))}
							</div>
						</div>
					</header>

					<section className="flex flex-col gap-3">
						<SectionHeading title="Summary" />
						<ul className="list-disc space-y-1 pl-5 text-muted-foreground text-sm print:text-slate-600">
							{summaryItems.map(item => (
								<li key={item.text} className={item.emphasis ? 'text-foreground print:text-slate-900' : undefined}>
									{item.text}
								</li>
							))}
						</ul>
					</section>

					<section className="flex flex-col gap-3">
						<SectionHeading title="Work Experience" />
						<div className="flex flex-col gap-3">
							{workExperience.map(job => (
								<div key={job.company} className="grid gap-2 text-sm sm:grid-cols-[1fr_auto]">
									<div>
										<p className="font-semibold uppercase print:text-slate-900">{job.company}</p>
										<p className="text-muted-foreground text-xs print:text-slate-600">{job.role}</p>
									</div>
									<div className="text-right text-muted-foreground text-xs print:text-slate-600">
										<p>{job.period}</p>
										<p>{job.location}</p>
									</div>
								</div>
							))}
						</div>
					</section>

					<section className="flex flex-col gap-3">
						<SectionHeading title="Education" />
						<div className="flex flex-col gap-3 text-sm">
							{education.map(entry => (
								<div key={entry.school} className="grid gap-2 sm:grid-cols-[1fr_auto]">
									<div>
										<p className="font-semibold print:text-slate-900">{entry.school}</p>
										{entry.details.map(detail => (
											<p key={detail} className="text-muted-foreground print:text-slate-600">
												{detail}
											</p>
										))}
									</div>
									<div className="text-right text-muted-foreground text-xs print:text-slate-600">
										<p>{entry.period}</p>
										<p>{entry.eqf}</p>
									</div>
								</div>
							))}
						</div>
					</section>

					<section className="flex flex-col gap-3">
						<SectionHeading title="Skills" />
						<div className="grid gap-3 text-muted-foreground text-sm print:text-slate-600">
							{skills.map(skill => (
								<div key={skill.label} className="grid gap-2 sm:grid-cols-[120px_1fr]">
									<p className="font-semibold text-xs uppercase tracking-[0.2em] print:text-slate-900">{skill.label}</p>
									<p>{skill.value}</p>
								</div>
							))}
						</div>
					</section>

					<footer className="mt-auto border-border border-t pt-4 text-muted-foreground text-xs print:border-slate-300 print:text-slate-500">
						<p>
							I authorize the processing of my personal data contained in my CV in accordance with Article 13 of
							Legislative Decree No. 196 of June 30, 2003 - "Code regarding the protection of personal data" and Article
							13 of GDPR 679/16 - "European Regulation on the protection of personal data".
						</p>
					</footer>
				</div>
			</article>
		</section>
	)
}
