import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import DateFnsUtils from '@date-io/date-fns';
import { es } from 'date-fns/locale';

import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import { DatePickerContainer } from '../AddWaiter/AddWaiter.styles';
import { WaitersContext } from '../../../../../../services/waiters/waiters.context';
import {
   FormContainer,
   TextInput,
   MainForm,
   DescriptionForm,
   MainButton,
   CancelButton,
} from '../../products/AddProduct/AddProduct.styles';

const EditWaiter = ({ idWaiter, clicked }) => {
   const { register, handleSubmit } = useForm();
   const [selectedDate, handleDateChange] = useState(new Date());
   const { getWaiter, modifyWaiter } = useContext(WaitersContext);
   let waiter = getWaiter(idWaiter);

   const onSubmit = (data) => {
      console.log(data);
      modifyWaiter(idWaiter, data);
      clicked();
   };
   return (
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
         <MainForm>
            <label>Nombre</label>
            <TextInput defaultValue={waiter.name} {...register('name')} />
            <label>DNI</label>
            <TextInput defaultValue={waiter.DNI} {...register('DNI')} />
            <CancelButton onClick={clicked}>Cancelar</CancelButton>
         </MainForm>
         <DescriptionForm>
            <MuiPickersUtilsProvider locale={es} utils={DateFnsUtils}>
               <DatePickerContainer>
                  <DatePicker
                     disableFuture
                     defaultValue={waiter.dateOfBirth}
                     openTo="year"
                     clearLabel="Limpiar"
                     cancelLabel="Cancelar"
                     format="dd/MM/yyyy"
                     label="Fecha de nacimiento"
                     views={['year', 'month', 'date']}
                     value={selectedDate}
                     onChange={handleDateChange}
                  />
               </DatePickerContainer>
               <label>Dirección</label>
               <TextInput
                  defaultValue={waiter.address}
                  {...register('address')}
               />
               <label>Teléfono</label>
               <TextInput
                  defaultValue={waiter.telephone}
                  {...register('telephone')}
               />
            </MuiPickersUtilsProvider>
            <MainButton type="submit" value="Guardar Mozo" />
         </DescriptionForm>
      </FormContainer>
   );
};

export default EditWaiter;
