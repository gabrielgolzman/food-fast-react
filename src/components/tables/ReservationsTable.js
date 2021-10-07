import { useContext, useState } from 'react';

import local from './local';
import { ReservationsContext } from '../../services/reservations/reservations.context';

import MaterialTable from 'material-table';
import DeleteModal from '../util/ui/modals/DeleteModal';

const ReservationsTable = () => {
   const { reservations } = useContext(ReservationsContext);
   const [showDeleteModal, setShowDeleteModal] = useState(false);
   const [type, setType] = useState('');
   const [idReservation, setIdReservation] = useState(null);

   let columns1 = [
      { title: 'Fecha-Hora', field: 'dateAndHourFrom', type: 'datetime' },
      { title: 'Cantidad de personas', field: 'qtyPersons', type: 'numeric' },
      { title: 'Estado', field: 'state', type: 'string' },
      {
         title: 'Número de mesa',
         field: 'idTable',
         type: 'numeric',
      },
   ];

   const actionDeleteClicked = (type, id, name) => {
      setShowDeleteModal(!showDeleteModal);
      setType(type);
      setIdReservation(id);
   };

   const onDeleteClicked = () => {
      setShowDeleteModal(!showDeleteModal);
   };

   return (
      <div>
         <DeleteModal
            type={type}
            id={idReservation}
            show={showDeleteModal}
            onClicked={onDeleteClicked}
         />
         <MaterialTable
            title="Reservas"
            columns={columns1}
            data={reservations}
            actions={[
               (rowData) => ({
                  icon: 'delete',
                  tooltip: 'Borrar reserva',
                  onClick: (event, rowData) =>
                     actionDeleteClicked(
                        'delete-reservation',
                        rowData.id,
                        null
                     ),
               }),
            ]}
            options={{
               actionsColumnIndex: -1,
            }}
            localization={local}
         />
      </div>
   );
};

export default ReservationsTable;
