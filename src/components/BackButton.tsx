"use client"

import { ChevronLeft } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export default function BackButton() {
  const router = useRouter()

  return (
    <div className="mb-2">
      <Button
        variant="ghost"
        className="underline underline-offset-4 w-fit px-3"
        onClick={() => router.back()}
      >
        <ChevronLeft size={20} />
        <p>Back</p>
      </Button>
    </div>
  )
}
