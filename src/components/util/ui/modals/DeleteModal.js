import { useContext } from 'react';

import {
   BackgroundDeleteModal,
   HighLightText,
   TextContainer,
   ButtonsContainer,
   ButtonContainer,
} from './DeleteModal.styles';

import {
   MainButton,
   CancelButton,
} from './products/AddProduct/AddProduct.styles';
import { ProductsContext } from '../../../../services/products/products.context';

import Backdrop from '../Backdrop/Backdrop';

const DeleteModal = ({ type, text, id, show, onClicked }) => {
   const { deleteProduct } = useContext(ProductsContext);
   let modalText = '';
   switch (type) {
      case 'delete-product':
         modalText = (
            <p>
               ¿Desea eliminar el producto
               <HighLightText> {text} </HighLightText>?
            </p>
         );
         break;
      case 'waiter':
         modalText = (
            <p>
               ¿Desea eliminar el mozo <span>{text}</span>?
            </p>
         );
         break;
      case 'reservation':
         modalText = <p>¿Desea eliminar la reserva seleccionada ?</p>;
         break;
      default:
         modalText = null;
   }

   const deleteObject = () => {
      switch (type) {
         case 'delete-product':
            deleteProduct(id);
            onClicked();
            break;
         default:
            break;
      }
   };

   return (
      show && (
         <>
            <Backdrop show={show} clicked={onClicked} />
            <BackgroundDeleteModal>
               <TextContainer>{modalText}</TextContainer>
               <ButtonsContainer>
                  <ButtonContainer>
                     <MainButton
                        type="submit"
                        onClick={onClicked}
                        value="Volver"
                     />
                  </ButtonContainer>
                  <ButtonContainer>
                     <CancelButton type="submit" onClick={deleteObject}>
                        Eliminar
                     </CancelButton>
                  </ButtonContainer>
               </ButtonsContainer>
            </BackgroundDeleteModal>
         </>
      )
   );
};

export default DeleteModal;
