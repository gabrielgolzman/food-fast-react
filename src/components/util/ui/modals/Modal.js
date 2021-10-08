import {
   BackgroundModal,
   BackgroundModalLarge,
   BackgroundModalAuth,
} from './Modal.styles';

import AddProduct from './products/AddProduct/AddProduct';
import EditProduct from './products/EditProduct/EditProduct';
import AddWaiter from './waiters/AddWaiter/AddWaiter';
import EditWaiter from './waiters/EditWaiter/EditWaiter';
import AddTable from './tables/AddTable/AddTable';
import EditTable from './tables/EditTable/EditTable';
import ViewInvoice from './invoices/ViewInvoice';
import AuthModal from './auth/AuthModal';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ type, data, show, onClicked }) => {
   let modal = null;
   switch (type) {
      case 'add-product':
         modal = <AddProduct clicked={onClicked} />;
         break;
      case 'edit-product':
         modal = <EditProduct idProduct={data} clicked={onClicked} />;
         break;
      case 'add-waiter':
         modal = <AddWaiter clicked={onClicked} />;
         break;
      case 'edit-waiter':
         modal = <EditWaiter idWaiter={data} clicked={onClicked} />;
         break;
      case 'add-table':
         modal = <AddTable clicked={onClicked} />;
         break;
      case 'edit-table':
         modal = <EditTable idTable={data} clicked={onClicked} />;
         break;
      case 'view-invoice':
         modal = <ViewInvoice idInvoice={data} clicked={onClicked} />;
         break;
      case 'auth':
         modal = <AuthModal />;
         break;
      default:
         modal = null;
   }

   return (
      show && (
         <>
            <Backdrop show={show} clicked={onClicked} />
            {type === 'view-invoice' ? (
               <BackgroundModalLarge>{modal}</BackgroundModalLarge>
            ) : type === 'auth' ? (
               <BackgroundModalAuth>{modal}</BackgroundModalAuth>
            ) : (
               <BackgroundModal>{modal}</BackgroundModal>
            )}
         </>
      )
   );
};

export default Modal;
