import TalentLayerContext from '../../context/talentLayer';
import SideLink from './SideLink';
import { navigation, navigationAdmin } from './navigation';
import { useContext } from 'react';
import { createPushToast } from '../push/utils/toast';

function SideMenu() {
  const { user } = useContext(TalentLayerContext);

  return (
    <>
      <nav className='space-y-1 px-3'>
        {navigation.map(item => (
          <SideLink key={item.name} href={item.href}>
            <item.icon className='mr-3 h-5 w-5 flex-shrink-0 text-red' aria-hidden='true' />
            {item.name}
          </SideLink>
        ))}
        {user?.isAdmin && (
          <div className='pt-4'>
            <div className='border-gray-200 my-3 h-px border-t mx-3'></div>
            <h2 className='text-black ml-3 mt-6'>My platform</h2>
            <nav className='space-y-1 mt-6'>
              {navigationAdmin.map(item => (
                <SideLink key={item.name} href={item.href}>
                  <item.icon className='mr-3 h-5 w-5 flex-shrink-0 text-white' aria-hidden='true' />
                  {item.name}
                </SideLink>
              ))}
            </nav>
          </div>
        )}
      </nav>
      <div
        className='fixed cursor-pointer bottom-2 text-sm flex items-center mb-[10px] ml-[50px] bg-[#ac95d7] text-white px-3 py-1.5 text-center rounded-xl'
        onClick={() => {
          createPushToast();
        }}>
        <img src={'/images/Bell.png'} className='w-5 h-5' />
        <span className='ml-2'>Activate Push</span>
      </div>
    </>
  );
}

export default SideMenu;
