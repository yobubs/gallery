"use client"

import { MouseEvent, useState } from "react"
import { Button } from "./ui/button"

export default function DownloadImage({
  url,
  fileName,
}: {
  url: string
  fileName?: string
}) {
  const [isDownloading, setIsDownloading] = useState(false)
  function downloadImageOnClick(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    e.preventDefault()
    setIsDownloading(true)
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobURl = window.URL.createObjectURL(new Blob([blob]))
        const anchorTag = document.createElement("a")
        anchorTag.href = blobURl
        anchorTag.setAttribute(
          "download",
          fileName ? `${fileName}.jpg` : "image.jpg"
        )
        document.body.appendChild(anchorTag)
        anchorTag.click()
        anchorTag.remove()

        setIsDownloading(false)
      })
  }
  return (
    <Button onClick={(e) => downloadImageOnClick(e)} disabled={isDownloading}>
      {isDownloading ? "Downloading..." : "Download"}
    </Button>
  )
}
