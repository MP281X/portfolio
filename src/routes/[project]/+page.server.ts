import { db } from '$lib/db';

export const load = async ({ params }) => {
	const project = (await db.selectFrom('project').where('project.url', '=', params.project).selectAll().limit(1).execute())[0];

	return { ...project };
};
