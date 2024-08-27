import { Kysely, PostgresDialect } from 'kysely'
// @ts-expect-error
import pg from 'pg'

import type { DB } from './db.g'

const getConnectionString = async () => {
	let env: string | undefined = undefined
	try {
		// @ts-expect-error
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
		env = (await import('$env/dynamic/private')).env['POSTGRES_URL']
	} catch {}

	return env ?? process.env['POSTGRES_URL']
}

// eslint-disable-next-line
const pool = new pg.Pool({ connectionString: await getConnectionString() })

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const db = new Kysely<DB>({ dialect: new PostgresDialect({ pool }) })
