import { useState, useContext } from 'react';
import MaterialTable from 'material-table';

import local from './local';
import { WaitersContext } from '../../services/waiters/waiters.context';

import Modal from '../util/ui/modals/Modal';
import DeleteModal from '../util/ui/modals/DeleteModal';

const WaitersTable = () => {
   const [showModal, setShowModal] = useState(false);
   const [showDeleteModal, setShowDeleteModal] = useState(false);
   const [type, setType] = useState('');
   const [waiterName, setWaiterName] = useState('');
   const [idWaiter, setIdWaiter] = useState(null);
   const { waiters } = useContext(WaitersContext);

   let columns1 = [
      { title: 'Nombre', field: 'name' },
      { title: 'DNI', field: 'DNI' },
      { title: 'Fecha de nacimiento', field: 'dateOfBirth', type: 'date' },
      { title: 'Teléfono', field: 'telephone' },
      { title: 'Dirección', field: 'address' },
   ];

   const actionClicked = (type, id) => {
      setShowModal(!showModal);
      setType(type);
      setIdWaiter(id);
   };

   const actionDeleteClicked = (type, id, name) => {
      setShowDeleteModal(!showDeleteModal);
      setType(type);
      setIdWaiter(id);
      setWaiterName(name);
   };

   const onClicked = () => {
      setShowModal(!showModal);
   };
   const onDeleteClicked = () => {
      setShowDeleteModal(!showDeleteModal);
   };

   return (
      <>
         <Modal
            type={type}
            data={idWaiter}
            show={showModal}
            onClicked={onClicked}
         />
         <DeleteModal
            type={type}
            text={waiterName}
            id={idWaiter}
            show={showDeleteModal}
            onClicked={onDeleteClicked}
         />
         <MaterialTable
            title="Mozos"
            columns={columns1}
            data={waiters}
            actions={[
               {
                  icon: 'add',
                  tooltip: 'Agregar Mozo',
                  isFreeAction: true,
                  onClick: (event, rowData) =>
                     actionClicked('add-waiter', rowData.id),
               },
               {
                  icon: 'edit',
                  tooltip: 'Editar Mozo',
                  onClick: (event, rowData) =>
                     actionClicked('edit-waiter', rowData.id),
               },
               {
                  icon: 'delete',
                  tooltip: 'Borrar Mozo',
                  onClick: (event, rowData) =>
                     actionDeleteClicked(
                        'delete-waiter',
                        rowData.id,
                        rowData.name
                     ),
               },
            ]}
            options={{
               actionsColumnIndex: -1,
            }}
            localization={local}
         />
      </>
   );
};

export default WaitersTable;
