import SwiperAnimals from "@/../public/SWIPER_IMAGE_ANIMALS.jpg"
import SwiperPeople from "@/../public/SWIPER_IMAGE_PEOPLE.jpg"
import SwiperFoods from "@/../public/SWIPER_IMAGE_FOODS.jpg"
import SwiperFurnitures from "@/../public/SWIPER_IMAGE_FURNITURES.jpg"
import SwiperPlaces from "@/../public/SWIPER_IMAGE_PLACES.jpg"

import ImageSlider from "../ImageSlider"
import { Button } from "../ui/button"
import Link from "next/link"

export default function Section2({ className }: { className: string }) {
  const images = [
    {
      title: "People",
      src: SwiperPeople,
      delay: 0,
    },

    {
      title: "Furnitures",
      src: SwiperFurnitures,
      delay: 0.4,
    },

    {
      title: "Places",
      src: SwiperPlaces,
      delay: 0.8,
    },

    {
      title: "Animal",
      src: SwiperAnimals,
      delay: 0.8,
    },

    {
      title: "Foods",
      src: SwiperFoods,
      delay: 0.4,
    },
  ]
  return (
    <section className={className}>
      <ul className="w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-14">
        <ImageSlider images={images} />

        <li className="text-center text-pretty md:text-start flex flex-col  justify-center">
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
        </li>
      </ul>
    </section>
  )
}
