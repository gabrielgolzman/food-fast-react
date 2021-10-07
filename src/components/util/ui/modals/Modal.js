import { BackgroundModal } from './Modal.styles';

import AddProduct from './products/AddProduct/AddProduct';
import EditProduct from './products/EditProduct/EditProduct';
import AddWaiter from './waiters/AddWaiter/AddWaiter';
import EditWaiter from './waiters/EditWaiter/EditWaiter';
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
      default:
         modal = null;
   }

   return (
      show && (
         <>
            <Backdrop show={show} clicked={onClicked} />
            <BackgroundModal>{modal}</BackgroundModal>
         </>
      )
   );
};

export default Modal;
