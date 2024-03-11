import Hero1 from "@/../public/HERO_IMAGE1.jpg"
import Hero2 from "@/../public/HERO_IMAGE2.jpg"
import Hero3 from "@/../public/HERO_IMAGE3.jpg"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="hero-section w-full flex flex-col-reverse lg:flex-row gap-2 pt-10">
      <div className="flex-1 flex items-center justify-center p-2">
        <ul className="w-full max-w-xl flex relative py-14">
          <li className="flex-1 scale-75 ">
            <Image
              src={Hero2}
              alt="foods"
              width={200}
              height={250}
              className="w-full object-contain rounded-md -translate-y-1/3 translate-x-1/2"
            />
          </li>
          <li className="flex-1">
            <Image
              src={Hero1}
              alt="girl with flowers"
              width={200}
              height={250}
              className="w-full object-contain rounded-md z-20 relative"
            />
          </li>
          <li className="flex-1 scale-75">
            <Image
              src={Hero3}
              alt="tape recorders"
              width={200}
              height={250}
              className="w-full object-contain rounded-md translate-y-1/3 -translate-x-1/2"
            />
          </li>
        </ul>
      </div>
      <div className="md:flex-1 flex flex-col gap-1 items-center justify-center text-center lg:text-start p-3 lg:p-5">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-balance">
          A Canvas Where Each Image Tells a Different Stories
        </h1>
        <p className="text-xs md:text-lg text-muted-foreground w-fit lg:self-start mb-4">
          Exploring the Unpredictable Beauty of Every Moments.
        </p>

        <Link href="/gallery">
          <Button>Explore Gallery</Button>
        </Link>
      </div>
    </section>
  )
}
