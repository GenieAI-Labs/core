import { useState } from 'react';
import WorldCoinButton from '../../../../components/worldcoin/WorldCoinButton';

export default function Dev() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  return (
    <div>
      {isAuthenticated ? (
        <p>Genie creation form</p>
      ) : (
        <div className='flex flex-col items-center font-medium mt-20 p-10 bg-gray-200'>
          <h1 className='mb-10'>Please login with WorldCoin to submit a new Genie</h1>
          <WorldCoinButton onAuthenticated={setAuthenticated} />
        </div>
      )}
    </div>
  );
}
