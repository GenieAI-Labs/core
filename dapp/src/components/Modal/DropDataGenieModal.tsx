import { useState } from 'react';
import { MdOutlineCleaningServices } from 'react-icons/md';
import WishForm from '../Form/WishForm';
import { FiLock } from 'react-icons/fi';

function DropDataGenieModal({ showPopup, activeGenieId, clearThread, isAnimated }: any) {
  const [show, setShow] = useState(showPopup);

  return (
    <>
      <button
        onClick={() => clearThread()}
        className='rounded-full bg-redpraha text-black p-2 hover:opacity-80 mr-2'
        type='button'
        data-modal-toggle='defaultModal'>
        <MdOutlineCleaningServices size={15} />
      </button>

      <button
        onClick={() => setShow(true)}
        className={`rounded-full bg-endnight text-white p-2 hover:opacity-80 ${
          isAnimated ? 'animate-pulse' : ''
        }`}
        type='button'
        data-modal-toggle='defaultModal'>
        <FiLock size={15} />
      </button>

      <div
        className={`${
          !show ? 'hidden' : ''
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full bg-black/75 flex flex-col items-center justify-center`}>
        <div className='relative p-4 w-full max-w-2xl h-auto'>
          <div className='relative bg-endnight rounded-xl shadow '>
            <div className='flex justify-between items-start p-4 rounded-t border-b border-gray-600'>
              <h3 className='text-xl font-semibold text-white '>Protected data</h3>
              <button
                onClick={() => setShow(false)}
                type='button'
                className='text-white bg-transparent hover:opacity-70 rounded-xl text-sm p-1.5 ml-auto inline-flex items-center '
                data-modal-toggle='defaultModal'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            <WishForm activeGenieId={activeGenieId} closeModal={() => setShow(false)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DropDataGenieModal;
