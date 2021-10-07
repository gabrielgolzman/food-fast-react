import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { TablesContext } from '../../../../../../services/tables/tables.context';
import {
   FormContainer,
   TextInput,
   MainForm,
   DescriptionForm,
   MainButton,
   CancelButton,
} from '../../products/AddProduct/AddProduct.styles';

const AddTable = ({ clicked }) => {
   const { register, handleSubmit } = useForm();
   const { addTable } = useContext(TablesContext);

   const onSubmit = (data) => {
      addTable({
         id: Math.random().toFixed(2),
         number: data.number,
         capacity: data.capacity,
      });
      clicked();
   };
   return (
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
         <MainForm>
            <label>Número de mesa</label>
            <TextInput type="number" step="1" min="0" {...register('number')} />
            <CancelButton onClick={clicked}>Cancelar</CancelButton>
         </MainForm>
         <DescriptionForm>
            <label>Capacidad</label>
            <TextInput
               type="number"
               step="1"
               min="0"
               {...register('capacity')}
            />
            <MainButton type="submit" value="Agregar Mesa" />
         </DescriptionForm>
      </FormContainer>
   );
};

export default AddTable;
