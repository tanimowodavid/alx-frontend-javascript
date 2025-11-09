// RowID is a number alias
export type RowID = number;

// RowElement describes a DB row (age is optional)
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
