import type { CSSProperties, ReactNode } from 'react'
import { createHighlighter, type ThemedTokenWithVariants } from 'shiki'
import { Badge } from '@/components/ui/badge.tsx'
import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx'
import { Separator } from '@/components/ui/separator.tsx'

const HIGHLIGHT_THEMES = {
	light: 'github-light-default',
	dark: 'github-dark-default'
} as const

const highlighter = await createHighlighter({
	themes: [HIGHLIGHT_THEMES.light, HIGHLIGHT_THEMES.dark],
	langs: ['bash', 'markdown', 'tsx', 'typescript']
})

type TerminalLanguage = 'bash' | 'markdown' | 'tsx' | 'typescript'

type TokenizeTerminalInput = {
	readonly code: string
	readonly language: TerminalLanguage
}

const tokenizeTerminal = (input: TokenizeTerminalInput): ThemedTokenWithVariants[][] =>
	highlighter.codeToTokensWithThemes(input.code, {
		lang: input.language,
		themes: HIGHLIGHT_THEMES
	})

type TerminalWindowProps = {
	readonly children: ReactNode
	readonly className?: string
}

type TerminalLineProps = {
	readonly children: string
}

type TerminalPromptProps = {
	readonly children: string
}

type TerminalOutputProps = {
	readonly children: string
	readonly language: TerminalLanguage
}

export function TerminalLine(input: TerminalLineProps) {
	const content = input.children || ' '

	return (
		<div className="whitespace-pre-wrap text-muted-foreground text-sm leading-6 sm:text-base sm:leading-7">
			{content}
		</div>
	)
}

export function TerminalPrompt(input: TerminalPromptProps) {
	return (
		<div className="-mx-4 mb-3 px-4">
			<div className="whitespace-pre-wrap text-sm leading-6 sm:text-base sm:leading-7">
				<span className="font-semibold text-primary">$</span>
				<span className="font-medium"> {input.children}</span>
				<span
					className="ml-[0.2rem] inline-block h-[0.9em] w-[0.5em] translate-y-0.5 bg-primary/80"
					aria-hidden="true"
				/>
			</div>
			<Separator className="-mx-4 mt-3" />
		</div>
	)
}

export function TerminalOutput(input: TerminalOutputProps) {
	const tokens = input.children.length ? tokenizeTerminal({ code: input.children, language: input.language }) : []

	return (
		<div className="text-sm leading-6 sm:text-base sm:leading-7">
			{tokens.map(line => {
				const lineKey = line[0]?.offset ?? line.map(token => token.content).join('')

				return (
					<div key={`line-${lineKey}`} className="wrap-break-word whitespace-pre-wrap">
						{line.map(token => {
							const lightVariant = token.variants['light']
							const darkVariant = token.variants['dark']
							const style = {
								'--terminal-token-light': lightVariant?.color ?? 'inherit',
								'--terminal-token-dark': darkVariant?.color ?? 'inherit'
							} as CSSProperties

							return (
								<span
									key={`${token.offset}-${token.content}`}
									className="text-(--terminal-token-light) dark:text-(--terminal-token-dark)"
									style={style}
								>
									{token.content}
								</span>
							)
						})}
					</div>
				)
			})}
		</div>
	)
}

export function TerminalWindow(input: TerminalWindowProps) {
	return (
		<Card
			className={`border border-border bg-[color-mix(in_oklab,var(--card)_96%,var(--background)_4%)] ring-0 ${input.className ?? ''}`}
			size="sm"
		>
			<CardHeader className="flex flex-wrap items-center justify-between gap-3 border-border/70 border-b bg-card/60 py-2">
				<div className="flex items-center gap-3">
					<span className="inline-block h-2 w-2 shrink-0 bg-primary shadow-[0_0_0_2px_color-mix(in_oklab,var(--primary)_30%,transparent)]" />
					<span className="font-semibold text-xs uppercase tracking-[0.2em]">portfolio</span>
					<Badge variant="outline" className="px-1.5 py-0 text-[10px] uppercase tracking-[0.3em]">
						main
					</Badge>
				</div>
				<Badge variant="outline" className="px-1.5 py-0 text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
					read-only
				</Badge>
			</CardHeader>
			<CardContent className="px-4 pt-3 pb-4">{input.children}</CardContent>
		</Card>
	)
}
