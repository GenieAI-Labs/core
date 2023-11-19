import React, { useEffect, useState } from 'react';
import GeniesList from '../../components/Genie/GeniesList';
import { IGenie } from '../../types';
import { getAllGenies } from '../../pages/api/ai/request';
import { useChainId } from '../../hooks/useChainId';
import { IoIosAddCircleOutline } from 'react-icons/io';

type SidebarProps = {
  handleSelectGenie: (genie: IGenie) => void;
  activeGenieId?: string;
};

export const geniesMetadata = {
  '1': {
    id: '1',
    name: 'Legal Advisor',
    pics: '/images/genies/legal.png',
    price: 101,
    headline: 'Analyse your legal documents',
    assistantId: 'asst_MzDSgPrndkcyYkScrkaEXbSa',
  },
  '2': {
    id: '2',
    name: 'Accountant',
    pics: '/images/genies/accountant.png',
    price: 101,
    headline: 'Analyse your financial data',
    assistantId: 'asst_O4KpSlfMNE0pFPT8kWtuZIuI',
  },
  '3': {
    id: '3',
    name: 'Doctor',
    pics: '/images/genies/doctor.png',
    price: 101,
    headline: 'Analyze your medical data',
    assistantId: 'asst_LrCCMyw26Z4jUY5tlPNX9Z6U',
  },
};

const GenieSideBar: React.FC<SidebarProps> = ({ handleSelectGenie, activeGenieId }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [genies, setGenies] = useState<IGenie[]>([]);
  const chainId = useChainId();

  useEffect(() => {
    const getGenies = async () => {
      const response = await getAllGenies(chainId);
      if (response && response.data && response.data.genies) {
        setGenies(response.data.genies);
      }
    };

    getGenies();
  }, [chainId]);

  return (
    <div className='md:w-64 w-full bg-gray-100 p-4 overflow-y-auto fixed sm:relative h-[calc(100vh-68px)]'>
      <div className='mb-4'>
        <div className='flex justify-between'>
          <p className='text-xl font-medium text-black'>Choose your genie</p>
          <a
            href='/dapp/dev/create'
            className='rounded-full bg-endnight text-white p-2 hover:bg-endnight'
            type='button'
            data-modal-toggle='defaultModal'>
            <IoIosAddCircleOutline size={15} />
          </a>
        </div>
      </div>
      <div className='chat-list space-y-2'>
        {genies.map(genie => (
          <a
            key={genie.id}
            onClick={() => handleSelectGenie(genie)}
            className={`flex items-center group px-3 py-2 text-base rounded-xl text-black cursor-pointer ${
              genie.id === activeGenieId ? 'bg-white ' : ' hover:bg-midnight '
            }`}>
            <GeniesList
              id={genie.id}
              name={geniesMetadata[genie.id].name}
              pics={geniesMetadata[genie.id].pics}
              headline={geniesMetadata[genie.id].headline}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default GenieSideBar;
