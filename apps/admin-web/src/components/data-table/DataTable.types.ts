import {ReactNode} from 'react';

export interface DataTableColumn<Record> {
  header: ReactNode;
  render(row: Record): ReactNode;
}

export interface DataTableProps<Record> {
  columns: DataTableColumn<Record>[];
  data?: Record[];
}
