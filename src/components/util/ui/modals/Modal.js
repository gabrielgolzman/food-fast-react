import { BackgroundModal } from './Modal.styles';

import AddProduct from './products/AddProduct/AddProduct';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ type, data, show, onClicked }) => {
   let modal = null;
   switch (type) {
      case 'add-product':
         modal = <AddProduct clicked={onClicked} />;
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
