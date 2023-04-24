import { db } from '$lib/db';

export const load = async ({ url }) => {
	const project = (await db.selectFrom('project').where('project.url', '=', url.pathname).selectAll().limit(1).execute())[0];

	return { ...project };
};
