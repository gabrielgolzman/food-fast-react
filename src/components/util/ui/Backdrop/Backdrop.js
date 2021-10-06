import { BackdropMain } from './Backdrop.styles';

const Backdrop = ({ show, clicked }) =>
   show && <BackdropMain onClick={clicked}></BackdropMain>;

export default Backdrop;
