import {
	SiBun,
	SiDocker,
	SiFlutter,
	SiGithubactions,
	SiGo,
	SiKubernetes,
	SiMongodb,
	SiPostgresql,
	SiReact,
	SiRedis,
	SiSvelte,
	SiTailwindcss,
	SiTypescript
} from '@icons-pack/react-simple-icons'
import { createFileRoute } from '@tanstack/react-router'
import { Workflow } from 'lucide-react'
import { Badge } from '@/components/ui/badge.tsx'
import { Separator } from '@/components/ui/separator.tsx'

export const Route = createFileRoute('/(home)/skills')({
	component: Page,
	ssr: true
})

const currentStack = [
	{ name: 'React', icon: SiReact },
	{ name: 'TypeScript', icon: SiTypescript },
	{ name: 'Bun', icon: SiBun },
	{ name: 'PostgreSQL', icon: SiPostgresql },
	{ name: 'Redis', icon: SiRedis },
	{ name: 'Effect-TS', icon: Workflow },
	{ name: 'Docker', icon: SiDocker },
	{ name: 'Kubernetes', icon: SiKubernetes },
	{ name: 'GitHub Actions', icon: SiGithubactions },
	{ name: 'Tailwind', icon: SiTailwindcss }
]

const previousStack = [
	{ name: 'Svelte', icon: SiSvelte },
	{ name: 'Flutter', icon: SiFlutter },
	{ name: 'Go', icon: SiGo },
	{ name: 'MongoDB', icon: SiMongodb }
]

function Page() {
	return (
		<section className="mx-auto flex h-full max-w-2xl flex-col justify-center px-6 py-8">
			<div className="space-y-6">
				<div>
					<h2 className="mb-4 font-semibold text-lg">Current Stack</h2>
					<div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
						{currentStack.map(skill => (
							<div
								key={skill.name}
								className="flex items-center gap-2 border border-border bg-card p-3 transition-colors hover:bg-accent"
							>
								<skill.icon className="size-5 text-primary" />
								<span className="font-medium text-sm">{skill.name}</span>
							</div>
						))}
					</div>
				</div>

				<Separator />

				<div>
					<h2 className="mb-4 font-semibold text-lg text-muted-foreground">Previously Used</h2>
					<div className="flex flex-wrap gap-2">
						{previousStack.map(skill => (
							<Badge key={skill.name} variant="outline" className="gap-1.5">
								<skill.icon className="size-3" />
								{skill.name}
							</Badge>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
