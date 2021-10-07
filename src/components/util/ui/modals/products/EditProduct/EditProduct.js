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
} from '../AddProduct/AddProduct.styles';

const EditProduct = ({ idProduct, clicked }) => {
   const { register, handleSubmit, control } = useForm({
      defaultValues: {
         switch: true,
      },
   });
   const { getProduct, modifyProduct } = useContext(ProductsContext);
   let product = getProduct(idProduct);

   const onSubmit = (data) => {
      modifyProduct(idProduct, data);
      clicked();
   };
   return (
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
         <MainForm>
            <label>Nombre</label>
            <TextInput
               defaultValue={product.optionName}
               {...register('optionName')}
            />
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
               defaultValue={product.unitPrice}
               step="0.01"
               {...register('unitPrice')}
            />
            <CancelButton onClick={clicked}>Cancelar</CancelButton>
         </MainForm>
         <DescriptionForm>
            <label>Descripción</label>
            <TextAreaInput
               defaultValue={product.description}
               {...register('description')}
            />
            <MainButton type="submit" value="Guardar Producto" />
         </DescriptionForm>
      </FormContainer>
   );
};

export default EditProduct;
