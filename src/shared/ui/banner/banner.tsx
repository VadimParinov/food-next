import { FC } from 'react'
import Image from 'next/image'

export interface BannerProps {
  imageUrl: string
}

export const Banner: FC<BannerProps> = ({ imageUrl }) => {
  return (
    <div className='relative w-full h-[200px]'>
      <Image src={imageUrl} alt='banner' layout='fill' objectFit='cover' />
    </div>
  )
}
