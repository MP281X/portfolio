import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(home)/cv')({
	component: Page,
	ssr: true
})

const headerInfo = {
	name: 'PALUDGNACH MATTEO',
	title: 'Full-Stack TypeScript Engineer - React, Effect, Real-Time Systems',
	location: 'Moimacco (UD), Italy',
	phone: '+39 3518853376',
	email: 'paludgnachmatteo.dev@gmail.com',
	portfolio: 'portfolio.mp281x.xyz',
	github: 'github.com/MP281X'
}

const contactPrimary = [headerInfo.location, headerInfo.phone, headerInfo.email]
const contactSecondary = [headerInfo.portfolio, headerInfo.github]

const summaryLines = [
	'Full-stack TypeScript engineer specialized in React and Effect, building highly performant real-time web applications and simplifying complex systems into scalable, maintainable architectures.',
	'Owns the full lifecycle of products and internal tooling while enforcing end-to-end type safety and leveraging AI coding agents to ship production-grade TypeScript/React faster, with fewer bugs and better developer experience.'
]

const keySkills = [
	'Core stack: TypeScript, React, Effect, Node.js, Kotlin, Java (Spring Boot, Micronaut), Python, WebSockets, REST APIs',
	'Data & infra: PostgreSQL, Redis, MongoDB, real-time systems, Docker, Kubernetes, CI/CD, GitHub Actions',
	'DX & AI: end-to-end type safety, monorepos, refactoring legacy systems, performance optimization, prompt engineering, AI coding agents, multi-agent orchestration, tool-calling'
]

const workExperience = [
	{
		company: 'Tinexta Cyber',
		role: 'Full-Stack Developer',
		period: 'Oct 2024 - Present',
		location: 'Udine, Italy',
		stack: 'Kotlin, Java (Spring Boot, Micronaut), Python, TypeScript, React, Docker, Kubernetes',
		highlights: [
			'Worked on multiple internal full-stack applications, mainly backend services in Kotlin/Java and Python, delivering new features and fixes in existing systems within small/medium-sized teams.',
			'Designed and delivered a real-time network inventory application (Kotlin backend + TypeScript/React frontend), owning architecture, planning with the external customer, implementation, testing, deployment, and handover.',
			'Gave internal presentations on Kubernetes and on building full-stack type-safe, high-performance real-time applications, sharing patterns and best practices with other developers.'
		]
	},
	{
		company: 'Altitudo',
		role: 'Frontend Developer',
		period: 'Jan 2024 - Mar 2024',
		location: 'Salzburg, Austria',
		note: 'Internship, Erasmus',
		stack: 'TypeScript, React, Vite, REST APIs, Tailwind CSS',
		highlights: [
			'Built a reusable Fetch wrapper with typed responses and error handling to standardize API access and improve type safety.',
			'Migrated the project from Create React App to Vite, improving local build times and hot reload speed.',
			'Refactored class components to hooks and trimmed re-render paths to improve UI responsiveness.'
		]
	},
	{
		company: 'Bizaway',
		role: 'Backend Developer',
		period: 'Jun 2023 - Aug 2023',
		location: 'Spilimbergo, Italy',
		note: 'Internship',
		stack: 'Node.js, TypeScript, Angular, OpenAPI, PostgreSQL, Playwright, Docker',
		highlights: [
			'Implemented OpenAPI-first endpoints in Node.js with shared TypeScript types to keep contracts aligned with the Angular client.',
			'Built transactional email flows for booking and approval events, including templating, validation, and logging.',
			'Added Playwright end-to-end tests for critical travel workflows to catch regressions before release.'
		]
	},
	{
		company: 'Nordest Servizi',
		role: 'System Engineer',
		period: 'Jan 2022',
		location: 'Tavagnacco, Italy',
		note: 'Internship'
	}
]

const education = [
	{
		school: 'ITS Alto Adriatico',
		degree: 'Tecnico Superiore Cloud Developer',
		grade: '95/100',
		period: '2022 - 2024',
		level: 'EQF 5',
		highlights: ['Focus: cloud-native architectures, CI/CD, containerization, and full-stack web applications.']
	},
	{
		school: 'ISIS A. Malignani',
		degree: 'IT and Telecommunications Diploma',
		grade: '68/100',
		period: '2017 - 2022',
		level: 'EQF 4'
	}
]

const languages = 'Italian (Native), English (C1)'

const extras = [
	'Active in the TypeScript and React ecosystem, continuously refining AI-assisted development workflows.'
]

const keywords =
	'Full-stack development, TypeScript, React, Effect, Node.js, WebSockets, REST APIs, PostgreSQL, Redis, MongoDB, real-time systems, monorepos, CI/CD, GitHub Actions, Docker, observability, distributed tracing, developer experience, end-to-end type safety, prompt engineering, AI coding agents, multi-agent orchestration'

type SectionHeadingProps = {
	readonly title: string
}

function SectionHeading(input: SectionHeadingProps) {
	return (
		<div className="flex items-center gap-2.5">
			<h2 className="shrink-0 font-semibold text-[9.5px] text-foreground/90 uppercase leading-none tracking-[0.18em] print:text-[9px] print:text-slate-700">
				{input.title}
			</h2>
			<div className="h-px flex-1 bg-border/35 print:bg-slate-200" />
		</div>
	)
}

function ContactSeparator() {
	return (
		<span className="mx-2 text-muted-foreground/30 print:text-slate-300" aria-hidden="true">
			|
		</span>
	)
}

function Page() {
	return (
		<section className="flex h-[calc(100dvh-1.75rem)] w-full select-text items-start justify-center overflow-y-auto px-4 py-8 sm:px-6 print:h-auto print:min-h-0 print:overflow-visible print:px-0 print:py-0">
			<article className="mx-auto w-full max-w-[210mm] border border-border/40 bg-card text-[10.5px] text-foreground leading-[1.45] shadow-sm print:w-full print:max-w-none print:border-0 print:bg-white print:text-[10px] print:text-slate-900 print:leading-[1.35] print:shadow-none">
				<div className="flex h-full flex-col px-8 py-7 print:px-[14mm] print:py-[12mm]">
					<header className="mb-4 space-y-2.5 pb-3 print:mb-3 print:pb-2.5">
						<div className="space-y-1">
							<h1 className="font-bold text-[26px] leading-none tracking-[0.08em] print:text-[24px]">
								{headerInfo.name}
							</h1>
							<p className="font-medium text-[13px] tracking-[0.03em] print:text-[12px]">{headerInfo.title}</p>
						</div>
						<div className="flex flex-wrap items-center gap-y-1 text-[9.5px] text-muted-foreground/90 leading-[1.45] print:text-[9px] print:text-slate-600">
							{contactPrimary.map((item, index) => (
								<span key={item} className="flex items-center">
									{index > 0 && <ContactSeparator />}
									{item}
								</span>
							))}
						</div>
						<div className="flex flex-wrap items-center gap-y-1 text-[9.5px] text-muted-foreground/90 leading-[1.45] print:text-[9px] print:text-slate-600">
							{contactSecondary.map((item, index) => (
								<span key={item} className="flex items-center">
									{index > 0 && <ContactSeparator />}
									{item}
								</span>
							))}
						</div>
					</header>

					<div className="flex flex-1 flex-col gap-3.5 print:gap-3">
						<section className="space-y-2">
							<SectionHeading title="Professional Summary" />
							<div className="space-y-1 text-muted-foreground leading-normal print:text-slate-600">
								{summaryLines.map(line => (
									<p key={line}>{line}</p>
								))}
							</div>
						</section>

						<section className="space-y-2">
							<SectionHeading title="Key Skills" />
							<ul className="space-y-1 pl-1 text-muted-foreground leading-normal print:text-slate-600">
								{keySkills.map(skill => (
									<li key={skill} className="flex items-start gap-2">
										<span className="mt-[0.45em] h-0.75 w-0.75 shrink-0 rounded-full bg-foreground/25 print:bg-slate-400" />
										<span>{skill}</span>
									</li>
								))}
							</ul>
						</section>

						<section className="space-y-2">
							<SectionHeading title="Work Experience" />
							<div className="space-y-2">
								{workExperience.map(job => (
									<div key={job.company} className="space-y-1">
										<div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-0.5">
											<div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
												<span className="font-semibold uppercase tracking-[0.04em]">{job.company}</span>
												{job.note && (
													<span className="text-[8.5px] text-muted-foreground/55 print:text-[8px] print:text-slate-400">
														({job.note})
													</span>
												)}
												<span className="text-muted-foreground/30 print:text-slate-300">-</span>
												<span className="text-muted-foreground print:text-slate-600">{job.role}</span>
											</div>
											<div className="flex items-baseline justify-end gap-2 text-[9.5px] text-muted-foreground/80 print:text-[9px] print:text-slate-500">
												<span className="font-medium text-foreground/75 print:text-slate-700">{job.period}</span>
												<span className="text-muted-foreground/30 print:text-slate-300">|</span>
												<span>{job.location}</span>
											</div>
										</div>
										{job.stack ? (
											<p className="text-[9.5px] text-muted-foreground/80 leading-[1.45] print:text-[9px] print:text-slate-500">
												<span className="font-medium text-foreground/70 print:text-slate-600">Stack:</span> {job.stack}
											</p>
										) : null}
										{job.highlights?.length ? (
											<ul className="space-y-1 pl-1 text-muted-foreground leading-normal print:text-slate-600">
												{job.highlights.map(highlight => (
													<li key={highlight} className="flex items-start gap-2">
														<span className="mt-[0.45em] h-0.75 w-0.75 shrink-0 rounded-full bg-foreground/25 print:bg-slate-400" />
														<span>{highlight}</span>
													</li>
												))}
											</ul>
										) : null}
									</div>
								))}
							</div>
						</section>

						<section className="space-y-2">
							<SectionHeading title="Education" />
							<div className="space-y-2">
								{education.map(entry => (
									<div key={entry.school} className="space-y-1">
										<div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-0.5">
											<div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
												<span className="font-semibold">{entry.school}</span>
												<span className="text-muted-foreground/30 print:text-slate-300">-</span>
												<span className="text-muted-foreground print:text-slate-600">{entry.degree}</span>
												<span className="text-[9px] text-muted-foreground/60 print:text-[8.5px] print:text-slate-400">
													({entry.grade})
												</span>
											</div>
											<div className="flex items-baseline justify-end gap-2 text-[9.5px] text-muted-foreground/80 print:text-[9px] print:text-slate-500">
												<span className="font-medium text-foreground/75 print:text-slate-700">{entry.period}</span>
												<span className="text-muted-foreground/30 print:text-slate-300">|</span>
												<span>{entry.level}</span>
											</div>
										</div>
										{entry.highlights?.length ? (
											<ul className="space-y-1 pl-1 text-muted-foreground leading-normal print:text-slate-600">
												{entry.highlights.map(highlight => (
													<li key={highlight} className="flex items-start gap-2">
														<span className="mt-[0.45em] h-0.75 w-0.75 shrink-0 rounded-full bg-foreground/25 print:bg-slate-400" />
														<span>{highlight}</span>
													</li>
												))}
											</ul>
										) : null}
									</div>
								))}
							</div>
						</section>

						<section className="space-y-2">
							<SectionHeading title="Languages & Extras" />
							<div className="space-y-1 text-muted-foreground leading-normal print:text-slate-600">
								<p>
									<span className="font-medium text-foreground/70 print:text-slate-600">Languages:</span> {languages}
								</p>
								<p>
									<span className="font-medium text-foreground/70 print:text-slate-600">Extras:</span>{' '}
									{extras.join(' ')}
								</p>
							</div>
						</section>

						<section className="space-y-2">
							<SectionHeading title="Keywords" />
							<p className="text-muted-foreground leading-normal print:text-slate-600">Keywords: {keywords}</p>
						</section>
					</div>

					<footer className="mt-auto border-border/30 border-t pt-3 print:border-slate-200 print:pt-2.5">
						<p className="text-[8.5px] text-muted-foreground/60 leading-relaxed print:text-[8px] print:text-slate-400">
							I authorize the processing of my personal data in accordance with Legislative Decree 196/2003 and EU
							Regulation 679/2016 (GDPR).
						</p>
					</footer>
				</div>
			</article>
		</section>
	)
}
