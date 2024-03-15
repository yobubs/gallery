"use client"

import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import { SearchIcon } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import { useRef } from "react"
import ImagesGrid from "./ImagesGrid"
import { Photos } from "@/models/type"

export const MotionDiv = motion.div
export const MotionUl = motion.ul
export const MotionLi = motion.li

export function LandscapeImages({ imageArr }: { imageArr: StaticImageData[] }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: "0% 0% -25%  0%", once: true })

  const controls = useAnimation()

  if (inView) controls.start({ opacity: 1, x: 0, y: 0 })

  return (
    <ul ref={ref} className="landscape-photos h-full flex gap-1">
      <li className="h-full flex-1">
        <ul className="h-full flex flex-col gap-1">
          <MotionLi
            initial={{ opacity: 0, x: 0, y: -20 }}
            animate={controls}
            className="bg-accent rounded-md py-2 px-4 flex items-center justify-between text-muted-foreground"
          >
            <p className="text-sm md:text-base">Landscape</p>
            <SearchIcon className="h-5" />
          </MotionLi>
          <MotionLi
            initial={{ opacity: 0, x: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 0.3 }}
            className="flex-1 relative"
          >
            <Image
              src={imageArr[1]}
              alt="landscape"
              fill
              sizes="(min-width: 1360px) 201px, (min-width: 780px) calc(14.11vw + 12px), calc(33.26vw - 8px)"
              className="object-cover rounded-md"
            />
          </MotionLi>
        </ul>
      </li>

      <li className="w-1/3 h-full">
        <ul className="h-full flex flex-col gap-1">
          <MotionLi
            initial={{ opacity: 0, x: 20, y: 0 }}
            animate={controls}
            transition={{ delay: 0.6 }}
            className="relative flex-1"
          >
            <Image
              src={imageArr[0]}
              alt="landscape"
              fill
              sizes="(min-width: 1360px) 399px, (min-width: 780px) calc(28.39vw + 19px), calc(66.74vw - 20px)"
              className="object-cover rounded-md"
            />
          </MotionLi>
          <MotionLi
            initial={{ opacity: 0, x: 20, y: 0 }}
            animate={controls}
            transition={{ delay: 0.9 }}
            className="relative flex-1"
          >
            <Image
              src={imageArr[2]}
              alt="landscape"
              fill
              sizes="(min-width: 1360px) 201px, (min-width: 780px) calc(14.11vw + 12px), calc(33.26vw - 8px)"
              className="object-cover rounded-md"
            />
          </MotionLi>
          <MotionLi
            initial={{ opacity: 0, x: 20, y: 0 }}
            animate={controls}
            transition={{ delay: 1.2 }}
            className="relative flex-1"
          >
            <Image
              src={imageArr[3]}
              alt="landscape"
              fill
              sizes="(min-width: 1360px) 201px, (min-width: 780px) calc(14.11vw + 12px), calc(33.26vw - 8px)"
              className="object-cover rounded-md"
            />
          </MotionLi>
        </ul>
      </li>
    </ul>
  )
}

export function ImageGridGallery({ photos }: { photos: Photos }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: "0% 0% -25%  0%", once: true })

  const controls = useAnimation()

  if (inView) controls.start({ opacity: 1, x: 0, y: 0 })
  return (
    <li
      ref={ref}
      className="relative flex-1 w-full max-h-[90vh] overflow-hidden"
    >
      <ImagesGrid columnsCountBreakPoints={[5, 6, 8]}>
        {photos.map((photo, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: -10, x: -20 }}
            animate={controls}
            transition={{ delay: index * 0.1 }}
          >
            <Image
              src={photo.urls.small}
              alt={photo.alt_description ?? ""}
              width={photo.width}
              height={photo.height}
              style={{ backgroundColor: photo.color }}
              className="w-full rounded"
            />
          </MotionDiv>
        ))}
      </ImagesGrid>

      <div className="h-1/2 w-full absolute bottom-0 left-0 bg-gradient-to-t from-20% from-background to-white/0" />
    </li>
  )
}
