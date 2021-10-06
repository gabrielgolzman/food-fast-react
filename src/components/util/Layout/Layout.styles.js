import styled from 'styled-components';
import Button from '@mui/material/Button';

export const DrawerButton = styled(Button)`
   && {
      margin-bottom: 20px;
      font-size: 24px;
      border-radius: 10px;
      padding-left: 10px;
      &:focus,
      &:hover {
         background-color: white;
         color: #fc6600;
      }
   }
`;
