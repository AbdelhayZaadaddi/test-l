import Image from 'next/image'
import img from '../assets/antoine.png'
import Button from './Button'

export default function Antoine() {
  return (
    <section id="contact" className="overflow-hidden bg-white py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left: text */}
        <div>
          <h2 className="font-display text-3xl uppercase leading-tight text-dark sm:text-4xl">
            Lorem ipsum est un texte d&apos;espace réservé couramment
          </h2>

          <div className="mt-8 space-y-5 text-sm leading-7 text-dark/80 [text-align:justify]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation{' '}
              <strong className="text-dark">ullamco laboris</strong> nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Aldus Corporation, qui a plus tard fusionné avec Adobe Systems, a
              contribué à amener Lorem Ipsum à l&apos;ère de l&apos;information
              avec son logiciel phare{' '}
              <strong className="text-dark">1985 Aldus PageMaker</strong>.
            </p>
            <p>
              Le programme était livré avec du texte factice Lorem Ipsum pour
              aider à la mise en page du contenu, et d&apos;autres traitements
              de texte comme Microsoft Word a suivi.
            </p>
          </div>

          <Button href="#" variant="primary" className="mt-10">
            Lorem ipsum est un texte
          </Button>
        </div>

        {/* Right: ANTOINE typography composition */}
        <div className="relative mx-auto w-full max-w-xl pt-16 pb-20">
          <div className="relative z-10 mt-10 ml-6 aspect-4/5 overflow-hidden">
            <Image
              src={img}
              alt="Antoine à l'entraînement"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <span className="absolute right-0 bottom-0 z-20 font-script text-5xl text-primary">
            Blanco
          </span>
        </div>
      </div>
    </section>
  )
}
