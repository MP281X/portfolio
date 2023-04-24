import { Kysely, PostgresDialect } from 'kysely';
import { env } from '$env/dynamic/private';
import type { DB } from './db.d';
import pg from 'pg';

export const db = new Kysely<DB>({
	dialect: new PostgresDialect({
		pool: new pg.Pool({
			connectionString: env.POSTGRES_URL ?? process.env.POSTGRES_URL
		})
	})
});
