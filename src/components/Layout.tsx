"use client";

import Link from "next/link";
import Image from "next/image";
import useWishlistState from "../hooks/useWishlistState";
import useSnipcartCount from "../hooks/useSnipcartCount";

import { useState } from "react";

const Layout = ({ children }) => {
  const { hasItems } = useWishlistState();
  const { cart } = useSnipcartCount();
  const cartHasItems = cart.items.count !== 0;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="py-6 md:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-row items-center justify-between">
            {/* Logo and mobile menu */}
            <div className="w-1/3 flex items-center justify-between md:justify-start">
              <div className="relative md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center text-gray-900"
                  aria-label="Toggle menu"
                >
                  <div className="rounded-full w-12 h-12 flex items-center justify-center mr-2">
                    <Image
                      src="/images/logo.png"
                      alt="Senior Software Vlogger"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link href="/">
                      <a
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Home
                      </a>
                    </Link>
                    <Link href="/about">
                      <a
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        About
                      </a>
                    </Link>
                    <Link href="/terms-of-sale">
                      <a
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Terms of Sale
                      </a>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/">
                <a className="hidden md:flex items-center text-gray-900">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Image
                      src="/images/logo.png"
                      alt="Senior Software Vlogger"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <span className="text-lg font-medium">
                    Senior Software Vlogger
                  </span>
                </a>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center justify-center w-1/3 space-x-4">
              <Link href="/about">
                <a className="text-gray-800 hover:text-blue-600 p-1 transition">
                  About
                </a>
              </Link>
              <Link href="/terms-of-sale">
                <a className="text-gray-800 hover:text-blue-600 p-1 transition">
                  Terms of Sale
                </a>
              </Link>
            </nav>

            {/* User actions */}
            <div className="flex items-center justify-end space-x-3 w-1/3">
              <button
                className="snipcart-customer-signin appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                aria-label="User login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                </svg>
              </button>
              <Link href="/wishlist">
                <a
                  className="px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 relative transition"
                  aria-label="Wishlist"
                >
                  {hasItems && (
                    <span className="absolute bg-red-500 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                  </svg>
                </a>
              </Link>
              <button
                className="snipcart-checkout appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                aria-label="Cart"
              >
                {cartHasItems && (
                  <span className="absolute bg-blue-600 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="py-6 md:py-12">
        <div className="max-w-6xl mx-auto px-6">{children}</div>
      </main>
      <footer className="max-w-6xl mx-auto px-6">
        <div className="py-6 border-t border-gray-100 text-center flex flex-col-reverse md:flex-row items-center justify-between">
          <p className="text-gray-600 text-xs mt-4 md:mt-0 md:text-sm">
            Powered by
            <a
              href="https://headlessdropshipping.com"
              title="Learn more about how this site was made"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 text-gray-800 hover:text-blue-600"
            >
              Headless Dropshipping Starter
            </a>
            , Built by{" "}
            <a
              href="https://twitter.com/notrab"
              title="Follow the creator on Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 text-gray-800 hover:text-blue-600"
            >
              @notrab
            </a>
          </p>
          <nav className="flex items-center justify-center md:justify-end space-x-3 md:space-x-6">
            <Link href="/impressum">
              <a className="text-gray-800 hover:text-blue-600 p-1 transition text-sm">
                Impressum
              </a>
            </Link>
            <Link href="/about">
              <a className="text-gray-800 hover:text-blue-600 p-1 transition text-sm">
                About
              </a>
            </Link>
            <Link href="/terms-of-sale">
              <a className="text-gray-800 hover:text-blue-600 p-1 transition text-sm">
                Terms of Sale
              </a>
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Layout;
