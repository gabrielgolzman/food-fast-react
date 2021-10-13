import { useContext, useState } from 'react';

import local from './local';
import { InvoicesContext } from '../../services/invoices/invoices.context';

import MaterialTable from 'material-table';
import Modal from '../util/ui/modals/Modal';

const InvoicesTable = () => {
   const [showModal, setShowModal] = useState(false);
   const [type, setType] = useState('');
   const [idInvoice, setIdInvoice] = useState(null);
   const { invoices, toggleServed, togglePayed } = useContext(InvoicesContext);

   const columns1 = [
      { title: 'Número de pedido', field: 'invoiceNumber' },
      { title: 'Fecha de emisión', field: 'createdAt', type: 'datetime' },
      { title: 'Total', field: 'total', type: 'currency' },
   ];

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
                     actionClicked('view-invoice', rowData._id),
               },
               (rowData) => ({
                  icon: rowData.isServed ? 'check' : 'fastfood',
                  tooltip: rowData.isServed
                     ? 'pedido no servido'
                     : 'pedido servido',
                  onClick: (event, rowData) => toggleServed(rowData._id),
               }),
               (rowData) => ({
                  icon: rowData.isPayed ? 'check' : 'money-variant',
                  tooltip: rowData.isPayed
                     ? 'pedido pagado'
                     : 'pedido aún no pagado',
                  onClick: (event, rowData) => togglePayed(rowData._id),
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
