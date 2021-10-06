import local from './local';

import MaterialTable from 'material-table';

let mock = require('../../data/mock.json');
let columns1 = [
   { title: 'Número de mesa', field: 'number' },
   { title: 'Capacidad', field: 'capacity' },
];
const TablesTable = () => {
   return (
      <div>
         <MaterialTable
            title="Mesas"
            columns={columns1}
            data={mock.tables}
            actions={[
               {
                  icon: 'add',
                  tooltip: 'Agregar Mesa',
                  isFreeAction: true,
                  onClick: (event) => alert('You want to add a new row'),
               },
               {
                  icon: 'edit',
                  tooltip: 'Editar Mesa',
                  //onClick: (event, rowData) => alert("You saved " + rowData.name)
               },
               (rowData) => ({
                  icon: 'delete',
                  tooltip: 'Borrar Mesa',
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

export default TablesTable;
