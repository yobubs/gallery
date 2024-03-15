import Landscape1 from "@/../public/LANDSCAPE.jpg"
import Landscape2 from "@/../public/LANDSCAPE2.jpg"
import Landscape3 from "@/../public/LANDSCAPE3.jpg"
import Landscape4 from "@/../public/LANDSCAPE4.jpg"

import { Button } from "../ui/button"
import { SearchDialog } from "../ui/dialog"
import { LandscapeImages } from "../MotionElements"

export default function Section1({ className }: { className: string }) {
  return (
    <section className={className}>
      <ul className="flex flex-col md:flex-row items-center justify-center gap-14 md:gap-2">
        <li className="flex-1 text-center text-pretty md:text-start">
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
        </li>

        <li className="h-full w-full flex-1 flex items-center justify-center">
          <div className="aspect-[16/8] w-full">
            <LandscapeImages
              imageArr={[Landscape1, Landscape2, Landscape3, Landscape4]}
            />
          </div>
        </li>
      </ul>
    </section>
  )
}
