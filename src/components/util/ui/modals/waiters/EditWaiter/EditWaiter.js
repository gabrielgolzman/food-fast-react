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
   const { getWaiter, modifyWaiter } = useContext(WaitersContext);
   let waiter = getWaiter(idWaiter);
   const [selectedDate, handleDateChange] = useState(waiter.dateOfBirth);
   console.log(selectedDate);

   const onSubmit = (data) => {
      console.log(data, selectedDate);
      const modifiedWaiter = { ...data, dateOfBirth: selectedDate };
      modifyWaiter(idWaiter, modifiedWaiter);
      clicked();
   };
   return (
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
         <MainForm>
            <label>Nombre</label>
            <TextInput
               required
               defaultValue={waiter.name}
               {...register('name')}
            />
            <label>DNI</label>
            <TextInput
               required
               defaultValue={waiter.DNI}
               {...register('DNI')}
            />
            <CancelButton onClick={clicked}>Cancelar</CancelButton>
         </MainForm>
         <DescriptionForm>
            <MuiPickersUtilsProvider locale={es} utils={DateFnsUtils}>
               <DatePickerContainer>
                  <DatePicker
                     disableFuture
                     openTo="year"
                     required
                     clearLabel="Limpiar"
                     cancelLabel="Cancelar"
                     format="dd/MM/yyyy"
                     label="Fecha de nacimiento"
                     views={['year', 'month', 'date']}
                     value={selectedDate}
                     onChange={(date) => handleDateChange(date)}
                  />
               </DatePickerContainer>
               <label>Direcci??n</label>
               <TextInput
                  required
                  defaultValue={waiter.address}
                  {...register('address')}
               />
               <label>Tel??fono</label>
               <TextInput
                  required
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
