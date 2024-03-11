import SwiperAnimals from "@/../public/SWIPER_IMAGE_ANIMALS.jpg"
import SwiperPeople from "@/../public/SWIPER_IMAGE_PEOPLE.jpg"
import SwiperFoods from "@/../public/SWIPER_IMAGE_FOODS.jpg"
import SwiperFurnitures from "@/../public/SWIPER_IMAGE_FURNITURES.jpg"
import SwiperPlaces from "@/../public/SWIPER_IMAGE_PLACES.jpg"

import ImageSlider from "../ImageSlider"
import { Button } from "../ui/button"
import Link from "next/link"

export default function Section2() {
  const images = [
    {
      title: "People",
      src: SwiperPeople,
    },

    {
      title: "Furnitures",
      src: SwiperFurnitures,
    },

    {
      title: "Places",
      src: SwiperPlaces,
    },

    {
      title: "Animal",
      src: SwiperAnimals,
    },

    {
      title: "Foods",
      src: SwiperFoods,
    },
  ]
  return (
    <section className="md:h-dvh py-20 flex items-center justify-center p-3 md:p-8 mt-10">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        <ImageSlider images={images} />
        <div className="text-center text-pretty md:text-start flex flex-col  justify-center">
          <h3 className="text-2xl lg:text-5xl font-semibold mb-1">
            Bookmark Your Inspirations
          </h3>
          <p className="text-muted-foreground text-xs md:text-base">
            A visual oasis for your creative journey. Save and organize stunning
            images effortlessly. Elevate your inspiration game with personalized
            collections. Start curating your visual story now.
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
