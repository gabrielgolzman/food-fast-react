import styled from 'styled-components';

export const FormContainer = styled.form`
   display: flex;
   width: 100%;
   justify-content: space-around;
`;

export const MainForm = styled.div``;

export const DescriptionForm = styled.div``;

export const TextInput = styled.input`
   display: block;
   width: 100%;
   padding: 8px 16px;
   line-height: 25px;
   font-size: 18px;
   font-weight: 500;
   font-family: inherit;
   border-radius: 6px;
   -webkit-appearance: none;
   color: #060606;
   border: 1px solid #cdd9ed;
   background: #fffff;
   transition: border 0.3s ease;
   &::placeholder {
      color: #cbd1dc;
   }
   &:focus {
      outline: none;
      border-color: #99a3ba;
   }
`;

export const TextAreaInput = styled.textarea`
   display: block;
   width: 100%;
   height: 60%;
   border: 1px solid #cdd9ed;
   font-size: 15px;
   font-family: inherit;
   line-height: 1.5;
   color: #666;
   border-radius: 10px;
   &::placeholder {
      color: #cbd1dc;
   }
   &:focus {
      outline: none;
      border-color: #99a3ba;
   }
   padding: 12px 30px;
`;

export const MainButton = styled.input`
   width: fit-content;
   padding: 10px 20px;
   border-radius: 30px;
   font-size: 18px;
   border: 1px solid #707070;
   background-color: #fc6600;
   color: white;
   position: absolute;
   bottom: 0;
   margin: 0 0 30px 30px;
   cursor: pointer;
`;

export const CancelButton = styled.button`
   width: fit-content;
   padding: 10px 20px;
   border-radius: 30px;
   font-size: 18px;
   border: 1px solid #707070;
   background-color: #f60808;
   color: white;
   position: absolute;
   bottom: 0;
   margin: 0 0 30px 30px;
   cursor: pointer;
`;
