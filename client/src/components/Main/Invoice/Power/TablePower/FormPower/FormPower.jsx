import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import './FormPower.css';

const FormPower = () => {
  // Definir datos iniciales
  const initialRowData = [
    { franja: 'P1', potenciaContratada: 'HOLA', precioPotencial: '', descuento: '' , cellClass: 'custom-cell'},
    { franja: 'P2', potenciaContratada: 'HOLA', precioPotencial: '', descuento: '', cellClass: 'custom-cell' },
    { franja: 'Margen Fijo', potenciaContratada: '', precioPotencial: '', descuento: '', cellClass: 'custom-cell' },
  ];

  const [rowData, setRowData] = useState(initialRowData);

  // Definir columnas para la primera tabla
  const colDefs = [
    { headerName: 'Franja', field: 'franja', editable: false, cellClass: 'custom-cell' },
    { headerName: 'Potencia Contratada', field: 'potenciaContratada', editable: true, cellClass: 'custom-cell2' },
    { headerName: '🧮 Precio Potencial', field: 'precioPotencial', editable: true, cellClass: 'custom-cell3' },
    { headerName: 'Descuento %€', field: 'descuento', editable: true, cellClass: 'custom-cell2' },
  ];

  // Definir columnas para la segunda tabla
  const colDefsSecondTable = [
    { headerName: 'Precio con descuento', field: 'precioConDescuento', editable: true, cellClass: 'custom-cell2' },
    { headerName: 'Total pago factura', field: 'totalPagoFactura', editable: true, cellClass: 'custom-cell3' },
    { headerName: 'Total pago anual', field: 'totalPagoAnual', editable: true, cellClass: 'custom-cell2' },
  ];

  // Configuración adicional de la tabla
  const gridOptions = {
    suppressCellSelection: true, // Evitar la selección de celdas
  };

  const handleVerTablaClick = () => {
    // Add logic for "Ver Tabla Completa" button click
    console.log('Ver Tabla Completa clicked');
    // You can perform any other actions here
  };

  const handleContinuarClick = () => {
    // Add logic for "Continuar" button click
    console.log('Continuar clicked');
    // You can perform any other actions here
  };

  return (
    <div>
      <div className="ag-theme-quartz" style={{ height: '176px', width: '800px',margin:"40px" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          gridOptions={gridOptions}
        />
      </div>

      <div style={{ margin: '20px auto' }}> 
        <div className="ag-theme-quartz" style={{ height: '170px', width: '600px', margin: '40px' }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefsSecondTable}
            gridOptions={gridOptions}
          />
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '30px' }}>
        <button onClick={handleVerTablaClick} className="button1">Ver Tabla Completa</button>
      </div>
      <div style={{ textAlign: 'center', margin: '30px' }}>
        <button onClick={handleContinuarClick} className="button2">Continuar</button>
      </div>
    </div>
  );
};

export default FormPower;

