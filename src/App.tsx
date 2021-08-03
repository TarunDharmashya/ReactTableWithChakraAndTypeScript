import React from 'react';
import './App.css';
import  Data from './MOCK_DATA.json'
import { ChakraProvider } from '@chakra-ui/react';
import { TableR } from './Table';

function App() {
const data = React.useMemo(()=> Data,[])

  const columns = React.useMemo(
    () => [
            {
              Header:'S.No',
              accessor:'id',
            },
            {
              Header: 'First Name',
              accessor: 'first_name',
            },
            {
              Header: 'Last Name',
              accessor: 'last_name',
            },     
            {
              Header: 'Email',
              accessor: 'email',
            },
            {
              Header: 'Gender',
              accessor: 'gender',
            },
          ],[]
  )
  
  return (
    <div className="App">
      <ChakraProvider>
      <TableR columns={columns} data={data} />
      </ChakraProvider>
    </div>
  );
}

export default App;
