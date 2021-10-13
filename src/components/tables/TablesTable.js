import { useState, useContext } from 'react';

import local from './local';
import { TablesContext } from '../../services/tables/tables.context';

import MaterialTable from 'material-table';
import Modal from '../util/ui/modals/Modal';
import DeleteModal from '../util/ui/modals/DeleteModal';

const TablesTable = () => {
   const [showModal, setShowModal] = useState(false);
   const [showDeleteModal, setShowDeleteModal] = useState(false);
   const [type, setType] = useState('');
   const [idTable, setIdTable] = useState(null);
   const { tables, resolveWarning } = useContext(TablesContext);

   let columns1 = [
      { title: 'Número de mesa', field: 'number' },
      { title: 'Capacidad', field: 'capacity' },
   ];

   const actionClicked = (type, id) => {
      setShowModal(!showModal);
      setType(type);
      setIdTable(id);
   };

   const actionDeleteClicked = (type, id) => {
      setShowDeleteModal(!showDeleteModal);
      setType(type);
      setIdTable(id);
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
            data={idTable}
            show={showModal}
            onClicked={onClicked}
         />
         <DeleteModal
            type={type}
            id={idTable}
            show={showDeleteModal}
            onClicked={onDeleteClicked}
         />
         <MaterialTable
            title="Mesas"
            columns={columns1}
            data={tables}
            actions={[
               (rowData) => ({
                  icon: 'warning',
                  tooltip: 'Consulta respondida',
                  onClick: (event, rowData) => resolveWarning(rowData._id),
                  hidden: !rowData.needsHelp,
               }),
               {
                  icon: 'add',
                  tooltip: 'Agregar Mesa',
                  isFreeAction: true,
                  onClick: (event, rowData) => actionClicked('add-table'),
               },
               {
                  icon: 'edit',
                  tooltip: 'Editar Mesa',
                  onClick: (event, rowData) =>
                     actionClicked('edit-table', rowData._id),
               },
               {
                  icon: 'delete',
                  tooltip: 'Borrar Mesa',
                  onClick: (event, rowData) =>
                     actionDeleteClicked('delete-table', rowData._id),
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

export default TablesTable;
