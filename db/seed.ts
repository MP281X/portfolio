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
				decription: 'A management system for construction sites, suppliers, customers and warehouse',
				url: 'dicantieri',
				stack: ['frontend/svelteKit', 'frontend/tailwind', 'backend/postgresql', 'devops/docker', 'devops/railway'],
				paragraph: [
					`To improve type-safety between backend and frontend, reduce boilerplate code and improve development and maintenance times I decided to redo the 
					project with sveltekit and postgres.`,

					'Initially the frontend was developed in flutter web, the backend was composed of some microservices made with golang that used mongodb as database.'
				],
				screenshot: ['aggiunta_dati.png', 'home.png', 'ricerca.png', 'visualizzazione_dati.png']
			},
			{
				project: 'K3S config',
				decription: 'The configuration file for my k3s cluster',
				url: 'k3s',
				stack: ['devops/argocd', 'devops/kubernetes', 'devops/github_1', 'devops/traefik', 'devops/longhorn'],
				paragraph: [
					'after using docker-compose and docker-swarm for some time i decided to migrate to kubernetes since docker lacked some features i needed',

					`At the moment I use argocd to manage kubernetes declaratively, selaed secrets to manage secrets, 
					longhorn for storage and backups, traefik as ingress and tailscale to access some containers via vpn`
				],
				screenshot: ['ci-cd.svg', 'networking.svg', 'secrets.svg', 'storage.svg']
			},
			{
				project: 'RomLinks',
				decription: 'An app to help users to find and download custom rom for their devices',
				url: 'romlinks',
				stack: ['frontend/flutter', 'backend/golang', 'backend/mongodb', 'devops/docker'],
				paragraph: [
					'this is my first full-stack project. the frontend was done with flutter while the backend was 4 microservices done in golang',

					`I initially used firebase for the backend but since it didn't have the features I needed, it wasn't open-source and it
					had a pricing model that I didn't like so I decided to redo it with golang and mongodb`
				],
				screenshot: ['add.webp', 'download.webp', 'home.webp', 'request.webp', 'search.webp', 'view.webp']
			},
			{
				project: 'Tabellone sagra',
				decription: 'A scoreboard for displaying team scores in real time',
				url: 'sagra',
				stack: ['frontend/svelteKit', 'frontend/tailwind', 'backend/poketbase', 'devops/docker', 'devops/kubernetes'],
				paragraph: [
					`this is a simple project for displaying team scores in real time. since I had never used firebase and the project had to be 
					developed in a short time I decided to use poketbase as a database since it already had an integrated api to get data in real time via SSE`,

					`after having done the project, in order not to depend on poketbase or cloed source services for real time data management, 
					after several tests with different services, I decided to start using redis and the redableStreams API`
				],
				screenshot: ['aggiornamento_punteggio.png', 'aggiunta_squadre.png', 'visualizzazione.png']
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
