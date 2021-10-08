import styled from 'styled-components';

export const Header = styled.h1`
   color: #fc6600;
`;
export const BoldText = styled.span`
   font-weight: bold;
`;
export const ResumeContainer = styled.div`
   overflow-y: auto;
   max-height: 40%;
`;
export const ResumeRow = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   padding: 0 20px;
   border-bottom: 1px solid #ccc;
`;

export const BottomContainer = styled.div`
   width: 100%;
   height: 20%;
   bottom: 0;
   display: flex;
   justify-content: flex-end;
   align-items: flex-end;
   border-bottom: 1px solid #ccc;
`;
