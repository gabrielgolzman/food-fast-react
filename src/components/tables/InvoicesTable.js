import local from './local';

import MaterialTable from 'material-table';

let mock = require('../../data/mock.json');
let columns1 = [
   { title: 'Número de pedido', field: 'invoiceNumber' },
   { title: 'Total', field: 'total', type: 'currency' },
];
const InvoicesTable = () => {
   return (
      <div>
         <MaterialTable
            title="Pedidos"
            columns={columns1}
            data={mock.invoices}
            actions={[
               (rowData) => ({
                  icon: 'visibility',
                  tooltip: 'Ver pedido',
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

export default InvoicesTable;
