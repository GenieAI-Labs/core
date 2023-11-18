import { useRouter } from 'next/router';

function BottomLink({ children, href }: { children: React.ReactNode; href: string }) {
  const router = useRouter();
  const isDashboard = href == '/dapp';
  let className = isDashboard
    ? router.asPath === href
      ? 'opacity-100'
      : ''
    : router.asPath.includes(href)
    ? 'opacity-100'
    : '';

  className +=
    ' inline-flex opacity-60 text-white flex-col items-center justify-center px-2 hover:opacity-100 group m-2 rounded-xl';

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

export default BottomLink;
