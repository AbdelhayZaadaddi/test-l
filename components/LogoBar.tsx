import Image from 'next/image'
import logo1 from '../assets/logo-1.png'
import logo2 from '../assets/logo-2.png'
import logo3 from '../assets/logo-3.png'
import logo4 from '../assets/logo-4.png'
import logo5 from '../assets/logo-5.png'

const brands = [
  { name: 'Logo 1', src: logo1 },
  { name: 'Logo 2', src: logo2 },
  { name: 'Logo 3', src: logo3 },
  { name: 'Logo 4', src: logo4 },
  { name: 'Logo 5', src: logo5 },
]

export default function LogoBar() {
  return (
    <section className="bg-black py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-14 gap-y-6 px-6">
        {brands.map((brand) => (
          <Image
            key={brand.name}
            src={brand.src}
            alt={brand.name}
            className="h-10 w-auto object-contain opacity-60"
          />
        ))}
      </div>
    </section>
  )
}
