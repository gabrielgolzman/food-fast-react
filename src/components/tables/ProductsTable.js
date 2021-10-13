import { useState, useContext } from 'react';

import local from './local';
import { ProductsContext } from '../../services/products/products.context';

import MaterialTable from 'material-table';
import Modal from '../util/ui/modals/Modal';
import DeleteModal from '../util/ui/modals/DeleteModal';

const ProductsTable = () => {
   const [showModal, setShowModal] = useState(false);
   const [showDeleteModal, setShowDeleteModal] = useState(false);
   const [type, setType] = useState('');
   const [productName, setProductName] = useState('');
   const [idProduct, setIdProduct] = useState(null);
   const { products } = useContext(ProductsContext);

   const columns1 = [
      { title: 'Nombre', field: 'optionName' },
      { title: 'Categoría', field: 'category' },
      { title: 'Precio Unitario', field: 'unitPrice', type: 'currency' },
      { title: '¿Disponible?', field: 'isAvailable', type: 'boolean' },
   ];
   const actionClicked = (type, id) => {
      setShowModal(!showModal);
      setType(type);
      setIdProduct(id);
   };

   const actionDeleteClicked = (type, id, name) => {
      setShowDeleteModal(!showDeleteModal);
      setType(type);
      setIdProduct(id);
      setProductName(name);
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
            data={idProduct}
            show={showModal}
            onClicked={onClicked}
         />
         <DeleteModal
            type={type}
            text={productName}
            id={idProduct}
            show={showDeleteModal}
            onClicked={onDeleteClicked}
         />
         <MaterialTable
            title="Productos"
            columns={columns1}
            data={products}
            actions={[
               {
                  icon: 'add',
                  tooltip: 'Agregar Producto',
                  isFreeAction: true,
                  onClick: (event) => actionClicked('add-product'),
               },
               {
                  icon: 'edit',
                  tooltip: 'Editar Producto',
                  onClick: (event, rowData) =>
                     actionClicked('edit-product', rowData._id),
               },
               {
                  icon: 'delete',
                  tooltip: 'Borrar producto',
                  onClick: (event, rowData) =>
                     actionDeleteClicked(
                        'delete-product',
                        rowData._id,
                        rowData.optionName
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

export default ProductsTable;
