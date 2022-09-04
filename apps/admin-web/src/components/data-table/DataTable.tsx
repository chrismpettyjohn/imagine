import React from 'react'
import {DataTableProps} from './DataTable.types';
import { useTable, useSortBy } from 'react-table'

export function DataTable<Record>({ columns, data }: DataTableProps<Record>) {
  // @ts-ignore
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,} = useTable({columns, data,}, useSortBy)

  return (
    <table className="table" {...getTableProps()}>
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column: any) => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
              {column.render('Header')}
              <span>
                  {column.isSorted && <i className={`fas ${column.isSortedDesc ? 'fa-caret-down' : 'fa-caret-up'}`} />}
                </span>
            </th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              )
            })}
          </tr>
        )}
      )}
      </tbody>
    </table>
  )
}
