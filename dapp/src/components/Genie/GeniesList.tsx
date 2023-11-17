import Image from 'next/image';

interface Props {
  id: string;
  name: string;
  pics: string;
}

export default function GeniesList({ id, name, pics }: Props) {
  return (
    <>
      <Image src={pics} alt={name} width={40} height={40} className='rounded-full' />
      <span className='ml-4 text-sm text-gray-700'>{name}</span>
    </>
  );
}
