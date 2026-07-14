"use client";

import Image from "next/image";
import { useState } from "react";
import img1 from "../assets/Rectangle107.png";
import img2 from "../assets/0f61d4c6440a5c5e188de19aa95c4d8e43570c09.png";
import img3 from "../assets/8b35ed6de2355a7c76609e22d2f75f1cbb59da52.png";

const images = [img1, img2, img3];

const slides = [
  { title: "Lorem ipsum", subtitle: "Lorem ipsum dolor sit amet" },
  { title: "Lorem ipsum", subtitle: "Lorem ipsum dolor sit amet" },
  { title: "Lorem ipsum", subtitle: "Lorem ipsum dolor sit amet" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = (current - 1 + images.length) % images.length;
  const next = (current + 1) % images.length;

  return (
    <section className="relative overflow-hidden bg-dark py-20 text-white">
      {/* red squiggle, top right */}
      <svg
        viewBox="0 0 120 80"
        className="absolute top-10 right-8 h-16 w-24 lg:right-20"
        aria-hidden="true"
      >
        <path
          d="M5 55 Q 55 80 85 45 Q 100 22 84 20 Q 68 20 80 42 Q 92 62 115 52"
          fill="none"
          stroke="#e8394f"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <div className="mx-auto max-w-6xl px-6">
        {/* doubled heading */}
        <div className="font-display uppercase leading-[0.95]">
          <span className="block text-4xl sm:text-5xl">Témoignages</span>
          <span className="block pl-10 text-4xl text-primary sm:text-5xl">
            Témoignages
          </span>
        </div>
      </div>

      {/* carousel */}
      <div className="mt-14 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => setCurrent(prev)}
          className="relative hidden h-48 w-72 shrink-0 -translate-x-1/3 overflow-hidden opacity-60 transition-opacity hover:opacity-90 md:block lg:translate-x-0"
          aria-label="Témoignage précédent"
        >
          <Image
            src={images[prev]}
            alt=""
            fill
            unoptimized
            className="object-cover"
          />
        </button>

        <div className="relative aspect-[3/2] w-full max-w-xl shrink-0 overflow-hidden rounded-xl">
          <Image
            src={images[current]}
            alt={`Témoignage : ${slides[current].title}`}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <button
          type="button"
          onClick={() => setCurrent(next)}
          className="relative hidden h-48 w-72 shrink-0 translate-x-1/3 overflow-hidden opacity-60 transition-opacity hover:opacity-90 md:block lg:translate-x-0"
          aria-label="Témoignage suivant"
        >
          <Image
            src={images[next]}
            alt=""
            fill
            unoptimized
            className="object-cover"
          />
        </button>
      </div>

      {/* caption + dots */}
      <div className="mt-8 text-center">
        <p className="text-lg font-bold text-primary">
          {slides[current].title}
        </p>
        <p className="mt-1 text-sm text-white/80">{slides[current].subtitle}</p>
        <div className="mt-5 flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Aller au témoignage ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === current ? "bg-primary" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
