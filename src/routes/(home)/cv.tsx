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
	name: 'MATTEO PALUDGNACH',
	title: 'Full-Stack TypeScript Developer | React, Effect-TS, Node.js, PostgreSQL',
	location: 'Moimacco (UD), Italy',
	phone: '+39 351 885 3376',
	email: 'paludgnachmatteo.dev@gmail.com',
	portfolio: 'portfolio.mp281x.xyz',
	github: 'github.com/MP281X'
}

const summaryLines = [
	'Full-stack TypeScript developer with production experience building real-time, type-safe web applications using React, Node.js, and PostgreSQL.',
	'Delivers features end-to-end from gathering user requirements to deploying containerized services in fast-paced, cross-functional teams.',
	'Uses AI coding agents daily to accelerate development, refactoring, and testing while while enforcing manual code review to maintain consistency and code quality.'
]

const technicalSkills = [
	{
		area: 'Frontend',
		items:
			'React, TypeScript, TanStack (Router, Table, Form), Tailwind CSS, Responsive Design, Performance Optimization'
	},
	{
		area: 'Backend',
		items: 'Node.js, Effect-TS (functional TypeScript library), RESTful API, OpenAPI'
	},
	{
		area: 'Data and Real-Time',
		items: 'PostgreSQL, Redis, WebSockets, SSE (server-sent events)'
	},
	{
		area: 'DevOps',
		items: 'Docker, GitHub Actions, Git, Linux'
	},
	{
		area: 'Testing',
		items: 'End-to-end testing, Unit testing, Type-safe APIs'
	},
	{
		area: 'AI Tooling',
		items: 'AI coding agents, AI-assisted code review, Prompt engineering for development workflows'
	}
]

const workExperience = [
	{
		company: 'Tinexta Cyber',
		role: 'Full-Stack Developer',
		period: 'October 2024 - Present',
		location: 'Udine, Italy',
		highlights: [
			'Developed a real-time network inventory application for a major telecommunications company to track devices and cabling across 2+ datacenters.',
			'Built the real-time frontend in React with ElectricSQL, enabling real-time updates across all connected users without manual page refreshes.',
			'Implemented a custom type-safe RPC-like client in TypeScript by generating shared types from the Kotlin backend OpenAPI schema, remiving any frontend-backend integration bugs.',
			'Gathered requirements directly from end users when the product specifications did not match their workflow, iterated through multiple feedback rounds to align the product with their workflow.',
			'Containerized and deployed multiple services using Docker on Linux virtual machines and configured Jenkins CI/CD pipelines, reducing manual deployment steps for 2 projects.',
			'Used AI coding agents with project-specific guidelines to accelerate feature development and large-scale refactors, reviewing all generated output to maintain code quality and consistency.',
			'Worked across 3+ projects with different tech stacks (TypeScript, Kotlin with Spring Boot and Micronaut, Python) and different team sizes, adapting quickly to each codebase.'
		]
	},
	{
		company: 'Altitudo',
		role: 'Frontend Developer',
		period: 'January 2024 - March 2024',
		location: 'Salzburg, Austria',
		note: 'Erasmus Internship',
		highlights: [
			'Migrated the build system from Create React App to Vite, reducing build times and improving the local development feedback loop for the entire team.',
			'Improved rendering performance by adding proper memoization and removing expensive re-renders in core screens, resulting in noticeably faster page interactions.',
			'Migrated legacy class components to modern functional components using the React hooks, making the codebase easier to read and maintain.',
			'Recreated and restyled multiple pages using React and Tailwind CSS to match the updated design system.'
		]
	},
	{
		company: 'BizAway',
		role: 'Backend Developer',
		period: 'June 2023 - August 2023',
		location: 'Spilimbergo, Italy',
		note: 'Internship',
		highlights: [
			'Developed a type-safe end-to-end testing framework on top of the existing OpenAPI schema using Playwright, catching multiple subtle API bugs and making it significantly easier to add tests for new endpoints.',
			'Built a type-safe email template framework using TSX-style components, enabling both developers and non-developers to create and reuse email templates with strong typing on input data.',
			'Migrated API endpoints from the old OpenAPI version to the new specification and updated all related tests in TypeScript and Node.js.',
			'Built and updated multiple Angular components and features of the main product based on the new requirements.'
		]
	}
]

const education = [
	{
		school: 'ITS Alto Adriatico',
		degree: 'Cloud Developer Diploma',
		grade: '95/100',
		period: '2022 - 2024',
		highlights: [
			'Two-year post-secondary program focused on cloud-native architectures, Continuous Integration/Continuous Deployment (CI/CD), containerization with Docker and Kubernetes, and full-stack web application development.'
		]
	},
	{
		school: 'ISIS A. Malignani',
		degree: 'High School Diploma - IT and Telecommunications',
		period: '2017 - 2022',
		highlights: ['Covered telecommunications, electronics, networking fundamentals, and programming foundations.']
	}
]

const languages = [
	{ language: 'Italian', level: 'Native' },
	{ language: 'English', level: 'C1' },
	{ language: 'Spanish', level: 'Basic' }
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
							<SectionHeading title="Technical Skills" />
							<ul className="grid grid-cols-1 gap-y-1.25 text-[10px] text-muted-foreground leading-[1.35] print:gap-y-1 print:text-[9.3px] print:text-slate-700 print:leading-tight">
								{technicalSkills.map(skill => (
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
														{job.note}
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
											<div className="text-[9.2px] text-muted-foreground tabular-nums print:text-[8.8px] print:text-slate-600">
												{entry.period}
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
							I authorize the processing of personal data present in this CV according to the General Data Protection
							Regulation 679/2016.
						</p>
					</footer>
				</div>
			</article>
		</section>
	)
}
