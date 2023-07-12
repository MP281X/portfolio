import { db } from '$lib/db';

export const load = async () => {
	const skill = await db.selectFrom('skill').selectAll().execute();

	const frontend = skill.filter((x) => x.category === 'frontend');
	const backend = skill.filter((x) => x.category === 'backend');
	const devops = skill.filter((x) => x.category === 'devops');

	const project = await db.selectFrom('project').select(['project', 'decription', 'url', 'stack']).execute();

	return { skills: { frontend, backend, devops }, project };
};
