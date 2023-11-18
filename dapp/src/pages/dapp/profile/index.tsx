import { useRouter } from 'next/router';
import Loading from '../../../components/Loading';
import UserDetail from '../../../components/UserDetail';
import useUserById from '../../../hooks/useUserById';
import { useContext } from 'react';
import TalentLayerContext from '../../../context/talentLayer';

function Profile() {
  const { user } = useContext(TalentLayerContext);

  if (!user) {
    return <Loading />;
  }

  return (
    <div className='max-w-7xl mx-auto text-black p-6'>
      {user && (
        <>
          <div className='-mx-6 -mt-6 sm:mx-0 sm:mt-0'>
            <p className='flex py-2 px-6 sm:px-0 items-center text-2xl font-medium tracking-wider mb-8 w-full '>
              Profile <span className='text-gray-900 ml-1'> {user.handle} </span>
            </p>
          </div>
          <div>
            <div className='mb-6'>
              <UserDetail user={user} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
