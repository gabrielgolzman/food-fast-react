import { useState } from 'react';

import local from './local';

import MaterialTable from 'material-table';
import Modal from '../util/ui/modals/Modal';

const ProductsTable = () => {
   let mock = require('../../data/mock.json');
   const columns1 = [
      { title: 'Nombre', field: 'optionName' },
      { title: 'Precio Unitario', field: 'unitPrice', type: 'currency' },
      { title: '¿Disponible?', field: 'isAvailable', type: 'boolean' },
   ];
   const addProduct = () => {
      setShowModal((prevProps) => !prevProps.show);
   };
   const [showModal, setShowModal] = useState(false);

   const onClicked = () => {
      setShowModal(!showModal);
   };
   return (
      <>
         <Modal type="add-product" show={showModal} onClicked={onClicked} />
         <MaterialTable
            title="Productos"
            columns={columns1}
            data={mock.menuOptions}
            actions={[
               {
                  icon: 'add',
                  tooltip: 'Agregar Producto',
                  isFreeAction: true,
                  onClick: (event) => addProduct(),
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
      </>
   );
};

export default ProductsTable;
