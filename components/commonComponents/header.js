/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import logo from "../../images/logo.png"
import { AiFillHome } from "react-icons/ai"
import Link from "next/link";

function Header() {
    return (
        <div className="p-8 text-center justify-between text-white mx-auto header">
            <div className="ml-10 flex items-center space-x-4 ">
                <Link href="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page"><AiFillHome /></Link>
                <Link href="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Services</Link>
                <Link href="/amenities" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Amenities</Link>
                <Link href="/" className="">
                    <Image
                        src={logo}
                        alt="Picture of the author"
                        width={150}
                        height={150}
                        priority
                        className="mx-auto"
                    />
                </Link>
                <Link href="/testimonials" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"> TESTIMONIALS</Link>
                <Link href="/faq" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">FAQ</Link>
                <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">CONTACT</Link>
            </div>
        </div>
    );
}
export default Header;