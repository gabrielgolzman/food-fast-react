import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthenticationContext } from '../../../../../services/auth/authentication.context';
import CircularProgress from '@mui/material/CircularProgress';

import {
   MainButton,
   TextInput,
} from '../products/AddProduct/AddProduct.styles';
import { Header } from '../invoices/ViewInvoice.styles';

const AuthModal = () => {
   const { register, handleSubmit } = useForm();
   const { onLogin, isLoading } = useContext(AuthenticationContext);

   const onSubmit = (data) => {
      onLogin(data.email, data.password);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Header>{'¡Bienvenido!'}</Header>
         <label>Email</label>
         <TextInput type="email" {...register('email')} />
         <label>Contraseña</label>
         <TextInput type="password" {...register('password')} />
         <MainButton type="submit" value="Ingresar" />
         {isLoading && <CircularProgress />}
      </form>
   );
};

export default AuthModal;
