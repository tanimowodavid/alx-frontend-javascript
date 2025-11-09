/// <reference path="./crud.d.ts" />

import type { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// create a row with the RowElement type
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// insert the row and capture the returned RowID
const newRowID: RowID = CRUD.insertRow(row);

// create an updated row object with age
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};

// update the row in the (mock) DB
CRUD.updateRow(newRowID, updatedRow);

// delete the row
CRUD.deleteRow(newRowID);
