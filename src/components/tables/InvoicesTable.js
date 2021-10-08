import { useContext, useState } from 'react';

import local from './local';
import { InvoicesContext } from '../../services/invoices/invoices.context';

import MaterialTable from 'material-table';
import Modal from '../util/ui/modals/Modal';

let columns1 = [
   { title: 'Número de pedido', field: 'invoiceNumber' },
   { title: 'Fecha de emisión', field: 'emissionDate', type: 'datetime' },
   { title: 'Total', field: 'total', type: 'currency' },
];
const InvoicesTable = () => {
   const [showModal, setShowModal] = useState(false);
   const [type, setType] = useState('');
   const [idInvoice, setIdInvoice] = useState(null);
   const { invoices } = useContext(InvoicesContext);

   const actionClicked = (type, id) => {
      setShowModal(!showModal);
      setType(type);
      setIdInvoice(id);
   };

   const onClicked = () => {
      setShowModal(!showModal);
   };

   return (
      <div>
         <Modal
            type={type}
            data={idInvoice}
            show={showModal}
            onClicked={onClicked}
         />
         <MaterialTable
            title="Pedidos"
            columns={columns1}
            data={invoices}
            actions={[
               {
                  icon: 'visibility',
                  tooltip: 'Ver pedido',
                  onClick: (event, rowData) =>
                     actionClicked('view-invoice', rowData.idInvoice),
                  //disabled: rowData.birthYear < 2000
               },
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
