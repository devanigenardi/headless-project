// src/app/page.tsx

import { client } from '@/lib/sanity'
import Nav from '@/app/components/Nav/Nav'

export const revalidate = 30;

export default async function Home() {
  const settings = await client.fetch(`*[_type == "settings"][0]`)
  const home = await client.fetch(`*[_type == "home"][0]`)

  return (
    <div className="min-h-screen">
      {/* Nav Component */}
      <Nav settings={settings} />

      {/* Hero Section */}
      {home?.hero && (
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-4">{home.hero.title}</h1>
                <p className="text-xl mb-8">{home.hero.subtitle}</p>
                {home.hero.ctaText && (
                  <a 
                    href={home.hero.ctaLink}
                    className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    {home.hero.ctaText}
                  </a>
                )}
              </div>
              
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {home?.features?.items && (
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              {home.features.sectionTitle || 'Features'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {home.features.items.map((item: any, i: number) => (
                <div key={i} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="font-semibold">{settings?.title} © {new Date().getFullYear()}</p>
          <p className="text-gray-400 mt-2">{settings?.description}</p>
        </div>
      </footer>
    </div>
  )
}