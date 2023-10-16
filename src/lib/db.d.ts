import type { ColumnType } from 'kysely';

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U> ? ColumnType<S, I | undefined, U> : ColumnType<T, T | undefined, T>;

export interface Project {
	project: string;
	url: string;
	decription: string;
	paragraph: string[];
	stack: string[];
	screenshot: string[];
}

export interface Skill {
	category: string;
	name: string;
	used: Generated<boolean>;
}

export interface DB {
	project: Project;
	skill: Skill;
}
