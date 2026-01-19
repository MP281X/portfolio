import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { Function } from 'effect'
import stylesheet from '../styles.css?url'

export const Route = createRootRoute({
	head: Function.constant({
		meta: [
			{ charSet: 'utf-8' },
			{ title: 'Blixter' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
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

			<body className="flex h-screen w-full">
				<Scripts />

				{props.children}
			</body>
		</html>
	)
})
