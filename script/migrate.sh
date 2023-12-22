#!/bin/bash

# load env
source .env && clear;

# run db migration
atlas schema fmt db/schema.hcl;
atlas schema clean --auto-approve -u $POSTGRES_URL;
atlas schema apply --auto-approve -u $POSTGRES_URL --to file://db/schema.hcl;

# generate the db client
bun x kysely-codegen --dialect postgres --out-file ./src/lib/db.d.ts --url $POSTGRES_URL;

# run the seed script
export POSTGRES_URL=$POSTGRES_URL && bun db/seed.ts;
