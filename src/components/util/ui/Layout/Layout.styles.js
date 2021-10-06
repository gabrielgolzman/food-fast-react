import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

export const DrawerButton = styled(NavLink)`
   && {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: white;
      text-align: center;
      font-size: 30px;
      padding-left: 10px;
      border-radius: 4px;
      &:focus,
      &:hover {
         background-color: white;
         color: #fc6600;
      }
   }
`;

export const LogoutButton = styled(Button)`
   && {
      color: #fc6600;
      align-self: center;
      font-size: 16px;
      position: absolute;
      bottom: 0;
      margin-bottom: 20px;
      border-radius: 15px;
      background-color: white;
      width: 60%;
      height: 40px;
   }
`;
