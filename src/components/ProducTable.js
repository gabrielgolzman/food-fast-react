import MaterialTable from 'material-table';

let mock = require('../data/mock.json');
let columns1 = [
   { title: 'Nombre', field: 'optionName' },
   { title: 'Precio Unitario', field: 'unitPrice', type: 'currency' },
   { title: '¿Disponible?', field: 'isAvailable', type: 'boolean' },
];
const ProductTable = () => {
   return (
      <div>
         <MaterialTable
            title="Productos"
            columns={columns1}
            data={mock.menuOptions}
            actions={[
               {
                  icon: 'edit',
                  tooltip: 'Edit Item',
                  //onClick: (event, rowData) => alert("You saved " + rowData.name)
               },
               (rowData) => ({
                  icon: 'delete',
                  tooltip: 'Delete Item',
                  //onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
                  //disabled: rowData.birthYear < 2000
               }),
            ]}
            options={{
               actionsColumnIndex: -1,
            }}
            localization={{
               body: {
                  emptyDataSourceMessage: 'No hay datos para mostrar',
                  addTooltip: 'Agregar',
                  deleteTooltip: 'Eliminar',
                  editTooltip: 'Editar',
                  filterRow: {
                     filterTooltip: 'Filtrar',
                  },
                  editRow: {
                     deleteText: 'Seguro que quiere borrar esta linea?',
                     cancelTooltip: 'Cancelar',
                     saveTooltip: 'Guardar',
                  },
               },
               grouping: {
                  placeholder: 'Titulo del encabezado ...',
                  groupedBy: 'Agrupar por:',
               },
               header: {
                  actions: 'Acciones',
               },
               pagination: {
                  labelDisplayedRows: '{from}-{to} de {count}',
                  labelRowsSelect: 'lineas',
                  labelRowsPerPage: 'lineas por páginas:',
                  firstAriaLabel: 'Primer página',
                  firstTooltip: 'Primer página',
                  previousAriaLabel: 'Página anterior',
                  previousTooltip: 'Página anterior',
                  nextAriaLabel: 'Página siguiente',
                  nextTooltip: 'Página siguiente',
                  lastAriaLabel: 'Última página',
                  lastTooltip: 'Última página',
               },
               toolbar: {
                  addRemoveColumns: 'Agregar o quitar columnas',
                  nRowsSelected: '{0} linea(s) seleccionada(s)',
                  showColumnsTitle: 'Ver columnas',
                  showColumnsAriaLabel: 'Ver columnas',
                  exportTitle: 'Exportar',
                  exportAriaLabel: 'Exportar',
                  exportName: 'Exportar a CSV',
                  searchTooltip: 'Buscar',
                  searchPlaceholder: 'Buscar',
               },
            }}
         />
      </div>
   );
};

export default ProductTable;
