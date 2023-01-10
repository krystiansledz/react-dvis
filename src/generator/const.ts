export enum Type {
  DATE = "DATE",
  OBJECT = "OBJECT",
  NUMBER = "NUMBER",
  STRING = "STRING",
  BOOLEAN = "BOOLEAN",
}

export type DataType = Exclude<Type, Type.OBJECT>;
