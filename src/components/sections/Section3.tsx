import { Photos } from "@/models/type"
import { Button } from "../ui/button"
import Link from "next/link"
import { ImageGridGallery } from "../MotionElements"

export default function Section3({
  className,
  photos,
}: {
  className: string
  photos: Photos
}) {
  return (
    <section className={className}>
      <ul className="h-full w-full flex flex-col">
        <ImageGridGallery photos={photos} />

        <li className="text-center text-pretty flex flex-col justify-center">
          <h3 className="text-2xl lg:text-5xl font-semibold mb-1">
            Beyond the Horizon
          </h3>
          <p className="text-muted-foreground text-xs md:text-base">
            Explore more stunning images that captivate and inspire
          </p>

          <div className="flex justify-center mt-4">
            <Link href="/gallery">
              <Button>Go to Gallery</Button>
            </Link>
          </div>
        </li>
      </ul>
    </section>
  )
}
