import ImageSlider from "../ImageSlider"
import { Button } from "../ui/button"
import Link from "next/link"

export default function Section2() {
  return (
    <section className="bg-sky-300 h-dvh py-20 flex  items-center justify-center p-3 md:p-8 mt-10">
      <div className="border h-full w-full flex flex-col gap-14">
        <div className="flex-1 bg-red-500 h-full w-full">s</div>

        <div className="text-center text-pretty flex flex-col justify-center">
          <h3 className="text-2xl lg:text-5xl font-semibold mb-1">
            Beyond the Horizon
          </h3>
          <p className="text-muted-foreground text-xs md:text-base">
            Explore more stunning images that captivate and inspire
          </p>

          <div className="flex justify-center mt-4">
            <Link href="/collections">
              <Button>Go to Collections</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
