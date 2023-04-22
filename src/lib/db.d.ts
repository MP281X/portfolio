import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface Skill {
  id: Generated<string>;
  category: "backend" | "devops" | "frontend";
  name: string;
  description: string;
}

export interface DB {
  skill: Skill;
}
