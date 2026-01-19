import { useNavigate, useRouterState } from '@tanstack/react-router'
import { useEffect } from 'react'

const routes = [
	{ path: '/', label: 'home.tsx', mode: 'home' },
	{ path: '/skills', label: 'skills.tsx', mode: 'skills' },
	{ path: '/projects', label: 'projects.tsx', mode: 'projects' },
	{ path: '/about', label: 'about.tsx', mode: 'about' }
] as const

export function StatusBar() {
	const router = useRouterState()
	const navigate = useNavigate()
	const currentPath = router.location.pathname
	const currentIndex = routes.findIndex(r => r.path === currentPath)
	const currentRoute = routes[currentIndex] ?? routes[0]

	// Set mode data attribute on html for CSS theming
	useEffect(() => {
		document.documentElement.dataset['mode'] = currentRoute?.mode
	}, [currentRoute?.mode])

	// Tab navigation
	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
				return
			}

			if (e.key === 'Tab') {
				e.preventDefault()
				const nextIndex = e.shiftKey
					? (currentIndex - 1 + routes.length) % routes.length
					: (currentIndex + 1) % routes.length
				const nextRoute = routes[nextIndex]
				if (nextRoute) void navigate({ to: nextRoute.path })
			}

			if (e.key === 'Escape') {
				void navigate({ to: '/' })
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [currentIndex, navigate])

	return (
		<footer className="fixed right-0 bottom-0 left-0 flex h-6 items-center overflow-hidden bg-card text-xs">
			{/* Left mode + user block - fixed width for stability */}
			<div className="flex h-full items-center">
				<div className="flex h-full w-20 items-center justify-center bg-primary font-semibold text-primary-foreground">
					{currentRoute.mode.toUpperCase()}
				</div>
				<div className="flex h-full items-center bg-muted px-2 text-muted-foreground">mp281x</div>
			</div>

			{/* Buffer tabs - like neovim */}
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

			{/* Spacer */}
			<div className="h-full flex-1" />

			{/* Right side info */}
			<div className="flex h-full items-center gap-2 bg-muted px-3 text-muted-foreground">tsx</div>
			<div className="flex h-full items-center bg-accent px-3 text-accent-foreground">
				{currentIndex + 1}:{routes.length}
			</div>
		</footer>
	)
}
