import { Kysely, PostgresDialect } from 'kysely';
import type { DB } from './db.d';
import pg from 'pg';
import { env } from '$env/dynamic/private';

export const db = new Kysely<DB>({
	dialect: new PostgresDialect({
		pool: new pg.Pool({
			connectionString: env.POSTGRES_URL
		})
	})
});
