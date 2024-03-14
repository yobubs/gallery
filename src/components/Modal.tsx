"use client"

import { XIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

export function ModalWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <div
      id="photo-modal"
      className="photo-modal z-50 fixed inset-0 bg-background/50 backdrop-blur-sm pt-[20dvh] overflow-y-auto"
      onClick={() => router.back()}
    >
      {children}
    </div>
  )
}

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <div
      className="w-full bg-background min-h-dvh p-5 rounded-t-2xl border-t-2"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-end mb-2">
        <Button size="icon" variant="ghost" onClick={() => router.back()}>
          <XIcon size={30} />
        </Button>
      </div>
      {children}
    </div>
  )
}
