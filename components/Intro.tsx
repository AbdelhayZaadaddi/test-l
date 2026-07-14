import Image from 'next/image'
import athlete from '../assets/athlete.png'
import Button from './Button'

export default function Intro() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20">
      {/* red triangle, top left edge */}
      <svg
        viewBox="0 0 60 60"
        className="absolute top-10 left-0 h-12 w-12 fill-primary"
        aria-hidden="true"
      >
        <polygon points="0,0 60,30 0,60" />
      </svg>

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* doubled heading */}
        <div className="text-center font-display uppercase gap-0 ">
          <span className="block text-5xl text-primary sm:text-6xl lg:text-8xl ">
            Lorem ipsum est
          </span>
          <span className="-mt-4 block text-5xl text-dark sm:text-6xl lg:text-8xl ">
            Lorem ipsum est
          </span>
        </div>

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
          {/* Left: text */}
          <div>
            <h3 className="text-xl font-bold text-dark">
              Lorem Ipsum <span className="text-primary">est un &#8250;</span>
            </h3>
            <p className="mt-5 max-w-md text-sm leading-7 text-dark/80 text-justify">
              <span className="text-primary">Lorem ipsum</span> dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-dark/80 text-justify">
              Ut enim ad minim <span className="text-primary">veniam</span>,{' '}
              <span className="text-primary">quis</span> nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button href="#secrets" variant="dark" className="mt-10">
              Lorem ipsum est un texte
            </Button>
          </div>

          {/* Right: photo over red triangle */}
          <div className="relative mx-auto w-full max-w-xl lg:-mt-24">
            <div className="relative aspect-4/5">
              <Image
                src={athlete}
                alt="Coach sportif"
                fill
                className="object-contain"
              />
            </div>
            <span className="absolute top-1/2 -right-4 rounded-md bg-primary px-4 py-2 text-xs font-bold text-white shadow-lg lg:-right-10">
              Lorem
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
