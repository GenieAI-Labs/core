import { useRouter } from 'next/router';
import GenieSideBar, { geniesMetadata } from '../../../components/Genie/GenieSideBar';
import { useState } from 'react';
import { IGenie } from '../../../types';
import GenieContent from '../../../components/Genie/GenieContent';

function GenieComponent() {
  const router = useRouter();
  const { id } = router.query;
  const selectedGenie = geniesMetadata[id];

  if (!selectedGenie) {
    return <p>Genie not found</p>;
  }

  const handleSelectGenie = (genie: IGenie) => {
    router.push(`/dapp/genie/${genie.id}`);
  };

  const handleBackToSidebar = () => {
    router.push(`/dapp`);
  };

  return (
    <>
      <div className='flex max-w-7xl mx-auto'>
        <div className={`hidden md:block`}>
          <GenieSideBar handleSelectGenie={handleSelectGenie} activeGenieId={id as string} />
        </div>

        <GenieContent selectedGenie={selectedGenie} onBack={handleBackToSidebar} />
      </div>
    </>
  );
}

export default GenieComponent;
