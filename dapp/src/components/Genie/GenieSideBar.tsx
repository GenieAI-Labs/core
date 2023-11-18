import React, { useEffect, useState } from 'react';
import GeniesList from '../../components/Genie/GeniesList';
import { Genie } from '../../types';
import GenieCreationModal from '../../components/Modal/GenieCreationModal';
import { getAllGenies } from '../../pages/api/ai/request';
import { useChainId } from '../../hooks/useChainId';
import { IoIosAddCircleOutline } from 'react-icons/io';

type SidebarProps = {
  handleSelectGenie: (genie: Genie) => void;
  activeGenieId?: string;
};

export const geniesMetadata = {
  '1': {
    id: 'genie1',
    name: 'Legal Advisor',
    pics: 'https://i.pravatar.cc/300?img=1',
    headline: 'Provides advice on legal matters.',
  },
  '2': {
    id: 'genie2',
    name: 'Doctor',
    pics: 'https://i.pravatar.cc/300?img=2',
    headline: 'Offers health and wellness tips.',
  },
  '3': {
    id: 'genie3',
    name: 'Accountant',
    pics: 'https://i.pravatar.cc/300?img=3',
    headline: 'Assists with financial accounting.',
  },
};

const GenieSideBar: React.FC<SidebarProps> = ({ handleSelectGenie, activeGenieId }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [genies, setGenies] = useState<Genie[]>([]);
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
            className='rounded-full bg-blue-500 text-white p-2 hover:bg-endnight'
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
