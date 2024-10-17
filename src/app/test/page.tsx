import React from 'react'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import ImageBlockServer from '@/blocks/image/Server'
import Image from 'next/image'
import { url } from 'inspector'
import { Media } from '@/payload-types'

const Page = async () => {
  const getEvent = async () => {
    const payload = await getPayloadHMR({ config })
    const result = await payload
      .find({
        collection: 'events',
      })
      .then((result) => result.docs)
    console.log(result)
    console.log(result[0].events)
    return result
  }

  const events = await getEvent()
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Events Categories</h1>
      {events.map((category) => (
        <div key={category.id} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{category.categoryName}</h2>

          <div className="ml-4">
            {category.events?.map((event, eventIndex) => (
              <div key={eventIndex} className="mb-4">
                <h3 className="text-lg font-medium">{event.eventName}</h3>

                <div className="ml-4 flex flex-wrap gap-2">
                  {event.eventImages?.map((imageObj, imageIndex) => (
                    <div key={imageIndex}>
                      testing image
                      <ImageBlockServer image={imageObj.image as Media} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Page
