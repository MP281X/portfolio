import { Kysely, PostgresDialect } from 'kysely';
import type { DB } from 'kysely-codegen';
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
			{ category: 'frontend', name: 'svelte', description: '' },
			{ category: 'frontend', name: 'typescript', description: '' },
			{ category: 'frontend', name: 'windicss', description: '' },
			{ category: 'frontend', name: 'css', description: '' },
			{ category: 'frontend', name: 'html5', description: '' },
			{ category: 'frontend', name: 'flutter', description: '' }
		])
		.execute();

	await db
		.insertInto('skill')
		.values([
			{ category: 'backend', name: 'redis', description: '' },
			{ category: 'backend', name: 'postgresql', description: '' },
			{ category: 'backend', name: 'nodejs', description: '' },
			{ category: 'backend', name: 'mongodb', description: '' },
			{ category: 'backend', name: 'golang', description: '' },
			{ category: 'backend', name: 'dart', description: '' }
		])
		.execute();

	await db
		.insertInto('skill')
		.values([
			{ category: 'devops', name: 'argocd', description: '' },
			{ category: 'devops', name: 'longhorn', description: '' },
			{ category: 'devops', name: 'kubernetes', description: '' },
			{ category: 'devops', name: 'traefik', description: '' },
			{ category: 'devops', name: 'github-actions', description: '' },
			{ category: 'devops', name: 'docker', description: '' }
		])
		.execute();

	const data = await db.selectFrom('skill').selectAll().execute();
	console.table(data);
};

const main = async () => {
	await skill();

	await db.destroy();
};

main();
