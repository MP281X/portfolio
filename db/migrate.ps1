# load env
Get-Content .env | foreach {
  $name, $value = $_.split(' = ')
  if ([string]::IsNullOrWhiteSpace($name) || $name.Contains('#')) {
   continue
  }
  Set-Content env:\$name $value
}

# run db migration
clear;
atlas schema clean --auto-approve -u $ENV:POSTGRES_URL;
atlas schema apply --auto-approve -u $ENV:POSTGRES_URL --to file://db/schema.hcl;

# generate the db client
npx kysely-codegen --dialect postgres --url $ENV:POSTGRES_URL;

# run the seed script
npx ts-node-esm db/seed.ts;