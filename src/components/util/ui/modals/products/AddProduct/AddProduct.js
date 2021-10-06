import Switch from '@mui/material/Switch';
import { useForm, Controller } from 'react-hook-form';

import {
   FormContainer,
   TextInput,
   TextAreaInput,
   MainForm,
   DescriptionForm,
   AddButton,
   CancelButton,
} from './AddProduct.styles';

const AddProduct = ({ clicked }) => {
   const { register, handleSubmit, control } = useForm();

   const onSubmit = (data) => console.log(data);

   return (
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
         <MainForm>
            <label>Nombre</label>
            <TextInput {...register('productName')} />
            <div style={{ width: '100%' }}>
               <label>¿Disponible?</label>
               <Controller
                  name="switch"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                     <Switch
                        defaultChecked
                        onChange={(e) => onChange(e.target.checked)}
                        checked={value}
                     />
                  )}
               />
            </div>
            <label>Precio unitario</label>
            <TextInput
               style={{ width: '40%' }}
               type="number"
               step="0.01"
               {...register('unitPrice')}
            />
            <CancelButton onClick={clicked}>Cancelar</CancelButton>
         </MainForm>
         <DescriptionForm>
            <label>Descripción</label>
            <TextAreaInput {...register('description')} />
            <AddButton
               type="submit"
               title="Agregar producto"
               value="Agregar Producto"
            />
         </DescriptionForm>
      </FormContainer>
   );
};

export default AddProduct;
