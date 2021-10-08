import { BackgroundImage } from './Login.styles';

import Backdrop from '../util/ui/Backdrop/Backdrop';
import Modal from '../util/ui/modals/Modal';

const Login = () => {
   return (
      <div style={{ width: '100vw', height: '100vh' }}>
         <Backdrop show={true} />
         <Modal type="auth" show={true} />
         <BackgroundImage></BackgroundImage>
      </div>
   );
};

export default Login;
