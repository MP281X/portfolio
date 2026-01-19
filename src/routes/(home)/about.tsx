import { createFileRoute } from '@tanstack/react-router'
import { BookOpen, Cpu, Globe, Server, Terminal } from 'lucide-react'

export const Route = createFileRoute('/(home)/about')({
	component: Page,
	ssr: true
})

const nowItems = [
	{ label: 'Studying', description: 'Effect-TS for type-safe, composable systems', icon: BookOpen },
	{ label: 'Building', description: 'This portfolio with React 19 + shadcn', icon: Globe }
]

const experiences = [
	{ role: 'Full-Stack Developer', focus: 'Real-time apps, React/Bun/Effect', period: '2022 - Present', icon: Terminal },
	{ role: 'DevOps Engineer', focus: 'Docker, Kubernetes, CI/CD', period: '2021 - Present', icon: Server },
	{ role: 'AI/Prompt Engineer', focus: 'AI agents, coding assistants', period: '2023 - Present', icon: Cpu }
]

function Page() {
	return (
		<section className="mx-auto flex h-full max-w-2xl flex-col justify-center px-6 py-8">
			<div className="space-y-8">
				<div>
					<h2 className="mb-4 font-semibold text-muted-foreground text-sm">{'// now'}</h2>
					<div className="space-y-3">
						{nowItems.map(item => (
							<div key={item.label} className="flex items-start gap-3">
								<item.icon className="mt-0.5 size-4 text-primary" />
								<div>
									<span className="font-medium text-sm">{item.label}</span>
									<span className="text-muted-foreground text-sm"> - {item.description}</span>
								</div>
							</div>
						))}
					</div>
				</div>

				<div>
					<h2 className="mb-4 font-semibold text-muted-foreground text-sm">{'// experience'}</h2>
					<div className="space-y-3">
						{experiences.map(exp => (
							<div key={exp.role} className="flex items-start gap-3">
								<exp.icon className="mt-0.5 size-4 text-primary" />
								<div className="flex-1">
									<div className="flex items-center justify-between gap-2">
										<span className="font-medium text-sm">{exp.role}</span>
										<span className="text-muted-foreground text-xs">{exp.period}</span>
									</div>
									<p className="text-muted-foreground text-xs">{exp.focus}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
