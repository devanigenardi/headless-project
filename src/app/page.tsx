// src/app/home/page.tsx

import { client } from '@/lib/sanity'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

export const revalidate = 30

export default async function HomePage() {
  const home = await client.fetch(`*[_type == "home"][0]`)

  return (
    <main className="max-w-4xl mx-auto px-4 py-20">
      {/* Título */}
      <h1 className="text-5xl font-bold mb-8">
        {home?.title || 'home Us'}
      </h1>
      
      {/* Descripción */}
      <p className="text-xl text-gray-600 mb-12 leading-relaxed">
        {home?.description}
      </p>
      
      {/* Imagen */}
      {home?.image && (
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={urlFor(home.image).width(800).url()}
            alt={home.title}
            fill
            className="object-cover"
          />
        </div>
      )}
    </main>
  )
}