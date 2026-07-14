import Image from 'next/image'
import Logo from './Logo'
import heroImage from '../assets/hero.jpeg'
import grunge from '../assets/redtach.png'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark text-white">
      {/* red grunge texture accents */}
      <Image
        src={grunge}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute object-contain opacity-90"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-8 pb-16 lg:px-10">
        <Logo className="text-white" />

        <div className="mt-10 grid items-center gap-12 lg:mt-6 lg:grid-cols-2">
          {/* Left: headline */}
          <div className="relative">
            <h1 className="font-display text-[26px] leading-tight uppercase sm:text-3xl lg:text-[34px] text-justify">
              Les 3 choses à faire dès maintenant pour perdre du poids
              durablement et pour obtenir un corps athlétique
            </h1>
            <p className="mt-3 text-sm text-white/90">
              (avec tes premiers résultats visibles en 3 semaines seulement) !
            </p>

            <p className="mt-10 max-w-md text-sm leading-relaxed text-white/90">
              Sans sacrifier ce que tu aimes manger, sans faire des heures de
              sport et surtout… sans reprise de poids après !
            </p>
          </div>

          {/* Right: framed photo */}
          <div className="relative">
            <Image
              src={heroImage}
              alt="Antoine Blanco, coach sportif"
              preload
              className="h-auto w-full max-w-md"
            />
          </div>
        </div>

        {/* Learn more rotating badge */}
        <a
          href="#about"
          className="relative mx-auto -mt-4 flex h-24 w-24 items-center justify-center lg:absolute lg:bottom-6 lg:left-1/2 lg:mt-0 lg:h-28 lg:w-28 lg:-translate-x-1/2"
          aria-label="En savoir plus"
        >
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full animate-[spin_14s_linear_infinite]"
          >
            <defs>
              <path
                id="learn-more-circle"
                d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              />
            </defs>
            <text className="fill-white text-[9.5px] uppercase tracking-[0.28em]">
              <textPath href="#learn-more-circle">
                learn more • learn more •
              </textPath>
            </text>
          </svg>
          <span className="text-2xl">↓</span>
        </a>
      </div>
    </section>
  )
}
