export TERM=xterm # fix github actions

set -e
trap ctrl_c INT
[ -f ".env" ] && export $(cat .env | xargs)

log() {
	echo ""
	echo "\033[1;33m$1\033[0m"
	echo ""
}

log "DB MIGRATION"
pnpm atlas schema fmt scripts/schema.hcl;
pnpm atlas schema clean --auto-approve -u $POSTGRES_URL;
pnpm atlas schema apply --auto-approve -u $POSTGRES_URL --to file://scripts/schema.hcl;

log "DB TYPES"
pnpm x kysely-codegen --dialect postgres --out-file ./src/lib/db.g.ts --url $POSTGRES_URL;

log "DB SEED"
export POSTGRES_URL=$POSTGRES_URL && node --experimental-strip-types scripts/seed.ts;
