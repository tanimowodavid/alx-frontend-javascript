// import the types from interface.ts so the declarations use the same types
import { RowID, RowElement } from './interface';

export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): RowID;
