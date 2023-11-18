import { useContext } from 'react';
import TalentLayerContext from '../context/talentLayer';
import useUserById from '../hooks/useUserById';
import { IUser } from '../types';
import Loading from './Loading';
import Stars from './Stars';
import DelegateModal from './Modal/DelegateModal';
import Link from 'next/link';

function UserDetail({ user }: { user: IUser }) {
  const { user: currentUser } = useContext(TalentLayerContext);
  const userDescription = user?.id ? useUserById(user?.id)?.description : null;

  if (!user?.id) {
    return <Loading />;
  }

  return (
    <div className='rounded-xl p-4 border border-amber-900 bg-white'>
      <div className='w-full'>
        <div className='flex flex-col justify-start items-start gap-4'>
          <div className='flex items-center justify-start mb-4'>
            <img
              src={
                user?.description?.image_url
                  ? user?.description?.image_url
                  : `/images/default-avatar-${Number(user?.id ? user.id : '1') % 9}.jpeg`
              }
              className='w-10 mr-4 rounded-full'
              width={50}
              height={50}
              alt='default avatar'
            />
            <div className='flex flex-col'>
              <p className='text-black font-medium break-all'>{user?.handle}</p>
              <p className='text-black text-xs'>{userDescription?.title}</p>
            </div>
          </div>
        </div>
        <Stars rating={Number(user.rating)} numReviews={user.userStats.numReceivedReviews} />
      </div>
      <div className=' border-t border-gray-700 pt-2 w-full'>
        {userDescription?.name && (
          <p className='text-sm text-black mt-4'>
            <strong>Name:</strong> {userDescription?.name}
          </p>
        )}
        <p className='text-sm text-black mt-4'>
          <strong>About:</strong> {userDescription?.about}
        </p>
      </div>
    </div>
  );
}

export default UserDetail;
