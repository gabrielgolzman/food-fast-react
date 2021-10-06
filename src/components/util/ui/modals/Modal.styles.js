import styled from 'styled-components';

export const BackgroundModal = styled.div`
   position: fixed;
   z-index: 500;
   display: flex;
   justify-content: space-around;
   background-color: white;
   border: 1px solid #ccc;
   box-shadow: 1px 1px 1px black;
   padding: 16px;
   height: 50%;
   box-sizing: border-box;
   transition: all 0.3s ease-out;

   @media (min-width: 600px) {
      width: 700px;
      left: calc(50% - 250px);
   }
`;
