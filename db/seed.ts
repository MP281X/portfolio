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
			{ category: 'backend', name: 'postgresql', used: true },
			{ category: 'backend', name: 'nodejs', used: true },
			{ category: 'backend', name: 'mongodb' },
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
				decription: 'A management system for the management of customers, construction sites, suppliers and warehouse',
				url: '/project/dicantieri',
				stack: ['frontend/svelteKit', 'backend/postgresql', 'devops/docker', 'devops/railway']
			},
			{
				project: 'K3S config',
				decription: 'The argocd/kubernetes configuration for my k3s cluster',
				url: '/project/k3s_config',
				stack: ['devops/argocd', 'devops/kubernetes', 'devops/github_1', 'devops/traefik', 'devops/longhorn']
			},
			{
				project: 'RomLinks',
				decription: 'An app to help users to find and download custom rom for their devices',
				url: '/project/romlinks',
				stack: ['frontend/flutter', 'backend/golang', 'backend/mongodb', 'devops/docker']
			},
			{
				project: 'Tabellone sagra',
				decription: 'A scoreboard for displaying team scores in real time',
				url: '/project/sagra',
				stack: ['frontend/svelteKit', 'backend/poketbase', 'devops/docker', 'devops/kubernetes']
			}
		])
		.execute();
	const data = await db.selectFrom('project').selectAll().execute();
	console.table(data.map(({ stack, decription, ...x }) => x)); // eslint-disable-line @typescript-eslint/no-unused-vars
};

const main = async () => {
	await skill();
	await project();

	await db.destroy();
};

main();
