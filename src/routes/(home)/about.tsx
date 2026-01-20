import { createFileRoute } from '@tanstack/react-router'
import { TerminalOutput, TerminalPrompt, TerminalWindow } from '@/components/terminal.tsx'

export const Route = createFileRoute('/(home)/about')({
	component: Page,
	ssr: true
})

const aboutSource = `#!/usr/bin/env bash

cat <<'EOF'
Matteo Paludgnach
Full-Stack Developer • Italy

Now
- React 19
- Effect-TS
- Real-time systems

Contact
- github.com/mp281x
EOF`

function Page() {
	return (
		<section className="flex min-h-[100dvh] w-full items-center justify-center px-4 py-8 sm:px-6">
			<TerminalWindow className="w-full max-w-[960px]">
				<TerminalPrompt>cat about.sh</TerminalPrompt>
				<TerminalOutput language="bash">{aboutSource}</TerminalOutput>
			</TerminalWindow>
		</section>
	)
}
