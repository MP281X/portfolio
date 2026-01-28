import { createFileRoute } from '@tanstack/react-router'
import { Array } from 'effect'

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

const summaryLines = [
	'Full-stack TypeScript engineer specializing in React and Effect, building high-performance real-time web applications with end-to-end type safety.',
	'Owns the full delivery lifecycle (architecture, testing, CI/CD, deployment) and improves developer experience through internal tooling.',
	'Builds AI-powered features and workflows (AI coding agents, LLM integrations) and contributes to the TypeScript/React ecosystem.'
]

const keySkills = [
	{
		area: 'Core',
		items: 'TypeScript, React, Effect-TS, Bun, Node.js, TanStack Start'
	},
	{
		area: 'Real-Time',
		items: 'Server-Sent Events (SSE), ElectricSQL, Real-Time Sync'
	},
	{
		area: 'AI',
		items: 'AI coding agents, AI applications, LLM integrations, tooling automation'
	},
	{
		area: 'Experience With',
		items: 'PostgreSQL, Redis, Docker, Kubernetes, GitHub Actions'
	}
]

const workExperience = [
	{
		company: 'Tinexta Cyber',
		role: 'Full-Stack Developer',
		period: 'Oct 2024 - Present',
		location: 'Udine, Italy',
		stack: 'TypeScript, React, Kotlin, Java (Spring Boot, Micronaut), Python, Docker, Kubernetes',
		highlights: [
			'Architected and delivered a real-time network inventory application from scratch - full ownership of architecture, customer requirements, implementation, testing, and deployment.',
			'Led internal knowledge-sharing sessions on Kubernetes and type-safe real-time application patterns, improving team development velocity.',
			'Maintain and extend multiple internal backend services (Kotlin/Java/Python) in production environments.'
		]
	},
	{
		company: 'Altitudo',
		role: 'Frontend Developer',
		period: 'Jan 2024 - Mar 2024',
		location: 'Salzburg, Austria',
		note: 'Internship (Erasmus)',
		stack: 'TypeScript, React, Vite, REST APIs, Tailwind CSS',
		highlights: [
			'Engineered type-safe API client with comprehensive error handling, reducing runtime errors and standardizing data fetching patterns.',
			'Migrated legacy codebase from Create React App to Vite - cut build times and improved developer experience.',
			'Optimized React performance by refactoring class components to hooks and reducing unnecessary re-renders.'
		]
	},
	{
		company: 'Bizaway',
		role: 'Backend Developer',
		period: 'Jun 2023 - Aug 2023',
		location: 'Spilimbergo, Italy',
		note: 'Internship',
		stack: 'TypeScript, Node.js, OpenAPI, PostgreSQL, Docker, Playwright, Angular',
		highlights: [
			'Designed and implemented OpenAPI-first REST APIs with shared TypeScript types, ensuring type safety across Node.js backend and Angular frontend.',
			'Built transactional email workflows with validation, logging, and error handling for booking and approval events.',
			'Implemented Playwright end-to-end tests for critical user paths, preventing regressions in production.'
		]
	},
	{
		company: 'Nordest Servizi',
		role: 'IT Support (Help Desk)',
		period: 'Jan 2022',
		location: 'Tavagnacco, Italy',
		note: 'Internship',
		highlights: ['Provided first-line IT support (Help Desk) and assisted with basic server maintenance tasks.']
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
		level: 'EQF 4',
		highlights: ['Focus: telecommunications, electronics, and networking fundamentals.']
	}
]

const languages = [
	{ language: 'Italian', level: 'Native' },
	{ language: 'English', level: 'C1' },
	{ language: 'Spanish', level: 'Basic' }
]

const selectedProjects = [
	{
		name: 'blixter video',
		description: 'Open source streaming platform prototype focused on clean UX and developer ergonomics.',
		tech: 'TypeScript',
		link: 'github.com/MP281X/blixter_video'
	},
	{
		name: 'kotlin-react-template',
		description: 'Starter template for Kotlin + React projects, set up for fast iteration and consistency.',
		tech: 'TypeScript, Kotlin',
		link: 'github.com/MP281X/kotlin-react-template'
	}
]

type SectionHeadingProps = {
	readonly title: string
}

function SectionHeading(input: SectionHeadingProps) {
	return (
		<div className="mb-2 flex items-center gap-2 print:mb-1.5">
			<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80 print:bg-slate-900" aria-hidden="true" />
			<h2 className="shrink-0 font-bold text-[9.5px] text-foreground uppercase leading-none tracking-[0.2em] print:text-[9px] print:text-slate-800">
				{input.title}
			</h2>
			<div className="h-px flex-1 bg-border/45 print:bg-slate-300" />
		</div>
	)
}

function Page() {
	return (
		<section className="flex h-[calc(100dvh-1.75rem)] w-full select-text items-start justify-center overflow-y-auto px-4 py-8 sm:px-6 print:h-auto print:min-h-0 print:overflow-visible print:px-0 print:py-0">
			<article
				className="mx-auto w-full max-w-[210mm] border border-border/40 bg-card text-foreground shadow-sm print:w-full print:max-w-none print:border-0 print:bg-white print:shadow-none"
				style={{
					fontFamily:
						'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
				}}
			>
				<div className="flex min-h-[297mm] flex-col px-7 py-6 text-[10.2px] leading-[1.45] print:px-[11mm] print:py-[9mm] print:text-[9.6px] print:text-slate-900 print:leading-[1.35]">
					<header className="mb-4 space-y-2 pb-3 print:mb-3.5 print:space-y-2 print:pb-2.5">
						<div className="space-y-1">
							<h1 className="font-black text-[26px] text-foreground leading-none tracking-[0.06em] print:text-[23px] print:text-slate-950">
								{headerInfo.name}
							</h1>
							<p className="font-semibold text-[13px] text-foreground/85 tracking-[0.015em] print:text-[12px] print:text-slate-800">
								{headerInfo.title}
							</p>
						</div>
						<div className="mt-2 space-y-1 text-[9.5px] text-muted-foreground leading-[1.35] print:mt-1.5 print:space-y-0.5 print:text-[8.8px] print:text-slate-700">
							<div className="flex flex-wrap items-center gap-y-1">
								{[headerInfo.location, headerInfo.phone, headerInfo.email, headerInfo.portfolio, headerInfo.github].map(
									(item, index) => (
										<span key={item} className="flex items-center">
											{index > 0 && (
												<span className="mx-2 text-muted-foreground/70 print:text-slate-400" aria-hidden="true">
													|
												</span>
											)}
											{item}
										</span>
									)
								)}
							</div>
						</div>
					</header>

					<div className="flex flex-1 flex-col gap-6 print:gap-4">
						<section className="space-y-2.5 print:space-y-1.5">
							<SectionHeading title="Professional Summary" />
							<div className="space-y-1.5 text-muted-foreground leading-normal print:space-y-0 print:text-slate-700 print:leading-[1.38]">
								{summaryLines.map(line => (
									<p key={line}>{line}</p>
								))}
							</div>
						</section>

						<section className="space-y-2.5 print:space-y-1.5">
							<SectionHeading title="Key Skills" />
							<ul className="grid grid-cols-1 gap-x-8 gap-y-1.25 text-[10px] text-muted-foreground leading-[1.35] sm:grid-cols-2 print:grid-cols-2 print:gap-y-1 print:text-[9.3px] print:text-slate-700 print:leading-tight">
								{keySkills.map(skill => (
									<li key={skill.area} className="flex items-start gap-2">
										<span
											className="mt-[0.5em] h-0.75 w-0.75 shrink-0 rounded-full bg-foreground/35 print:bg-slate-400"
											aria-hidden="true"
										/>
										<span>
											<span className="font-semibold text-foreground print:text-slate-900">{skill.area}:</span>{' '}
											{skill.items}
										</span>
									</li>
								))}
							</ul>
						</section>

						<section className="space-y-2.5 print:space-y-1.5">
							<SectionHeading title="Work Experience" />
							<div className="space-y-4 print:space-y-2.25">
								{workExperience.map(job => (
									<div key={job.company} className="space-y-1.5 print:space-y-1">
										<div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-5 gap-y-1">
											<div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
												<span className="font-bold text-[10.75px] text-foreground uppercase tracking-[0.05em] print:text-[10.2px] print:text-slate-950">
													{job.company}
												</span>
												<span className="text-muted-foreground/40 print:text-slate-300" aria-hidden="true">
													-
												</span>
												<span className="font-semibold text-foreground print:text-slate-900">{job.role}</span>
												{job.note && (
													<span className="text-[8.5px] text-muted-foreground/60 print:text-[8px] print:text-slate-400">
														({job.note})
													</span>
												)}
											</div>
											<div className="flex items-baseline justify-end gap-2 text-[9.2px] text-muted-foreground tabular-nums print:text-[8.8px] print:text-slate-600">
												<span>{job.location}</span>
												<span className="text-muted-foreground/30 print:text-slate-300">|</span>
												<span className="whitespace-nowrap font-semibold text-foreground print:text-slate-900">
													{job.period}
												</span>
											</div>
										</div>
										{job.stack && (
											<div className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-2 pl-2 text-[9px] text-muted-foreground leading-[1.4] print:text-[8.6px] print:text-slate-600 print:leading-[1.26]">
												<span className="font-semibold text-foreground print:text-slate-900">Stack:</span>
												<span>{job.stack}</span>
											</div>
										)}
										{Array.isNonEmptyArray(job.highlights) && (
											<ul className="space-y-1.25 pl-2 text-muted-foreground leading-[1.42] print:space-y-1 print:text-slate-700 print:leading-[1.3]">
												{job.highlights.map(highlight => (
													<li key={highlight} className="flex items-start gap-2">
														<span className="mt-[0.5em] h-0.75 w-0.75 shrink-0 rounded-full bg-foreground/35 print:bg-slate-400" />
														<span className="text-[10px] print:text-[9.4px]">{highlight}</span>
													</li>
												))}
											</ul>
										)}
									</div>
								))}
							</div>
						</section>

						<section className="space-y-2.5 print:space-y-1.5">
							<SectionHeading title="Projects" />
							<div className="space-y-2.5 print:space-y-2">
								{selectedProjects.map(project => (
									<div key={project.name} className="space-y-1 print:space-y-0.75">
										<div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
											<span className="font-semibold text-foreground print:text-slate-950">{project.name}</span>
											<span className="text-[9.2px] text-muted-foreground/80 print:text-[8.8px] print:text-slate-600">
												{project.link}
											</span>
										</div>
										<ul className="space-y-1 pl-2 text-muted-foreground leading-[1.35] print:space-y-0.75 print:text-slate-700 print:leading-[1.22]">
											<li className="flex items-start gap-2">
												<span className="mt-[0.5em] h-0.75 w-0.75 shrink-0 rounded-full bg-foreground/35 print:bg-slate-400" />
												<span className="text-[10px] print:text-[9.4px]">{project.description}</span>
											</li>
											<li className="flex items-start gap-2">
												<span className="mt-[0.5em] h-0.75 w-0.75 shrink-0 rounded-full bg-foreground/35 print:bg-slate-400" />
												<span className="text-[10px] print:text-[9.4px]">
													<span className="font-semibold text-foreground print:text-slate-900">Tech Stack:</span>{' '}
													{project.tech}
												</span>
											</li>
										</ul>
									</div>
								))}
							</div>
						</section>

						<section className="space-y-2.5 print:space-y-1.5">
							<SectionHeading title="Languages" />
							<ul className="space-y-1 pl-2 text-[10px] text-muted-foreground leading-[1.35] print:space-y-0.75 print:text-[9.4px] print:text-slate-700 print:leading-tight">
								{languages.map(entry => (
									<li key={entry.language} className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4">
										<div className="flex items-start gap-2">
											<span className="mt-[0.5em] h-0.75 w-0.75 shrink-0 rounded-full bg-foreground/35 print:bg-slate-400" />
											<span className="min-w-0 text-[10px] print:text-[9.4px]">
												<span className="font-semibold text-foreground print:text-slate-900">{entry.language}</span>
											</span>
										</div>
										<span className="text-[10px] text-muted-foreground print:text-[9.4px] print:text-slate-600">
											{entry.level}
										</span>
									</li>
								))}
							</ul>
						</section>

						<section className="space-y-2.5 print:space-y-1.5">
							<SectionHeading title="Education" />
							<div className="space-y-2 print:space-y-1.5">
								{education.map(entry => (
									<div key={entry.school} className="space-y-1 print:space-y-0.5">
										<div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-5 gap-y-1">
											<div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
												<span className="font-semibold text-foreground print:text-slate-950">{entry.school}</span>
												<span className="text-muted-foreground/30 print:text-slate-300">-</span>
												<span className="text-muted-foreground print:text-slate-700">{entry.degree}</span>
												<span className="text-[9px] text-muted-foreground/80 print:text-[8.5px] print:text-slate-600">
													({entry.grade})
												</span>
											</div>
											<div className="flex items-baseline justify-end gap-2 text-[9.2px] text-muted-foreground tabular-nums print:text-[8.8px] print:text-slate-600">
												<span>{entry.period}</span>
												<span className="text-muted-foreground/30 print:text-slate-300">|</span>
												<span className="whitespace-nowrap font-semibold text-foreground print:text-slate-900">
													{entry.level}
												</span>
											</div>
										</div>
										{Array.isNonEmptyArray(entry.highlights) && (
											<ul className="space-y-1 pl-2 text-muted-foreground leading-[1.35] print:space-y-0.5 print:text-slate-700 print:leading-[1.22]">
												{entry.highlights.map(highlight => (
													<li key={highlight} className="flex items-start gap-2">
														<span className="mt-[0.5em] h-0.75 w-0.75 shrink-0 rounded-full bg-foreground/35 print:bg-slate-400" />
														<span className="text-[10px] print:text-[9.4px]">{highlight}</span>
													</li>
												))}
											</ul>
										)}
									</div>
								))}
							</div>
						</section>
						<div className="h-4 print:hidden" />
					</div>

					<footer className="mt-auto border-border/30 border-t pt-4 print:border-slate-200 print:pt-2.5">
						<p className="text-[8.5px] text-muted-foreground/60 leading-relaxed print:text-[8px] print:text-slate-400">
							I authorize the processing of personal data present in the CV according to the ‌General data protection
							regulation 679/2016.
						</p>
					</footer>
				</div>
			</article>
		</section>
	)
}
