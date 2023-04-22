import { Kysely, PostgresDialect } from 'kysely';
import type { DB } from './db.d';
import pg from 'pg';

import * as dotenv from 'dotenv';
dotenv.config();

export const db = new Kysely<DB>({
	dialect: new PostgresDialect({
		pool: new pg.Pool({
			connectionString: process.env.POSTGRES_URL
		})
	})
});
