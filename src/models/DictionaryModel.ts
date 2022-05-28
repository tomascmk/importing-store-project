export interface Dictionary<T> {
  [name: string]: T | undefined;
}

export type StringDictionary = Dictionary<string>;
