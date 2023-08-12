/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("43czwhptelqe4vx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pslill5x",
    "name": "race",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("43czwhptelqe4vx")

  // remove
  collection.schema.removeField("pslill5x")

  return dao.saveCollection(collection)
})
