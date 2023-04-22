schema "public" {}

enum "skillCategory" {
  schema = schema.public
  values = ["frontend", "backend", "devops"]
}

table "skill" {
  schema = schema.public

  column "id" {
    type    = uuid
    default = sql("gen_random_uuid()")
  }

  column "category" {
    type = enum.skillCategory
  }

  column "name" {
    type = varchar(20)
  }

  column "description" {
    type = varchar
  }

  primary_key {
    columns = [column.id]
  }
}

