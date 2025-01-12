"use client";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "./data";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 justify-between w-[95vw]">
        <div className="flex flex-col items-start">
          <Link href="/" className="block py-2.5 z-10 mb-6" aria-label="home">
            <Image alt="logo" height={140} width={140} src="/theme/brand/logo.png" />
          </Link>
          <Image alt="Footer Logos" height={100} width={200} src="/images/home/FooterLogos.png" />
        </div>
        {footerLinks.map((column, index) => (
          <div key={index} className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">{column.heading}</h3>
            {column.links.map((link, linkIndex) => (
              <Link key={linkIndex} href={link.href} className="text-sm mb-2 hover:underline">
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm px-4">
        <div className="flex items-center gap-4">
          <Link href="https://twitter.com" aria-label="Twitter">
            <FaXTwitter className="text-xl text-white hover:text-gray-400 transition" />
          </Link>
          <Link href="https://linkedin.com" aria-label="LinkedIn">
            <FaLinkedinIn className="text-2xl text-white hover:text-gray-400 transition" />
          </Link>
          <Link href="https://facebook.com" aria-label="Facebook">
            <FaFacebookF className="text-xl text-white hover:text-gray-400 transition" />
          </Link>
        </div>
        <div className="mt-4 md:mt-0 flex gap-4">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:underline">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
