import { Photos } from "@/models/type"
import { Button } from "../ui/button"
import Link from "next/link"
import ImagesGrid from "../ImagesGrid"
import Image from "next/image"

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
        <li className="relative flex-1 w-full max-h-[90vh] overflow-hidden">
          <ImagesGrid columnsCountBreakPoints={[5, 6, 8]}>
            {photos.map((photo, index) => (
              <div key={index}>
                <Image
                  src={photo.urls.small}
                  alt={photo.alt_description ?? ""}
                  width={photo.width}
                  height={photo.height}
                  style={{ backgroundColor: photo.color }}
                  className="w-full rounded"
                />
              </div>
            ))}
          </ImagesGrid>

          <div className="h-1/2 w-full absolute bottom-0 left-0 bg-gradient-to-t from-20% from-background to-white/0" />
        </li>

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
