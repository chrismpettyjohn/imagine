import {ReactNode} from 'react';

export interface DataTableColumn<Record> {
  Header: ReactNode;
  accessor?: keyof Record;
}

export interface DataTableProps<Record> {
  columns: DataTableColumn<Record>[];
  data?: Record[];
}
