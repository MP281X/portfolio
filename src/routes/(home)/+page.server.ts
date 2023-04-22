import { db } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const skill = await db.selectFrom('skill').selectAll().execute();

	const backend = skill.filter((x) => x.category === 'backend');
	const frontend = skill.filter((x) => x.category === 'frontend');
	const devops = skill.filter((x) => x.category === 'devops');

	return { skills: { backend, frontend, devops } };
};
