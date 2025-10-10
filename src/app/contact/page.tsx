// src/app/contact/page.tsx

import { client } from '@/lib/sanity'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import ContactForm from '@/app/components/ContactForm/ContactForm'

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

export const revalidate = 30

export default async function ContactPage() {
  const contact = await client.fetch(`*[_type == "contact"][0]`)

  return (
    <main className="max-w-4xl mx-auto px-4 py-20">
      {/* Título */}
      <h1 className="text-5xl font-bold mb-8 text-center">
        {contact?.title || 'Contact Us'}
      </h1>
      
      {/* Descripción */}
      <p className="text-xl text-gray-600 mb-12 text-center leading-relaxed">
        {contact?.description}
      </p>
      
      {/* Imagen */}
      {contact?.image && (
        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg mb-12">
          <Image
            src={urlFor(contact.image).width(800).url()}
            alt={contact.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Formulario */}
      <ContactForm />
    </main>
  )
}