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

const EditWaiter = ({ idTable, clicked }) => {
   const { register, handleSubmit } = useForm();
   const { getTable, modifyTable } = useContext(TablesContext);
   let table = getTable(idTable);

   const onSubmit = (data) => {
      modifyTable(idTable, data);
      clicked();
   };
   return (
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
         <MainForm>
            <label>Número de mesa</label>
            <TextInput defaultValue={table.number} {...register('number')} />
            <CancelButton onClick={clicked}>Cancelar</CancelButton>
         </MainForm>
         <DescriptionForm>
            <label>Capacidad</label>
            <TextInput
               defaultValue={table.capacity}
               {...register('capacity')}
            />
            <MainButton type="submit" value="Guardar Mesa" />
         </DescriptionForm>
      </FormContainer>
   );
};

export default EditWaiter;
