import { useRouter } from 'next/router';

function SideLink({ children, href }: { children: React.ReactNode; href: string }) {
  const router = useRouter();
  const isDashboard = href == '/dapp';
  let className = isDashboard
    ? router.asPath === href
      ? 'bg-redpraha text-amber-950'
      : 'text-amber-950 hover:bg-midnight'
    : router.asPath.includes(href)
    ? 'bg-redpraha text-amber-950'
    : 'text-amber-950 hover:bg-midnight';

  className += ' group flex items-center px-3 py-2 text-base rounded-xl';

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
