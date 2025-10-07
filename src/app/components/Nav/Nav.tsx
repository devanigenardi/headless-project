// src/components/Nav/Nav.tsx

import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { client } from '@/lib/sanity'
import styles from './Nav.module.scss'

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

export default function Nav({ settings }: { settings: any }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Logo */}
        {settings?.logo && (
          <Image 
            src={urlFor(settings.logo).url()} 
            alt="Logo"
            className={styles.logo}
            width={100}
            height={50}
          />
        )}
        
        {/* Nav Links */}
        <ul className={styles.links}>
          {settings?.mainNav?.map((item: any) => (
            <li key={item._key}>
              <a href={item.slug} className={styles.link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Social Links */}
        <div className={styles.social}>
          {settings?.socialLinks?.facebook && (
            <a href={settings.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              FB
            </a>
          )}
          {settings?.socialLinks?.instagram && (
            <a href={settings.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              IG
            </a>
          )}
        </div>
      </div>
    </nav>
  )
}