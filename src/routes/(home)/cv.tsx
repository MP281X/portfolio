import { createFileRoute } from '@tanstack/react-router'
import { Array, Function } from 'effect'

export const Route = createFileRoute('/(home)/cv')({
	component: Page,
	ssr: true,
	head: Function.constant({
		meta: [{ title: 'PALUDGNACH MATTEO - Curriculum Vitae' }]
	})
})

const headerInfo = {
	name: 'PALUDGNACH MATTEO',
	title: 'Full-Stack TypeScript Engineer - React, Effect, Real-Time',
	location: 'Moimacco (UD), Italy',
	phone: '+39 3518853376',
	email: 'paludgnachmatteo.dev@gmail.com',
	portfolio: 'portfolio.mp281x.xyz',
	github: 'github.com/MP281X'
}

const summaryLines = [
	'Full-stack TypeScript engineer specializing in React and Effect-TS, designing and shipping production-grade web apps with end-to-end type safety and real-time capabilities.',
	'Owns the full SDLC: gathers stakeholder requirements, defines architecture, implements features, writes automated tests, and manages CI/CD + Kubernetes deployments.',
	'Improves developer experience through internal tooling and automation (GitHub Actions, Docker, Kubernetes) and contributes to open-source TypeScript/React projects; exploring AI coding agents and LLM integrations.'
]

const keySkills = [
	{
		area: 'Core',
		items: 'TypeScript, React, TanStack Start/Router, Vite, Bun, Node.js'
	},
	{
		area: 'Functional TS',
		items: 'Effect / Effect-TS (Schema, Layer), effect-atom (React state), typed error handling'
	},
	{
		area: 'Cloud & DevOps',
		items: 'Docker, Kubernetes, GitHub Actions, CI/CD, Nginx'
	},
	{
		area: 'Data & Real-Time',
		items: 'PostgreSQL, Redis, Server-Sent Events (SSE), ElectricSQL, real-time sync'
	}
]

const workExperience = [
	{
		company: 'Tinexta Cyber',
		role: 'Full-Stack Developer',
		period: 'Oct 2024 - Present',
		location: 'Udine, Italy',
		stack: 'TypeScript, React, Effect, effect-atom, Kotlin, Java (Spring Boot, Micronaut), Python, Docker, Kubernetes',
		highlights: [
			'Owned end-to-end delivery of a real-time network inventory web app (requirements, architecture, implementation, testing, and production rollout).',
			'Built the frontend in React + Effect (Effect-TS) + effect-atom, modeling async workflows and application state with typed error handling for API/data flows.',
			'Containerized and deployed services to Kubernetes; contributed to CI/CD pipelines and deployment automation.',
			'Maintain and extend production services across Kotlin/Java/Python codebases, collaborating with cross-functional stakeholders.'
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
			'Built a type-safe API client layer (typed endpoints, consistent error mapping) adopted across the frontend to standardize data fetching.',
			'Migrated the codebase from Create React App to Vite, improving build speed and local iteration loops.',
			'Improved rendering performance by refactoring to hooks and removing unnecessary re-renders in core screens.'
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
			'Shipped OpenAPI-first REST endpoints with generated TypeScript types shared across Node.js backend and Angular frontend.',
			'Implemented transactional email workflows with validation, structured logging, and failure handling for booking and approval events.',
			'Added Playwright end-to-end coverage for critical flows, increasing release confidence and preventing regressions.'
		]
	}
]

const education = [
	{
		school: 'ITS Alto Adriatico',
		degree: 'Tecnico Superiore Cloud Developer',
		grade: '95/100',
		period: '2022 - 2024',
		level: 'EQF 5 (Short-cycle tertiary)',
		highlights: [
			'2-year post-secondary program focused on cloud-native architectures, CI/CD, containerization, and full-stack web applications.'
		]
	},
	{
		school: 'ISIS A. Malignani',
		degree: 'High School Diploma - IT and Telecommunications',
		period: '2017 - 2022',
		level: 'EQF 4',
		highlights: ['Covered telecommunications, electronics, and networking fundamentals.']
	}
]

const languages = [
	{ language: 'Italian', level: 'Native' },
	{ language: 'English', level: 'C1' },
	{ language: 'Spanish', level: 'Basic' }
]

const selectedProjects = [
	{
		name: 'portfolio.mp281x.xyz',
		description:
			'SSR portfolio and print-ready CV as code, with a terminal-style UI and a focus on maintainability and type safety.',
		tech: 'React 19, TypeScript, TanStack Start/Router, Effect, Tailwind CSS, Vite, Docker',
		link: 'github.com/MP281X/portfolio'
	},
	{
		name: 'kotlin-react-template',
		description:
			'Monorepo starter with React frontend + Kotlin/Spring backend; one-command local dev setup (Docker services, migrations, OpenAPI/DB codegen, TLS proxy).',
		tech: 'React 19, TypeScript, Kotlin, Spring Boot, Postgres, ElectricSQL, Bun, Turbo, Docker, Nginx',
		link: 'github.com/MP281X/kotlin-react-template'
	},
	{
		name: 'Blixter Video',
		description:
			'Open-source streaming platform built as a TypeScript monorepo; backend on Bun + SvelteKit frontend, deployed on a self-hosted k3s cluster.',
		tech: 'TypeScript, Bun, SvelteKit, PostgreSQL, Redis (cache/pub-sub/queues), MinIO (S3), Kubernetes (k3s)',
		link: 'github.com/MP281X/blixter_video'
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
							<ul className="grid grid-cols-1 gap-y-1.25 text-[10px] text-muted-foreground leading-[1.35] print:gap-y-1 print:text-[9.3px] print:text-slate-700 print:leading-tight">
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
										<span className="font-semibold text-[10px] text-foreground print:text-[9.4px] print:text-slate-900">
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
												{entry.grade && (
													<span className="text-[9px] text-muted-foreground/80 print:text-[8.5px] print:text-slate-600">
														({entry.grade})
													</span>
												)}
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
