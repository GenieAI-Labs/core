import { useState, useContext } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import Steps from '../../components/Steps';
import TalentLayerContext from '../../context/talentLayer';
import { IGenie } from '../../types';
import GenieSideBar from '../../components/Genie/GenieSideBar';

function Dapp() {
  const router = useRouter(); // Initialize the router
  const { user } = useContext(TalentLayerContext);

  // Function to navigate to the genie's page
  const handleSelectGenie = (genie: IGenie) => {
    router.push(`/dapp/genie/${genie.id}`);
  };

  if (!user) {
    return <Steps />;
  }

  return (
    <div className='flex max-w-7xl mx-auto text-black'>
      <GenieSideBar handleSelectGenie={handleSelectGenie} />
    </div>
  );
}

export default Dapp;
