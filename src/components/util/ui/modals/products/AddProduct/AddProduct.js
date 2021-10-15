import { useContext } from 'react';
import Switch from '@mui/material/Switch';
import { useForm, Controller } from 'react-hook-form';

import { ProductsContext } from '../../../../../../services/products/products.context';
import {
   FormContainer,
   TextInput,
   TextAreaInput,
   MainForm,
   DescriptionForm,
   MainButton,
   CancelButton,
} from './AddProduct.styles';

const AddProduct = ({ clicked }) => {
   const { register, handleSubmit, control } = useForm({
      defaultValues: {
         switch: true,
      },
   });
   const { addProduct } = useContext(ProductsContext);

   const onSubmit = (data) => {
      addProduct({
         optionName: data.optionName,
         category: data.category,
         description: data.description,
         unitPrice: data.unitPrice,
         isAvailable: data.switch,
         isDeleted: false,
      });
      clicked();
   };
   return (
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
         <MainForm>
            <label>Nombre</label>
            <TextInput required {...register('optionName')} />
            <label>Categoría</label>
            <TextInput required {...register('category')} />
            <div style={{ width: '100%' }}>
               <label>¿Disponible?</label>
               <Controller
                  name="switch"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                     <Switch
                        defaultChecked
                        required
                        onChange={(e) => onChange(e.target.checked)}
                        checked={value}
                     />
                  )}
               />
            </div>
            <label>Precio unitario</label>
            <TextInput
               required
               style={{ width: '40%' }}
               type="number"
               step="0.01"
               {...register('unitPrice')}
            />
            <CancelButton onClick={clicked}>Cancelar</CancelButton>
         </MainForm>
         <DescriptionForm>
            <label>Descripción</label>
            <TextAreaInput required {...register('description')} />
            <MainButton
               type="submit"
               title="Agregar producto"
               value="Agregar Producto"
            />
         </DescriptionForm>
      </FormContainer>
   );
};

export default AddProduct;
