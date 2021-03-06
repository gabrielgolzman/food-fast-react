import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import DateFnsUtils from '@date-io/date-fns';
import { es } from 'date-fns/locale';

import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import { DatePickerContainer } from './AddWaiter.styles';
import { WaitersContext } from '../../../../../../services/waiters/waiters.context';
import {
   FormContainer,
   TextInput,
   MainForm,
   DescriptionForm,
   MainButton,
   CancelButton,
} from '../../products/AddProduct/AddProduct.styles';

const AddWaiter = ({ clicked }) => {
   const { register, handleSubmit } = useForm();
   const [selectedDate, handleDateChange] = useState(new Date());
   const { addWaiter } = useContext(WaitersContext);

   const onSubmit = (data) => {
      addWaiter({
         name: data.name,
         DNI: data.DNI,
         telephone: data.telephone,
         dateOfBirth: selectedDate,
         address: data.address,
      });
      clicked();
   };
   return (
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
         <MainForm>
            <label>Nombre</label>
            <TextInput required {...register('name')} />
            <label>DNI</label>
            <TextInput required {...register('DNI')} />
            <CancelButton onClick={clicked}>Cancelar</CancelButton>
         </MainForm>
         <DescriptionForm>
            <MuiPickersUtilsProvider locale={es} utils={DateFnsUtils}>
               <DatePickerContainer>
                  <DatePicker
                     disableFuture
                     required
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
               <TextInput required {...register('address')} />
               <label>Teléfono</label>
               <TextInput required {...register('telephone')} />
            </MuiPickersUtilsProvider>
            <MainButton type="submit" value="Agregar Mozo" />
         </DescriptionForm>
      </FormContainer>
   );
};

export default AddWaiter;
