import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import {useTable} from 'react-table';

interface Props{ 
    columns:Array<any>;
    data:Array<{
        id:number,
        first_name:string,
        last_name:string,
        email:string,
        gender:string,
        }>;
}

export const  TableR: React.FC<Props>=({columns,data})=> {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data,
      })
    return (
        <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup:any) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column:any) => (
              <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row:any, i:number) => {
          prepareRow(row)
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell:any) => {
                return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
              })}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
    )
}