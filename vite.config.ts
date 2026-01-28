import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		tailwindcss(),
		tanstackStart({
			prerender: {
				enabled: true,
				failOnError: true,
				autoStaticPathsDiscovery: true
			}
		}),
		nitro({ preset: 'bun' }),
		viteReact({ babel: { plugins: [['babel-plugin-react-compiler']] } })
	],
	resolve: { alias: { '@': '/src' } },
	server: { watch: { ignored: ['.docs/**', '.output/**'] } }
})
