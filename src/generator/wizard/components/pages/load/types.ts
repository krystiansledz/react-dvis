export enum LoadType {
  Input = "Input",
  File = "File",
}

export const LoadTypes: Record<LoadType, string> = {
  [LoadType.Input]: "Input" as const,
  [LoadType.File]: "File" as const,
};
