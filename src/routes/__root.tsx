import { createRootRoute, HeadContent, Outlet, Scripts, useRouterState } from '@tanstack/react-router'
import { Function } from 'effect'
import type { CSSProperties } from 'react'
import { FloatingIcons } from '@/components/floating-icons.tsx'
import { StatusBar } from '@/components/status-bar.tsx'
import type { FileRoutesByTo } from '@/routeTree.gen.ts'
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
		<html lang="en" className="h-full bg-background font-sans text-foreground">
			<head>
				{import.meta.env.DEV && <script src="https://unpkg.com/react-scan/dist/auto.global.js" />}
				<HeadContent />
			</head>

			<body className="flex min-h-full overflow-hidden">
				<Scripts />
				{props.children}
			</body>
		</html>
	),
	component: RootComponent
})

type RoutePath = keyof FileRoutesByTo

type RouteMode = 'home' | 'skills' | 'projects' | 'about' | 'cv'

const routeModes = {
	'/': 'home',
	'/skills': 'skills',
	'/projects': 'projects',
	'/about': 'about',
	'/cv': 'cv'
} as const satisfies Record<RoutePath, RouteMode>

const modeStyles = {
	home: 'oklch(0.68 0.15 35)',
	skills: 'oklch(0.68 0.12 220)',
	projects: 'oklch(0.68 0.16 20)',
	about: 'oklch(0.68 0.12 160)',
	cv: 'oklch(0.68 0.02 0)'
} satisfies Record<RouteMode, string>

function RootComponent() {
	const { location } = useRouterState()
	const currentMode = routeModes[location.pathname as RoutePath] ?? routeModes['/']
	const modeStyle = modeStyles[currentMode]
	const shellStyle = {
		'--primary': modeStyle
	} as CSSProperties

	return (
		<div
			className="relative isolate flex h-full w-full flex-col bg-background selection:bg-primary/30"
			style={shellStyle}
		>
			<div
				aria-hidden="true"
				className="pointer-events-none fixed inset-0 z-0 opacity-30 print:hidden"
				style={{
					backgroundImage:
						'linear-gradient(transparent 92%, oklch(1 0 0 / 0.04) 100%), linear-gradient(90deg, transparent 92%, oklch(1 0 0 / 0.04) 100%)',
					backgroundSize: '38px 38px'
				}}
			/>
			<FloatingIcons />
			<main className="relative z-10 flex min-h-0 flex-1 flex-col overflow-auto pb-7 print:overflow-visible print:pb-0">
				<Outlet />
			</main>
			<StatusBar />
		</div>
	)
}
