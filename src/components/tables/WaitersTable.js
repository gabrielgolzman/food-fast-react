import local from './local';

import MaterialTable from 'material-table';

let mock = require('../../data/mock.json');
let columns1 = [
   { title: 'Nombre', field: 'name' },
   { title: 'DNI', field: 'DNI' },
   { title: 'Teléfono', field: 'telephone' },
   { title: 'Dirección', field: 'address' },
];
const WaitersTable = () => {
   return (
      <div>
         <MaterialTable
            title="Mozos"
            columns={columns1}
            data={mock.waiters}
            actions={[
               {
                  icon: 'add',
                  tooltip: 'Agregar Mozo',
                  isFreeAction: true,
                  onClick: (event) => alert('You want to add a new row'),
               },
               {
                  icon: 'edit',
                  tooltip: 'Editar Mozo',
                  //onClick: (event, rowData) => alert("You saved " + rowData.name)
               },
               (rowData) => ({
                  icon: 'delete',
                  tooltip: 'Borrar Mozo',
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

export default WaitersTable;
