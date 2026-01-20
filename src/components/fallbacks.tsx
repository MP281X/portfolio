import { OctagonAlert } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.tsx'
import { formatError } from '@/lib/utils.ts'

export function NotFound() {
	return (
		<main className="flex flex-1 items-center justify-center px-4 sm:px-0">
			<Alert variant="destructive" className="w-full max-w-lg">
				<OctagonAlert />
				<AlertTitle>Page not found</AlertTitle>
				<AlertDescription>Error 404</AlertDescription>
			</Alert>
		</main>
	)
}

export function Loading() {
	return (
		<div className="flex size-full items-center justify-center">
			<div className="size-8 animate-spin border-2 border-muted-foreground/50" />
		</div>
	)
}

export function Error(props: { error: Error; reset: () => void }) {
	const message = formatError(props.error)

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: error page
		<main
			onClick={props.reset}
			className="flex flex-1 cursor-pointer select-text items-center justify-center px-4 sm:px-0"
		>
			<Alert variant="destructive" className="w-full max-w-lg">
				<OctagonAlert />
				<AlertTitle>Something went wrong</AlertTitle>
				<AlertDescription>
					<code className="wrap-break-word whitespace-pre-wrap">{message}</code>
					<span className="mt-2 block text-muted-foreground/60">Tap to retry</span>
				</AlertDescription>
			</Alert>
		</main>
	)
}
