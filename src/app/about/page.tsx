// src/app/about/page.tsx

import { client } from '@/lib/sanity'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

export const revalidate = 30

export default async function AboutPage() {
  const about = await client.fetch(`*[_type == "about"][0]`)

  return (
    <div className="min-h-screen">
      
      <main className="max-w-4xl mx-auto px-4 py-20">
        {/* Título */}
        <h1 className="text-5xl font-bold mb-8">
          {about?.title || 'About Us'}
        </h1>
        
        {/* Descripción */}
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          {about?.description}
        </p>
        
        {/* Imagen */}
        {about?.image && (
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={urlFor(about.image).width(800).url()}
              alt={about.title}
              fill
              className="object-cover"
            />
          </div>
        )}
      </main>
    </div>
  )
}