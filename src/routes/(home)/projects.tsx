import { SiDocker, SiFlutter, SiGithub, SiGo, SiSvelte, SiTypescript } from '@icons-pack/react-simple-icons'
import { createFileRoute } from '@tanstack/react-router'
import { ExternalLink } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { getGitHubRepos } from '@/server/github.ts'

type Icon = typeof SiGithub

const languageIcons: Record<string, Icon> = {
	TypeScript: SiTypescript,
	Svelte: SiSvelte,
	Go: SiGo,
	Dockerfile: SiDocker,
	Dart: SiFlutter
}

const getRepoIcons = (language: string | null) => {
	const icons: Icon[] = []
	const languageIcon = language ? languageIcons[language] : undefined

	if (languageIcon) {
		icons.push(languageIcon)
	}

	icons.push(SiGithub)

	return icons
}

export const Route = createFileRoute('/(home)/projects')({
	component: Page,
	ssr: true,
	loader: () => getGitHubRepos()
})

function Page() {
	const repos = Route.useLoaderData()

	return (
		<section className="flex h-full flex-col justify-center overflow-auto px-6 py-8">
			<div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
				{repos.map(repo => (
					<Card key={repo.id} className="group transition-colors hover:border-primary">
						<CardHeader className="pb-2">
							<CardTitle className="flex items-center justify-between text-base">
								{repo.name}
								<a
									href={repo.html_url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground transition-colors hover:text-primary"
								>
									<ExternalLink className="size-4" />
								</a>
							</CardTitle>
							<CardDescription className="text-xs">{repo.description ?? 'No description provided.'}</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex gap-2">
								{getRepoIcons(repo.language).map((Icon, i) => (
									<Icon key={`${repo.name}-icon-${i}`} className="size-4 text-muted-foreground" />
								))}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	)
}
