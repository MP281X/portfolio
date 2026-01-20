import { createFileRoute } from '@tanstack/react-router'
import { TerminalOutput, TerminalPrompt, TerminalWindow } from '@/components/terminal.tsx'

export const Route = createFileRoute('/(home)/skills')({
	component: Page,
	ssr: true
})

const skillsSource = `import { Schema } from "effect"

export class Skills extends Schema.Class<Skills>("Skills")({
	core: Schema.Literal("Effect", "React", "TypeScript"),
	daily: Schema.Literal("PostgreSQL", "Redis", "Bun"),
	infra: Schema.Literal("Docker", "Kubernetes", "GitHub Actions")
}) {}`

function Page() {
	return (
		<section className="flex min-h-[100dvh] w-full items-center justify-center px-4 py-8 sm:px-6">
			<TerminalWindow className="w-full max-w-[960px]">
				<TerminalPrompt>cat skills.ts</TerminalPrompt>
				<TerminalOutput language="typescript">{skillsSource}</TerminalOutput>
			</TerminalWindow>
		</section>
	)
}
