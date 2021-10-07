import local from './local';

import MaterialTable from 'material-table';

let mock = require('../../data/mock.json');
let columns1 = [
   { title: 'Fecha-Hora', field: 'dateAndHourFrom', type: 'datetime' },
   { title: 'Cantidad de personas', field: 'qtyPersons', type: 'numeric' },
   { title: 'Estado', field: 'state', type: 'string' },
   {
      title: 'Número de mesa',
      field: 'idTable',
      type: 'numeric',
   },
];
const ReservationsTable = () => {
   return (
      <div>
         <MaterialTable
            title="Reservas"
            columns={columns1}
            data={mock.reservations}
            actions={[
               (rowData) => ({
                  icon: 'delete',
                  tooltip: 'Borrar reserva',
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

export default ReservationsTable;
