import { createFileRoute } from '@tanstack/react-router'
import { TerminalOutput, TerminalPrompt, TerminalWindow } from '@/components/terminal.tsx'

export const Route = createFileRoute('/(home)/projects')({
	component: Page,
	ssr: true
})

const projectsSource = `# portfolio
**Description**: Personal portfolio and terminal UI
**Tech**: TypeScript

# dotfiles
**Description**: Shell configs and editor setup
**Tech**: Lua

# kotlin-react-template
**Description**: Kotlin + React starter
**Tech**: TypeScript

# blixter_video
**Description**: Open source streaming platform
**Tech**: TypeScript

# argocd
**Description**: GitOps and dev server scripts
**Tech**: Shell

# romlinks_frontend
**Description**: RomLinks frontend code
**Tech**: Dart`

function Page() {
	return (
		<section className="flex min-h-[100dvh] w-full items-center justify-center px-4 py-8 sm:px-6">
			<TerminalWindow className="w-full max-w-[960px]">
				<TerminalPrompt>cat projects.md</TerminalPrompt>
				<TerminalOutput language="markdown">{projectsSource}</TerminalOutput>
			</TerminalWindow>
		</section>
	)
}
