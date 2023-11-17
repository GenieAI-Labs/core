import { useState, useContext } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import Steps from '../../components/Steps';
import TalentLayerContext from '../../context/talentLayer';
import { Genie } from '../../types';
import GenieSideBar from '../../components/Genie/GenieSideBar';

function Dapp() {
  const router = useRouter(); // Initialize the router
  const { user } = useContext(TalentLayerContext);
  const [selectedGenie, setSelectedGenie] = useState<Genie>();

  // Function to navigate to the genie's page
  const handleSelectGenie = (genie: Genie) => {
    setSelectedGenie(genie);
    router.push(`/dapp/genie/${genie.id}`);
  };

  if (!user) {
    return <Steps />;
  }

  return (
    <div className='flex h-screen max-w-7xl mx-auto text-black sm:px-4 lg:px-0'>
      <GenieSideBar handleSelectGenie={handleSelectGenie} />

      <div className='flex-1 p-4 text-black'>
        {selectedGenie && (
          <div>
            <h2 className='text-2xl font-bold'>{selectedGenie.name} Genie</h2>
            <p className='mt-4'>{selectedGenie.info}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dapp;
