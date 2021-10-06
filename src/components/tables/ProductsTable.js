import local from './local';

import MaterialTable from 'material-table';

let mock = require('../../data/mock.json');
let columns1 = [
   { title: 'Nombre', field: 'optionName' },
   { title: 'Precio Unitario', field: 'unitPrice', type: 'currency' },
   { title: '¿Disponible?', field: 'isAvailable', type: 'boolean' },
];
const ProductsTable = () => {
   return (
      <div>
         <MaterialTable
            title="Productos"
            columns={columns1}
            data={mock.menuOptions}
            actions={[
               {
                  icon: 'add',
                  tooltip: 'Agregar Producto',
                  isFreeAction: true,
                  onClick: (event) => alert('You want to add a new row'),
               },
               {
                  icon: 'edit',
                  tooltip: 'Editar Producto',
                  //onClick: (event, rowData) => alert("You saved " + rowData.name)
               },
               (rowData) => ({
                  icon: 'delete',
                  tooltip: 'Borrar producto',
                  //onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
                  //disabled: rowData.birthYear < 2000
               }),
            ]}
            options={{
               actionsColumnIndex: -1,
            }}
            localization={local}
         />
      </div>
   );
};

export default ProductsTable;
