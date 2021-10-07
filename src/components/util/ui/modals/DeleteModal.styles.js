import styled from 'styled-components';

export const BackgroundDeleteModal = styled.div`
   position: fixed;
   z-index: 500;
   display: flex;
   flex-direction: column;
   background-color: white;
   border: 1px solid #ccc;
   box-shadow: 1px 1px 1px black;
   padding: 16px;
   height: 35%;
   box-sizing: border-box;
   transition: all 0.3s ease-out;

   @media (min-width: 600px) {
      width: 700px;
      left: calc(50% - 250px);
   }
`;

export const HighLightText = styled.span`
   color: #fc6600;
`;

export const TextContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
`;

export const ButtonsContainer = styled.div`
   width: 100%;
   display: flex;
   flex: 1;
`;

export const ButtonContainer = styled.div`
   width: 50%;
   display: flex;
   justify-content: center;
`;
