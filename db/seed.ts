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
				project: 'Blixter',
				decription: 'An open source streaming platform',
				url: 'blixter',
				stack: ['frontend/svelteKit', 'frontend/tailwind', 'frontend/typescript', 'backend/bun', 'devops/kubernetes', 'devops/github_1'],
				paragraph: [
					`This is my second significant full-stack project.`,

					`The frontend is built using SvelteKit, ensuring a responsive and user-friendly experience, while on the backend I utilized Bun inside a
           container in my k3s cluster`,

					`The main goal of this project was to improve my TypeScript skills by organizing my project as a monorepo for better code management.
           I also introduced new tools like Bun for faster development, openai for text summarization/categorization and FFmpeg for multimedia processing.`,

					`This project reflects my commitment to continuous learning and my desire to create efficient, user-friendly full-stack solutions.`
				],
				screenshot: ['home.png', 'login.png', 'player.png', 'profile.png', 'upload.png']
			},
			{
				project: 'K3S config',
				decription: 'The configuration file for my k3s cluster',
				url: 'k3s',
				stack: ['devops/argocd', 'devops/kubernetes', 'devops/github_1', 'devops/traefik', 'devops/longhorn'],
				paragraph: [
					`After working with docker-compose and docker-swarm for a while, I made the decision to migrate to Kubernetes due to its robust feature set 
           and enhanced capabilities that better aligned with my project's requirements.`,

					`This migration and toolset have enabled me to create a more robust and efficient infrastructure for my projects, enhancing both security and scalability.`
				],
				screenshot: ['ci-cd.svg', 'networking.svg', 'secrets.svg', 'storage.svg']
			},
			{
				project: 'Dicantieri',
				decription: 'A management system for construction sites, suppliers, customers and warehouse',
				url: 'dicantieri',
				stack: ['frontend/svelteKit', 'frontend/tailwind', 'backend/postgresql', 'devops/docker', 'devops/railway'],
				paragraph: [
					`In an effort to enhance my construction site management software, I initiated a substantial project transformation. 
           Initially, the frontend was developed using Flutter Web, while the backend consisted of some Golang microservices with MongoDB as the database.`,

					`Recognizing the need to establish a more seamless and type-safe connection between the frontend and backend, 
           and to reduce the overhead of repetitive code, I decied to rebuild the project from scratch.
           This involved transitioning to SvelteKit for the frontend, leveraging its simplicity and type-safety to create a more 
           responsive and robust user-friendly interface. Simultaneously, I migrated the primary db to PostgreSQL which, 
           thanks to PrismaDB, improved the type-safety and data integrity`
				],
				screenshot: ['aggiunta_dati.png', 'home.png', 'ricerca.png', 'visualizzazione_dati.png']
			},
			{
				project: 'RomLinks',
				decription: 'An app to help users to find and download custom rom for their devices',
				url: 'romlinks',
				stack: ['frontend/flutter', 'backend/golang', 'backend/mongodb', 'devops/docker'],
				paragraph: [
					`This is my first full-stack project. The frontend was developed with Flutter, while the backend consisted of four microservices built in Golang.`,

					`I initially chose Firebase for the backend but, as the project evolved, it became clear that it lacked essential features that i wanted for my project.
           In response, I decided to rebuild the backend using Golang and MongoDB.`
				],
				screenshot: ['add.webp', 'download.webp', 'home.webp', 'request.webp', 'search.webp', 'view.webp']
			}
		])
		.execute();
	const data = await db.selectFrom('project').selectAll().execute();
	console.table(data.map(({ stack, decription, paragraph, screenshot, ...x }) => x)); // eslint-disable-line @typescript-eslint/no-unused-vars
};

const main = async () => {
	await skill();
	await project();

	await db.destroy();
};

main();
