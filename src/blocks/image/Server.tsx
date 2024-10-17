import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'

const ImageBlockServer = ({ image }: { image: Media }) => {
  return (
    <div>
      <Image src={image.url as string} alt={image.alt} width={500} height={500} />
    </div>
  )
}

export default ImageBlockServer
