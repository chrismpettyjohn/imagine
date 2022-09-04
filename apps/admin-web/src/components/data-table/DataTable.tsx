import React, {useState} from 'react';
import {useSearchData} from '@imagine-cms/web';
import {DataTableProps} from './DataTable.types';

export function DataTable<Record>({ columns, data = [] }: DataTableProps<Record>) {
  const [searchTerm, setSearchTerm ] = useState('');
  const filteredData = useSearchData(data, searchTerm);
  return (
    <>
      <input className="form-control" value={searchTerm} onChange={e => setSearchTerm(e?.target?.value ?? '')} placeholder="Search..." />
      <br />
      <table className="table">
        <thead>
          <tr>
            {
              columns.map(column => (
                <th key={`column_${column.header}`}>
                  {column.header}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
        {
          filteredData.map((row, rowIndex) => (
            <tr key={`row_${rowIndex}`}>
              {
                columns.map(column => (
                  <td key={`row_${rowIndex}_${column.header}`}>
                    {column.render(row)}
                  </td>
                ))
              }
            </tr>
          ))
        }
        </tbody>
      </table>
    </>
  )
}
