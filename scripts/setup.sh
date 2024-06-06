#!/bin/sh

. "node_modules/@mp281x/shared-config/scripts/+helpers.sh"

pnpm shared-config-setup;


log "DB MIGRATION"
atlas schema fmt scripts/schema.hcl;
atlas schema clean --auto-approve -u $POSTGRES_URL;
atlas schema apply --auto-approve -u $POSTGRES_URL --to file://scripts/schema.hcl;

log "DB TYPES"
pnpm x kysely-codegen --dialect postgres --out-file ./src/lib/db.g.ts --url $POSTGRES_URL;

log "DB SEED"
export POSTGRES_URL=$POSTGRES_URL && bun scripts/seed.ts;
