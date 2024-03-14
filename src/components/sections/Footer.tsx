import Link from "next/link"
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6"
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi"

export default function Footer() {
  const linkIcons = [
    {
      href: "//facebook.com/minard.parilla",
      img: <FaFacebook size={24} />,
    },
    {
      href: "//instagram.com/parilla_minard",
      img: <FaInstagram size={24} />,
    },
    {
      href: "",
      img: <FaTwitter size={24} />,
    },
    {
      href: "//github.com/minardmuedan",
      img: <FaGithub size={24} />,
    },
    {
      href: "",
      img: <FaYoutube size={24} />,
    },
  ]
  return (
    <footer className="mt-20 bg-black text-white py-12 px-4 md:px-8 border-t-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-3 text-center md:text-start">
        <div>
          <h4 className="text-lg md:text-2xl mb-1 font-bold">LuminaVision</h4>
          <p className="text-sm md:text-base ">
            Explore. Enchant. Experience. Your curated gallery journey awaits,
            where stunning visuals come to life with a simple click.
          </p>
        </div>

        <div className="flex items-center justify-center gap-5">
          {linkIcons.map((icon, index) => (
            <Link
              key={index}
              href={icon.href}
              target="_blank"
              className="text-gray-500 hover:text-gray-400"
            >
              {icon.img}
            </Link>
          ))}
        </div>

        <div className="text-white/65 text-sm md:text-base sm:col-span-3 lg:col-span-1">
          <BiSolidQuoteLeft className="inline text-gray-600 me-2" />
          <i className="inline ">
            However, I consider my life worth nothing to me<span>&#59;</span> my
            only aim is to finish the race and complete the task the Lord Jesus
            has given me—the task of testifying to the good news of God
            <span>&#8217;</span>s grace.
          </i>
          <BiSolidQuoteRight className="inline text-gray-600 ms-2" />
          <p className=" mt-1 md:mt-0 inline">-Acts 20:24</p>
        </div>
      </div>

      <div className="w-full mt-12 border-t border-white/30 pt-12">
        <p className="text-center text-white/65 text-xs md:text-sm">
          © 2024 · Minard Parilla | All rights reserved
        </p>
      </div>
    </footer>
  )
}
