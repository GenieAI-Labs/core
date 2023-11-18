import { useState } from 'react';
import GeniesList from '../../components/Genie/GeniesList';
import { Genie } from '../../types';
import GenieCreationModal from '../../components/Modal/GenieCreationModal';

type SidebarProps = {
  handleSelectGenie: (genie: Genie) => void;
  activeGenieId?: string;
};

export const genies = [
  {
    id: 'genie1',
    name: 'Legal Advisor',
    pics: 'https://i.pravatar.cc/300?img=1',
    headline: 'Provides advice on legal matters.',
  },
  {
    id: 'genie2',
    name: 'Doctor',
    pics: 'https://i.pravatar.cc/300?img=2',
    headline: 'Offers health and wellness tips.',
  },
  {
    id: 'genie3',
    name: 'Accountant',
    pics: 'https://i.pravatar.cc/300?img=3',
    headline: 'Assists with financial accounting.',
  },
];

const GenieSideBar: React.FC<SidebarProps> = ({ handleSelectGenie, activeGenieId }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className='md:w-64 w-full h-full bg-gray-100 p-4 overflow-y-auto fixed sm:relative'>
      <div className='mb-4'>
        <div className='flex justify-between'>
          <p className='text-xl font-medium text-black'>Choose your genie</p>
          <GenieCreationModal showPopup={showPopup} />
        </div>
      </div>
      <div className='chat-list space-y-2 '>
        {genies.map(genie => (
          <a
            key={genie.id}
            onClick={() => handleSelectGenie(genie)}
            className={`flex items-center group px-3 py-2 text-base rounded-xl text-black cursor-pointer ${
              genie.id === activeGenieId ? 'bg-white ' : ' hover:bg-midnight '
            }`}>
            <GeniesList
              id={genie.id}
              name={genie.name}
              pics={genie.pics}
              headline={genie.headline}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default GenieSideBar;
