"use client"

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function ImagesGrid({
  children,
  columnsCountBreakPoints,
}: {
  children: React.ReactNode
  columnsCountBreakPoints?: number[]
}) {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{
        350: columnsCountBreakPoints ? columnsCountBreakPoints[0] : 2,
        768: columnsCountBreakPoints ? columnsCountBreakPoints[1] : 3,
        1094: columnsCountBreakPoints ? columnsCountBreakPoints[2] : 4,
      }}
    >
      <Masonry gutter="8px">{children}</Masonry>
    </ResponsiveMasonry>
  )
}
