import Landscape1 from "@/../public/LANDSCAPE.jpg"
import Landscape2 from "@/../public/LANDSCAPE2.jpg"
import Landscape3 from "@/../public/LANDSCAPE3.jpg"
import Landscape4 from "@/../public/LANDSCAPE4.jpg"

import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import { SearchDialog } from "../ui/dialog"

export default function Section1() {
  return (
    <section className="md:h-dvh py-20 flex items-center justify-center p-3 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-2">
        <div className="flex-1 text-center text-pretty md:text-start">
          <h3 className="text-2xl lg:text-5xl font-semibold mb-1">
            Explore Innovative Concepts
          </h3>
          <p className="text-muted-foreground text-xs md:text-base">
            Embark on a visual adventure with our curated collection, unveiling
            captivating moments that transcend the ordinary. Join the
            <span>&#34;</span> Image Expeditions<span>&#34;</span> and explore
            the extraordinary.
          </p>

          <div className="flex justify-center mt-4">
            <SearchDialog
              customTrigger={<Button>Search for Anything</Button>}
            />
          </div>
        </div>

        <div className="h-full w-full flex-1 flex items-center justify-center">
          <div className="aspect-[16/8] w-full">
            <ul className="landscape-photos h-full flex gap-1">
              <li className="flex-1 h-full flex flex-col gap-1">
                <div className="bg-accent rounded-md py-2 px-4 flex items-center justify-between text-muted-foreground">
                  <p className="text-sm md:text-base">Landscape</p>
                  <SearchIcon className="h-5" />
                </div>
                <div className="flex-1 relative">
                  <Image
                    src={Landscape2}
                    alt="landscape"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </li>

              <li className="w-1/3 h-full">
                <ul className="h-full flex flex-col gap-1">
                  <li className="relative flex-1">
                    <Image
                      src={Landscape1}
                      alt="landscape"
                      fill
                      className="object-cover rounded-md"
                    />
                  </li>
                  <li className="relative flex-1">
                    <Image
                      src={Landscape3}
                      alt="landscape"
                      fill
                      className="object-cover rounded-md"
                    />
                  </li>
                  <li className="relative flex-1">
                    <Image
                      src={Landscape4}
                      alt="landscape"
                      fill
                      className="object-cover rounded-md"
                    />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
