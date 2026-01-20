import { useNavigate, useRouterState } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Badge } from '@/components/ui/badge.tsx'
import type { FileRoutesByTo } from '@/routeTree.gen.ts'

type RoutePath = keyof FileRoutesByTo

const routes = [
	{ path: '/', label: 'home.tsx', mode: 'home' },
	{ path: '/skills', label: 'skills.tsx', mode: 'skills' },
	{ path: '/projects', label: 'projects.tsx', mode: 'projects' },
	{ path: '/about', label: 'about.tsx', mode: 'about' },
	{ path: '/cv', label: 'cv.tsx', mode: 'cv' }
] as const satisfies ReadonlyArray<{ path: RoutePath; label: string; mode: string }>

export function StatusBar() {
	const { location } = useRouterState()
	const navigate = useNavigate()
	const currentRoute = routes.find(route => route.path === location.pathname) ?? routes[0]
	const currentIndex = routes.indexOf(currentRoute)

	useEffect(() => {
		function handleKeyDown(event: KeyboardEvent) {
			if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
				return
			}

			if (event.key === 'Tab') {
				event.preventDefault()
				const nextIndex = (currentIndex + (event.shiftKey ? -1 : 1) + routes.length) % routes.length
				const nextRoute = routes[nextIndex]
				if (nextRoute) void navigate({ to: nextRoute.path })
			}

			if (event.key === 'Escape') {
				void navigate({ to: '/' })
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [currentIndex, navigate])

	return (
		<footer className="fixed right-0 bottom-0 left-0 z-20 h-7 overflow-x-auto border-border/70 border-t bg-card text-xs print:hidden">
			<div className="flex h-full min-w-max items-center">
				<div className="flex h-full w-20 items-center justify-center bg-primary/90 font-semibold text-primary-foreground">
					{currentRoute.mode.toUpperCase()}
				</div>
				<div className="flex h-full">
					{routes.map((route, i) => (
						<button
							key={route.path}
							type="button"
							onClick={() => void navigate({ to: route.path })}
							className={`flex h-full items-center px-3 transition-colors ${
								i === currentIndex
									? 'bg-primary/15 font-semibold text-foreground'
									: 'text-muted-foreground hover:bg-accent/60 hover:text-foreground'
							}`}
						>
							{route.label}
						</button>
					))}
				</div>
				<div className="flex-1" />
				<div className="flex h-full items-center gap-6 bg-muted px-3 text-muted-foreground">
					<div className="flex items-center gap-2">
						<Badge variant="outline" className="px-1.5 py-0 font-semibold text-[10px]">
							TAB
						</Badge>
						<span>next</span>
					</div>
					<div className="flex items-center gap-2">
						<Badge variant="outline" className="px-1.5 py-0 font-semibold text-[10px]">
							SHIFT+TAB
						</Badge>
						<span>prev</span>
					</div>
				</div>
				<div className="flex h-full items-center gap-2 bg-accent px-3 text-accent-foreground">
					<span className="font-semibold">tsx</span>
					<span className="text-[10px] opacity-70">
						{currentIndex + 1}:{routes.length}
					</span>
				</div>
			</div>
		</footer>
	)
}
