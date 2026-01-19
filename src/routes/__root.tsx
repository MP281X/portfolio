import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { Function } from 'effect'
import { StatusBar } from '@/components/status-bar.tsx'
import stylesheet from '../styles.css?url'

export const Route = createRootRoute({
	head: Function.constant({
		meta: [
			{ charSet: 'utf-8' },
			{ title: 'MP | Portfolio' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'description', content: 'Matteo Paludgnach - Full-Stack Developer' }
		],
		links: [{ rel: 'stylesheet', href: stylesheet }]
	}),
	wrapInSuspense: true,
	shellComponent: props => (
		<html lang="en">
			<head>
				{import.meta.env.DEV && <script src="https://unpkg.com/react-scan/dist/auto.global.js" />}
				<HeadContent />
			</head>

			<body className="flex h-screen w-full overflow-hidden bg-background text-foreground">
				<Scripts />
				{props.children}
			</body>
		</html>
	),
	component: RootComponent
})

function RootComponent() {
	return (
		<>
			<main className="flex-1 overflow-auto pb-6">
				<Outlet />
			</main>
			<StatusBar />
		</>
	)
}
