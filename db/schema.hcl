schema "public" {}

table "skill" {
  schema = schema.public

  column "category" {
    type = varchar(20)
  }

  column "name" {
    type = varchar(20)
  }

  column "used" {
    type    = boolean
    default = false
  }

  primary_key {
    columns = [column.category, column.name]
  }
}

table "project" {
  schema = schema.public

  column "project" {
    type = varchar(20)
  }

  column "url" {
    type = varchar(30)
  }

  column "decription" {
    type = text
  }

  column "paragraph" {
    type = sql("text[]")

  }

  column "stack" {
    type = sql("varchar(20)[]")
  }

  column "screenshot" {
    type = sql("text[]")
  }

  primary_key {
    columns = [column.project]
  }
}
