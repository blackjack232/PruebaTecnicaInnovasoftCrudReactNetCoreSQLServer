import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useEffect,useState } from 'react';
const columns = [
  { id: 'idUsuario', label: 'ID Usuario', minWidth: 5},
  { id: 'plan', label: 'Plan', minWidth: 10,align: 'center' },
  {
    id: 'proceso',
    label: 'Proceso',
    minWidth: 50,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'nombreCliente',
    label: 'Nombre Cliente',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'telefono',
    label: 'Telefono',
    minWidth: 50,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'estado',
    label: 'Estado',
    minWidth: 50,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function createData(idUsuario, plan,proceso , nombreCliente, telefono,estado) {
  // const density = population / size;
  return { idUsuario, plan,proceso , nombreCliente, telefono,estado};
}

// const rows = [
//   createData('1', 'No tiene', 'Cotizacion','Fredy Alexander España Garcia', '3287263','En proceso'),
//   createData('2', 'No tiene', 'Datos','Fredy Alexander España Garcia', '3287263','En proceso'),
//   createData('3', 'Basico', 'Pago','Fredy Alexander España Garcia', '3287263','En proceso'),
//   createData('4', 'Premium ', 'Determindo','Arturo Calle', '3287263','En proceso'),
//   createData('5', 'Integral', 'Datos','Andrea aguilar', '3287263','En proceso'),
//   createData('6', 'No tiene', 'pago','Fredy Alexander España Garcia', '3287263','En proceso'),
//   createData('7', 'No Basico', 'Cotizacion','Pedro Luis ', '3287263','En proceso'),
//   createData('8', 'Premium ', 'Determindo','Arturo Calle', '3287263','En proceso'),
//   createData('9', 'Integral', 'Datos','Andrea aguilar', '3287263','En proceso'),
//   createData('10', 'No tiene', 'pago','Fredy Alexander España Garcia', '3287263','En proceso'),
//   createData('11', 'No Basico', 'Cotizacion','Pedro Luis ', '3287263','En proceso'),
 
// ];

let rows=[];

export default function StickyHeadTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows2, setRows] = useState();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const arregloNUevo =()=>{
    
    if(rows2){
      for (let i = 0; i < rows2.length; i++) {
        (rows.push(createData(rows2[i].id,rows2[i].plan,
          rows2[i].proceso,rows2[i].nombre,rows2[i].telefonoCelular,rows2[i].estado)))
        
    }
    }
    else{
      console.log("no haga nada")
    }
   
  }
  useEffect(() => {

     
      setRows(props.props);
      console.log("estamos desde la tabla",rows2)
      arregloNUevo();

     
      // createData(rows2)
   
   

  }, [props.props])

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth ,fontWeight:'100',backgroundColor:'#006db3',color:'white'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
