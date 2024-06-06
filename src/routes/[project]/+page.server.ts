import type { PageServerLoad } from './$types'

import { db } from '$lib/db'

export const load: PageServerLoad = async ({ params }) => {
	const project = (await db.selectFrom('project').where('project.url', '=', params.project).selectAll().limit(1).execute())[0]

	return { ...project }
}
