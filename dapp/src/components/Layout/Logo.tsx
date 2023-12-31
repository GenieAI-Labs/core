import Image from 'next/image';
import Link from 'next/link';

function Logo({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  return (
    <div className={`text-1xl ${theme == 'light' ? 'text-white' : 'text-redpraha'}`}>
      <Link href='/' className='flex items-center'>
        <Image
          src={'/logo-text-white.png'}
          width={50}
          height={15}
          alt='GenieAi logo'
          className='-ml-2 sm:ml-0'
        />
        <span className='font-bold text-md ml-2 block text-endnight sm:text-white'>GenieAi</span>
      </Link>
    </div>
  );
}

export default Logo;
