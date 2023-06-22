import { ThreeDots } from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import { LoaderOverlay } from './Loader.styled';

const loaderRoot = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <LoaderOverlay>
      <ThreeDots
        color={'#ffffff'}
        wrapperStyle={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </LoaderOverlay>,
    loaderRoot
  );
};

export default Loader;
