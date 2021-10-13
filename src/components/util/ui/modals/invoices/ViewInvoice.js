import { useContext } from 'react';

import { InvoicesContext } from '../../../../../services/invoices/invoices.context';
import {
   Header,
   BoldText,
   ResumeContainer,
   ResumeRow,
   BottomContainer,
} from './ViewInvoice.styles';
import { MainButton } from '../products/AddProduct/AddProduct.styles';

const ViewInvoice = ({ idInvoice, clicked }) => {
   const { getInvoice } = useContext(InvoicesContext);
   let invoice = getInvoice(idInvoice);

   const resume = invoice.details.map((invDet) => (
      <ResumeRow>
         <p>x{invDet.quantity}</p>
         <p>{invDet.title}</p>
         <p>${invDet.unitPrice}</p>
      </ResumeRow>
   ));

   return (
      <>
         <Header>Pedido N° {invoice.invoiceNumber}</Header>
         <p>
            <BoldText> Fecha: </BoldText> {invoice.createdAt}
         </p>
         <ResumeContainer>{resume}</ResumeContainer>
         <BottomContainer>
            <BoldText>Total: ${invoice.total}</BoldText>
            <MainButton onClick={clicked} type="submit" value="Volver" />
         </BottomContainer>
      </>
   );
};

export default ViewInvoice;
