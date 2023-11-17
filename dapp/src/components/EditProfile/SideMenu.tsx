import SideLink from './SideLink';
import { navigation } from './navigation';

function SideMenu() {
  return (
    <ul className='space-y-1 font-sans text-sm'>
      {navigation().map(item => (
        <SideLink key={item.name} href={item.href} isCompleted={false}>
          <item.icon width={20} height={20} />
          <span className='grow'>{item.name}</span>
        </SideLink>
      ))}
    </ul>
  );
}

export default SideMenu;
