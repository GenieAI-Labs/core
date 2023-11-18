import Image from 'next/image';

interface Props {
  id: string;
  name: string;
  headline: string;
  pics: string;
}

export default function GeniesList({ id, name, headline, pics }: Props) {
  return (
    <>
      <Image src={pics} alt={name} width={40} height={40} className='rounded-full' />
      <p className='flex flex-col'>
        <span className='ml-4 text-sm font-bold text-gray-700'>{name}</span>
        <span className='ml-4 text-xs text-gray-400'>{headline}</span>
      </p>
    </>
  );
}
