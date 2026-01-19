import { createServerFn } from '@tanstack/react-start'

type GitHubRepo = {
	id: number
	name: string
	html_url: string
	description: string | null
	language: string | null
	fork: boolean
}

const cacheTtlMs = 1000 * 60 * 60
let cachedRepos: GitHubRepo[] | null = null
let cachedAt = 0

const fetchGitHubRepos = async () => {
	const now = Date.now()

	if (cachedRepos && now - cachedAt < cacheTtlMs) {
		return cachedRepos
	}

	const response = await fetch('https://api.github.com/users/mp281x/repos?sort=updated&per_page=100', {
		headers: { Accept: 'application/vnd.github.v3+json' }
	})

	if (!response.ok) {
		throw new Error(`GitHub API error: ${response.status}`)
	}

	const repos = (await response.json()) as GitHubRepo[]
	const filtered = repos.filter(repo => !repo.fork)

	cachedRepos = filtered
	cachedAt = now

	return filtered
}

export const getGitHubRepos = createServerFn({ method: 'GET' }).handler(async () => {
	try {
		return await fetchGitHubRepos()
	} catch {
		return cachedRepos ?? []
	}
})
