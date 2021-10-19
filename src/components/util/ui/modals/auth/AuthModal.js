import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthenticationContext } from '../../../../../services/auth/authentication.context';
import CircularProgress from '@mui/material/CircularProgress';

import {
   MainButton,
   TextInput,
} from '../products/AddProduct/AddProduct.styles';
import { Header } from '../invoices/ViewInvoice.styles';
import { FormContainer, ErrorText, ButtonContainer } from './AuthModal.styles';

const AuthModal = () => {
   const { register, handleSubmit } = useForm();
   const { onLogin, isLoading, error } = useContext(AuthenticationContext);

   const onSubmit = (data) => {
      onLogin(data.email, data.password);
   };

   return (
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
         <Header>{'¡Bienvenido!'}</Header>
         <label>Email</label>
         <TextInput
            style={{ width: '70%', marginBottom: '10px' }}
            type="email"
            autoComplete="email"
            {...register('email')}
         />
         <label>Contraseña</label>
         <TextInput
            style={{ width: '70%', marginBottom: '10px' }}
            type="password"
            {...register('password')}
         />
         {error && <ErrorText>{error}</ErrorText>}
         <ButtonContainer>
            {isLoading ? (
               <CircularProgress color="warning" />
            ) : (
               <MainButton
                  style={{ margin: '0 0 40px 0' }}
                  type="submit"
                  value="Iniciar sesión"
               />
            )}
         </ButtonContainer>
      </FormContainer>
   );
};

export default AuthModal;
