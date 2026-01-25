import { createFileRoute } from '@tanstack/react-router'
import { TerminalOutput, TerminalPrompt, TerminalWindow } from '@/components/terminal.tsx'

export const Route = createFileRoute('/(home)/')({
	component: Page,
	ssr: true
})

const homeSource = `export function Home() {
	return (
		<main>
			<h1> Matteo Paludgnach </h1>
			<p> Full-Stack Developer • Italy • 22 </p>
			<p> Focus: performant, real-time experiences </p>
			<p> Stack: React, TypeScript, Bun, PostgreSQL, Redis </p>
			<p> Links: GitHub • X • Email </p>
		</main>
	)
}`

function Page() {
	return (
		<section className="flex min-h-dvh w-full items-center justify-center px-4 py-8 sm:px-6">
			<TerminalWindow className="w-full max-w-240">
				<TerminalPrompt>cat home.tsx</TerminalPrompt>
				<TerminalOutput language="tsx">{homeSource}</TerminalOutput>
			</TerminalWindow>
		</section>
	)
}
