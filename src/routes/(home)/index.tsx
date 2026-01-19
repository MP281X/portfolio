import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(home)/')({
	component: RouteComponent,
	ssr: true
})

function RouteComponent() {
	return <div>Hello "/(home)/"!</div>
}
