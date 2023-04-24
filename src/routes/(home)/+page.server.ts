import { db } from '$lib/db';

export const load = async () => {
	const skill = await db.selectFrom('skill').selectAll().execute();

	const backend = skill.filter((x) => x.category === 'backend');
	const frontend = skill.filter((x) => x.category === 'frontend');
	const devops = skill.filter((x) => x.category === 'devops');

	const project = await db.selectFrom('project').selectAll().execute();

	return { skills: { backend, frontend, devops }, project };
};
