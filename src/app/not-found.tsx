import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PageNotfound() {
  return (
    <main className="h-[calc(100dvh-3.5rem)] flex flex-col gap-3 items-center justify-center">
      <h1 className="font-bold text-3xl md:text-5xl">Page Not Found</h1>
      <Link href="/">
        <Button>
          <span className="mr-2 text-2xl">&#8619;</span>Home
        </Button>
      </Link>
    </main>
  )
}
