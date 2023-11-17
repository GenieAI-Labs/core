import { useRouter } from 'next/router';
import GenieSideBar from '../../../components/Genie/GenieSideBar';
import { useState } from 'react';
import { Genie } from '../../../types';
import GenieContent from '../../../components/Genie/GenieContent';

function GenieComponent() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedGenie, setSelectedGenie] = useState<Genie>();
  const [showSidebar, setShowSidebar] = useState(true);

  const handleSelectGenie = (genie: Genie) => {
    setSelectedGenie(genie);
    setShowSidebar(false);
    router.push(`/dapp/genie/${genie.id}`);
  };

  const handleBackToSidebar = () => {
    setShowSidebar(true);
  };

  return (
    <>
      <div className='flex h-screen max-w-7xl mx-auto'>
        {/* Sidebar - hidden on small screens when content is active */}
        <div className={`lg:flex  ${!showSidebar ? 'hidden' : ''}`}>
          <GenieSideBar handleSelectGenie={handleSelectGenie} activeGenieId={id as string} />
        </div>

        {selectedGenie && (
          <GenieContent
            selectedGenie={selectedGenie}
            onBack={handleBackToSidebar}
            className={`${showSidebar ? 'hidden lg:flex' : 'flex'}`}
          />
        )}
      </div>
    </>
  );
}

export default GenieComponent;
