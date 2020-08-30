export type Identifier<T extends { id: any }> = T | T['id'];
