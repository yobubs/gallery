"use client"

import Image, { StaticImageData } from "next/image"
import { EffectCoverflow } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function ImageSlider({
  images,
}: {
  images: { title: string; src: StaticImageData }[]
}) {
  return (
    <div className="w-full px-2">
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 300,
          modifier: 0.8,
          slideShadows: false,
        }}
        loop
        slidesPerView="auto"
        centeredSlides
        grabCursor
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="!w-fit">
            <div className="relative !w-40 md:!w-48 !aspect-[5/7] rounded-md overflow-hidden">
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-background ">
              <p className="text-muted-foreground text-center text-xs">
                {image.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
