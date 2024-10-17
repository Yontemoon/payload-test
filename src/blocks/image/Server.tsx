import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'

const ImageBlockServer = ({ image }: { image: Media }) => {
  return (
    <div>
      <Image src={image.url as string} alt={image.alt} width={200} height={100} />
    </div>
  )
}

export default ImageBlockServer
