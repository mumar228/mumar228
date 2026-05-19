import { EntitySchema } from "typeorm";

export const TodoEntity = new EntitySchema({
  name: "Todo",
  tableName: "todos",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    title: {
      type: "varchar",
      length: 100,
      nullable: true,
    },
    description: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    createdAt: {
      type: "timestamp",
      createDate: true,
    },
    updatedAt: {
      type: "timestamp",
      updateDate: true,
    },
  },
});