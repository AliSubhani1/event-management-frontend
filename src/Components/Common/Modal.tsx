import React, { useEffect, useState } from 'react';
import CancelIcon from '../../Assets/svg/CrossIcon.svg';

type ModalProps = {
  title: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMessage?: React.Dispatch<React.SetStateAction<string>>;

  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ title, setIsModalOpen, setErrorMessage, children }) => {
  const [isTallScreen, setIsTallScreen] = useState(window.innerHeight > 800);

  useEffect(() => {
    const handleResize = () => {
      setIsTallScreen(window.innerHeight > 700);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleModalClose = () => {
    if (setErrorMessage) setErrorMessage('');
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-10 bg-gray-1 opacity-30"></div>
      <div
        className={`fixed z-10 inset-0 overflow-y-auto backdrop-blur-sm flex justify-center ${
          isTallScreen ? 'items-center' : 'items-start'
        }`}
      >
        <div className="flex items-end justify-center min-h-[740px] pt-4 px-4 pb-20 text-center md:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0"></div>
          </div>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>

          <div className="inline-block align-bottom bg-white-0 rounded-lg text-left shadow-3xl transform transition-all min-w-80 md:min-w-[40rem] md:my-8 md:align-middle py-4 px-6 md:py-8 md:px-10">
            <div className="flex justify-between items-center bg-white-0">
              <h3 className="text-xl leading-6 poppins-700 text-gray-900 ">{title}</h3>
              <div className="absolute bg-gray-50 top-4 right-4">
                <button onClick={handleModalClose}>
                  <img
                    src={CancelIcon}
                    className="w-7 h-auto cursor-pointer"
                    alt="cancel upload icon"
                  />
                </button>
              </div>
            </div>
            <div className="mt-3">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
