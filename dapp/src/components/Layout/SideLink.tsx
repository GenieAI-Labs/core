import { useRouter } from 'next/router';

function SideLink({ children, href }: { children: React.ReactNode; href: string }) {
  const router = useRouter();
  const isDashboard = href == '/dapp';
  let className = isDashboard
    ? router.asPath === href
      ? 'text-white'
      : 'text-[#ac95d7]'
    : router.asPath.includes(href)
    ? 'text-white'
    : 'text-[#ac95d7]';

  className += ' group flex items-center px-3 py-2 text-base rounded-xl hover:text-white';

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

export default SideLink;
