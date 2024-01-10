import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TextField from '@mui/material/TextField';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(franja, consumoAnual, consumoFacturaActual, precioMedioAnual, precioMesFacturacion, descuento) {
  return { franja, consumoAnual, consumoFacturaActual, precioMedioAnual, precioMesFacturacion, descuento };
}

function createDataTotales(precioDescuento, totalPagoFactura, totalPagoAnual) {
  return { precioDescuento, totalPagoFactura, totalPagoAnual };
}

const FormEnergy = () => {
  const rows = [
    createData('P1', '', '', '', '', ''),
    createData('P2', '', '', '', '', ''),
    createData('P3', '', '', '', '', ''),
  ];

  const rowsTotales = [
    createDataTotales('', '', ''),
    createDataTotales('', '', ''),
    createDataTotales('', '', ''),
  ];

  const [rowsData, setRowsData] = useState(rows);
  const [totalesRows, setTotalesRows] = useState(rowsTotales);

  const handleChange = (index, column, value) => {
    const newRows = rowsData.map((row, i) => {
      if (i === index) {
        return { ...row, [column]: value };
      }
      return row;
    });
    setRowsData(newRows);
  };

  const handleTotalesChange = (index, column, value) => {
    const newTotalesRows = totalesRows.map((row, i) => {
      if (i === index) {
        return { ...row, [column]: value };
      }
      return row;
    });
    setTotalesRows(newTotalesRows);
  };

  return (<>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth:500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Franja</TableCell>
            <TableCell align="right">Consumo anual</TableCell>
            <TableCell align="right">Consumo factura actual</TableCell>
            <TableCell align="right">Precio media anual</TableCell>
            <TableCell align="right">Precio mes de facturación</TableCell>
            <TableCell align="right">Descuento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData.map((row, index) => (
            <TableRow key={row.franja}>
              <TableCell component="th" scope="row">
                {row.franja}
              </TableCell>
              <TableCell align="right">
                <TextField
                  size="small"
                  value={row.consumoAnual}
                  onChange={(e) => handleChange(index, 'consumoAnual', e.target.value)}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  size="small"
                  value={row.consumoFacturaActual}
                  onChange={(e) => handleChange(index, 'consumoFacturaActual', e.target.value)}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  size="small"
                  value={row.precioMedioAnual}
                  onChange={(e) => handleChange(index, 'precioMedioAnual', e.target.value)}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  size="small"
                  value={row.precioMesFacturacion}
                  onChange={(e) => handleChange(index, 'precioMesFacturacion', e.target.value)}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  size="small"
                  value={row.descuento}
                  onChange={(e) => handleChange(index, 'descuento', e.target.value)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* tabla de totales*/}

    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="summary table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Precio con descuento</TableCell>
              <TableCell align="right">Total pago factura</TableCell>
              <TableCell align="right">Total pago anual</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {totalesRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="right">
                  <TextField
                    size="small"
                    value={row.precioDescuento}
                    onChange={(e) => handleTotalesChange(index, 'precioDescuento', e.target.value)}
                  />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    size="small"
                    value={row.totalPagoFactura}
                    onChange={(e) => handleTotalesChange(index, 'totalPagoFactura', e.target.value)}
                  />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    size="small"
                    value={row.totalPagoAnual}
                    onChange={(e) => handleTotalesChange(index, 'totalPagoAnual', e.target.value)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        <Button variant="contained" color="primary">Ver tabla completa</Button>
        <Button variant="contained" color="secondary">Continuar</Button>
      </div>
    </>
  );
};

export default FormEnergy;