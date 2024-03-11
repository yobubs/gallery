import Link from "next/link"
import Image from "next/image"
import LOGO from "../../../public/logo.png"
import Menubar from "../ui/sheet"
import { SearchDialog } from "../ui/dialog"
import ThemeToggle from "../theme-povider"

export default function Navbar() {
  return (
    <nav className="navigation h-14 sticky z-40 top-0 py-1 px-2">
      <div className="bg-background/75 backdrop-blur-md h-full w-full border rounded-2xl flex items-center justify-between px-3 md:px-6 lg:px-10">
        <ul className="flex items-center md:gap-3 ">
          <li className="md:mr-4">
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              <Image src={LOGO} alt="logo" width={25} height={25} />
              <p className="text-sm md:text-base">LuminaVision</p>
            </Link>
          </li>

          <li className="hidden md:block text-muted-foreground text-sm hover:text-foreground">
            <Link href="/collections">Collections</Link>
          </li>
          <li className="hidden md:block text-muted-foreground text-sm hover:text-foreground">
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>

        <div className="flex items-center justify-end gap-2 flex-1 pl-4">
          <SearchDialog />
          <div className="md:hidden flex">
            <Menubar />
          </div>
          <div className="hidden md:block">
            <ThemeToggle buttonVariant="ghost" />
          </div>
        </div>
      </div>
    </nav>
  )
}
