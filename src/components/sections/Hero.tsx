import HeroBg from "@/../public/HEROBG.png"
import Hero1 from "@/../public/HERO_IMAGE1.jpg"
import Hero2 from "@/../public/HERO_IMAGE2.jpg"
import Hero3 from "@/../public/HERO_IMAGE3.jpg"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { MotionLi } from "../MotionElements"

export default function HeroSection({ className }: { className: string }) {
  const images = [
    {
      src: Hero2,
      alt: "foods",
      className: "md:scale-75 -translate-y-1/3 translate-x-1/2",
      delay: 0,
    },
    {
      src: Hero1,
      alt: "girl with flowers",
      className: "scale-[115%] md:scale-100 relative z-20",
      delay: 0.6,
    },
    {
      src: Hero3,
      alt: "tape recorders",
      className: "md:scale-75 translate-y-1/3 -translate-x-1/2",
      delay: 0.3,
    },
  ]

  return (
    <section className={className}>
      <div className="absolute h-full w-full top-0 left-0 opacity-25 blur-[2px]">
        <Image
          src={HeroBg}
          alt=""
          fill
          sizes="(min-width: 1340px) 1216px, 92.16vw"
          className="object-cover object-center "
        />
      </div>

      <ul className="relative z-10 flex flex-col-reverse lg:flex-row gap-12 md:gap-2">
        <li className="flex-1 flex items-center justify-center p-2">
          <ul className="w-full max-w-xl flex relative py-14">
            {images.map((image, index) => (
              <MotionLi
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: image.delay }}
                key={index}
                className={`flex-1 rounded-md shadow-md shadow-black overflow-hidden ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={300}
                  quality={100}
                  placeholder="blur"
                  className="w-full object-contain"
                />
              </MotionLi>
            ))}
          </ul>
        </li>
        <li className="md:flex-1 flex flex-col gap-1 items-center justify-center text-center lg:text-start lg:p-5">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-balance">
            A Canvas Where Each Image Tells a Different Stories
          </h1>
          <p className="text-xs md:text-lg text-muted-foreground w-fit lg:self-start mb-4">
            Exploring the Unpredictable Beauty of Every Moments.
          </p>

          <Link href="/gallery">
            <Button>Explore Gallery</Button>
          </Link>
        </li>
      </ul>
    </section>
  )
}
