"use client"

import Image, { StaticImageData } from "next/image"
import { EffectCoverflow } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { MotionUl } from "./MotionElements"
import { useAnimation, useInView } from "framer-motion"
import { useRef } from "react"

export default function ImageSlider({
  images,
}: {
  images: { title: string; src: StaticImageData; delay: number }[]
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: "0% 0% -25%  0%", once: true })

  const controls = useAnimation()

  if (inView) controls.start({ opacity: 1, x: 0, y: 0 })

  return (
    <li ref={ref} className="w-full px-2">
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
            <MotionUl
              initial={{ opacity: 0, y: -30 }}
              animate={controls}
              transition={{ delay: image.delay }}
            >
              <li className="relative !w-40 md:!w-48 !aspect-[5/7] rounded-md overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(min-width: 780px) 192px, 160px"
                  className="object-cover"
                />
              </li>
              <li className="bg-background ">
                <p className="text-muted-foreground text-center text-xs">
                  {image.title}
                </p>
              </li>
            </MotionUl>
          </SwiperSlide>
        ))}
      </Swiper>
    </li>
  )
}
