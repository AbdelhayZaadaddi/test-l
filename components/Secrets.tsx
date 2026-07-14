import Button from './Button'

const secrets = [
  {
    number: '#1',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M12 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm-6 1a2.5 2.5 0 1 0-2.5-2.5A2.5 2.5 0 0 0 6 12Zm12 0a2.5 2.5 0 1 0-2.5-2.5A2.5 2.5 0 0 0 18 12Zm-6 1c-2.3 0-7 1.2-7 3.5V19h14v-2.5c0-2.3-4.7-3.5-7-3.5Zm-8.2.6A4.7 4.7 0 0 0 1 17v2h3v-2.5a4.6 4.6 0 0 1 .8-2.9Zm16.4 0a4.6 4.6 0 0 1 .8 2.9V19h3v-2a4.7 4.7 0 0 0-2.8-2.4Z" />
      </svg>
    ),
    text: 'La technique facile pour réveiller ton métabolisme endormi et donc, déclencher une perte de graisse visible, saine et surtout, durable.',
    highlighted: false,
  },
  {
    number: '#2',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M18 4V2H6v2H1v4a5 5 0 0 0 5 5h.4A6 6 0 0 0 11 16.9V19H7v3h10v-3h-4v-2.1A6 6 0 0 0 17.6 13h.4a5 5 0 0 0 5-5V4ZM6 11a3 3 0 0 1-3-3V6h3Zm15-3a3 3 0 0 1-3 3V6h3Z" />
      </svg>
    ),
    text: "Ce qu'il faut changer dans ton alimentation pour obtenir des résultats visibles rapidement sans te priver, ni renoncer à tes aliments préférés.",
    highlighted: true,
  },
  {
    number: '#3',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M20.6 12.5c-1-1.2-2.7-1.6-4.6-1.2a9 9 0 0 0-2.5 1c-.9-.7-2.1-1.7-2.8-2.8-.5-.8-.5-1.5-.2-1.8s.9-.3 1.3-.1l.6.4L13.7 6l-.5-.3a3.4 3.4 0 0 0-4.2.4c-1.2 1.2-1.2 3-.1 4.8a15 15 0 0 0 3 3.3 8.4 8.4 0 0 0-1.6 3.6c-.2 1.5.2 2.9 1.2 3.9l.3.3 2-2-.4-.4c-.4-.4-.4-1-.3-1.5a6 6 0 0 1 1.3-2.5 6.4 6.4 0 0 1 2.6-1.2c.6-.1 1.4-.1 1.8.3l.4.4 2-2Z" />
        <path d="M4 3 2 5l6.3 6.3 2-2Z" />
      </svg>
    ),
    text: "Apprends à construire ton propre plan d'entraînement, structuré et simple à suivre, pour avoir un corps athlétique (tracé, dessiné, sec et musclé).",
    highlighted: false,
  },
]

export default function Secrets() {
  return (
    <section id="secrets" className="relative bg-white pt-16">
      {/* Title straddling the top edge of the gray panel */}
      <h2 className="relative z-10 mx-auto max-w-5xl px-6 text-center font-display text-3xl uppercase leading-tight text-dark sm:text-4xl md:text-5xl lg:text-[60px]">
        Lorem ipsum dolor <span className="text-primary">sit amet,</span>
        <br />
        consectetur
      </h2>

      <div className="relative -mt-10 bg-neutral-200 pt-20 pb-16">
        {/* red side bars */}
        <div className="absolute inset-y-0 left-0 hidden w-12 items-center justify-center bg-primary lg:flex">
          <span className="-rotate-90 text-sm font-bold text-white/80">
            logo
          </span>
        </div>
        <div className="absolute inset-y-0 right-0 hidden w-12 items-center justify-center bg-primary lg:flex">
          <span className="rotate-90 text-sm font-bold text-white/80">
            logo
          </span>
        </div>

        <div className="mx-auto max-w-5xl px-6">
          <div className="mt-8 grid gap-14 sm:grid-cols-3 sm:gap-6 lg:gap-10">
            {secrets.map(secret => (
              <div key={secret.number} className="flex flex-col items-center">
                <div className="relative w-full">
                  {/* icon circle overlapping the card top */}
                  <div className="absolute -top-9 left-1/2 z-10 flex h-18 w-18 -translate-x-1/2 items-center justify-center rounded-full bg-primary shadow-md">
                    {secret.icon}
                  </div>
                  <div
                    className={`px-6 pt-14 pb-8 text-center text-[13px] leading-6 shadow-sm ${
                      secret.highlighted
                        ? 'bg-primary text-white'
                        : 'bg-gray-300 text-dark/80'
                    }`}
                  >
                    {secret.text}
                  </div>
                </div>
                <p className="mt-5 font-display text-5xl uppercase tracking-wide text-black/40">
                  Secret {secret.number}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-sm leading-6 text-dark/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>

          <div className="mt-10 text-center">
            <Button href="#contact" variant="dark">
              Lorem ipsum est un texte
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
