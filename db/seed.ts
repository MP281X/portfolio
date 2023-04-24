import { Kysely, PostgresDialect } from 'kysely';
import type { DB } from '../src/lib/db.d';
import pg from 'pg';

const db = new Kysely<DB>({
	dialect: new PostgresDialect({
		pool: new pg.Pool({
			connectionString: process.env.POSTGRES_URL
		})
	})
});

const skill = async () => {
	await db
		.insertInto('skill')
		.values([
			{ category: 'frontend', name: 'svelteKit', used: true },
			{ category: 'frontend', name: 'typescript', used: true },
			{ category: 'frontend', name: 'tailwind', used: true },
			{ category: 'frontend', name: 'css', used: true },
			{ category: 'frontend', name: 'html', used: true },
			{ category: 'frontend', name: 'flutter', used: true }
		])
		.execute();

	await db
		.insertInto('skill')
		.values([
			{ category: 'backend', name: 'redis', used: true },
			{ category: 'backend', name: 'postgreSQL', used: true },
			{ category: 'backend', name: 'nodeJS', used: true },
			{ category: 'backend', name: 'mongoDB' },
			{ category: 'backend', name: 'golang' },
			{ category: 'backend', name: 'dart' }
		])
		.execute();

	await db
		.insertInto('skill')
		.values([
			{ category: 'devops', name: 'argocd', used: true },
			{ category: 'devops', name: 'longhorn', used: true },
			{ category: 'devops', name: 'kubernetes', used: true },
			{ category: 'devops', name: 'traefik', used: true },
			{ category: 'devops', name: 'github', used: true },
			{ category: 'devops', name: 'docker', used: true }
		])
		.execute();

	const data = await db.selectFrom('skill').selectAll().execute();
	console.table(data);
};

const project = async () => {
	await db
		.insertInto('project')
		.values([
			{
				project: 'Dicantieri',
				decription: 'A software to manage',
				stack: ['frontend/svelteKit', 'backend/postgreSQL', 'devops/docker', 'devops/railway']
			},
			{
				project: 'K3S config',
				decription: 'My k3s config',
				stack: ['devops/argocd', 'devops/kubernetes', 'devops/github_1', 'devops/traefik', 'devops/longhorn']
			},
			{
				project: 'Portfolio',
				decription: 'This website',
				stack: ['frontend/svelteKit', 'backend/postgreSQL', 'backend/redis', 'devops/docker', 'devops/kubernetes']
			},
			{
				project: 'Sagra',
				decription: 'A real time counter for the points of the teams',
				stack: ['frontend/svelteKit', 'backend/poketbase', 'devops/docker', 'devops/kubernetes']
			}
		])
		.execute();
	const data = await db.selectFrom('project').selectAll().execute();
	console.table(data.map(({ stack, ...x }) => x)); // eslint-disable-line @typescript-eslint/no-unused-vars
};

const main = async () => {
	await skill();
	await project();

	await db.destroy();
};

main();
