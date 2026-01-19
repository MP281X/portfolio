import { SiBun, SiGithub, SiPostgresql, SiReact, SiRedis, SiTypescript, SiX } from '@icons-pack/react-simple-icons'
import { createFileRoute } from '@tanstack/react-router'
import { Mail, Workflow } from 'lucide-react'
import { Badge } from '@/components/ui/badge.tsx'

export const Route = createFileRoute('/(home)/')({
	component: Page,
	ssr: true
})

const profile = {
	name: 'Matteo Paludgnach',
	role: 'Full-Stack Developer',
	location: 'Italy',
	age: 22,
	tagline: 'Building performant, real-time experiences'
}

const skills = [
	{ name: 'React', icon: SiReact },
	{ name: 'TypeScript', icon: SiTypescript },
	{ name: 'Bun', icon: SiBun },
	{ name: 'PostgreSQL', icon: SiPostgresql },
	{ name: 'Redis', icon: SiRedis },
	{ name: 'Effect-TS', icon: Workflow }
]

const socialLinks = [
	{ name: 'GitHub', url: 'https://github.com/mp281x', icon: SiGithub },
	{ name: 'X', url: 'https://x.com/mp281x', icon: SiX },
	{ name: 'Email', url: 'mailto:matteo@example.com', icon: Mail }
]

function Page() {
	return (
		<section className="mx-auto flex h-full max-w-2xl flex-col justify-center px-6 py-8">
			<div className="space-y-6">
				<div>
					<h1 className="font-bold text-3xl tracking-tight">{profile.name}</h1>
					<p className="mt-1 text-lg text-muted-foreground">
						{profile.age} • {profile.location} • {profile.role}
					</p>
				</div>

				<p className="border-primary border-l-2 pl-4 text-muted-foreground text-sm">{profile.tagline}</p>

				<div className="flex flex-wrap gap-2">
					{skills.map(skill => (
						<Badge key={skill.name} variant="secondary" className="gap-1.5">
							<skill.icon className="size-3" />
							{skill.name}
						</Badge>
					))}
				</div>

				<div className="flex items-center gap-4 pt-2">
					{socialLinks.map(link => (
						<a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground transition-colors hover:text-primary"
							title={link.name}
						>
							<link.icon className="size-5" />
						</a>
					))}
				</div>
			</div>
		</section>
	)
}
