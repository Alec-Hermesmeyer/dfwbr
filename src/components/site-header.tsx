"use client";
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react" // For the hamburger and close icons

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white py-4 px-2">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 md:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.png"
            alt="DFW Boat Ride"
            width={150}
            height={50}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 ml-8">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Home
          </Link>
          <div className="group relative">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors inline-flex items-center space-x-1">
              <span>Boat Rides</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor">
                <path d="M4 8l4 4 4-4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="absolute left-0 top-full mt-2 hidden w-40 rounded-md bg-white shadow-lg group-hover:block">
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Regular Cruises
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Special Events
              </Link>
            </div>
          </div>
          <div className="group relative">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors inline-flex items-center space-x-1">
              <span>Private Charters</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor">
                <path d="M4 8l4 4 4-4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="absolute left-0 top-full mt-2 hidden w-40 rounded-md bg-white shadow-lg group-hover:block">
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Corporate Events
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Private Parties
              </Link>
            </div>
          </div>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-t bg-white ml-4">
          <div className="px-4 py-2 space-y-2">
            <Link
              href="/"
              className="block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <details>
              <summary className="text-sm font-medium text-gray-700 cursor-pointer hover:text-gray-900 transition-colors">
                Boat Rides
              </summary>
              <div className="mt-1 ml-4 space-y-1">
                <Link
                  href="#"
                  className="block text-sm text-gray-600 hover:text-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  Regular Cruises
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-gray-600 hover:text-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  Special Events
                </Link>
              </div>
            </details>

            <details>
              <summary className="text-sm font-medium text-gray-700 cursor-pointer hover:text-gray-900 transition-colors">
                Private Charters
              </summary>
              <div className="mt-1 ml-4 space-y-1">
                <Link
                  href="#"
                  className="block text-sm text-gray-600 hover:text-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  Corporate Events
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-gray-600 hover:text-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  Private Parties
                </Link>
              </div>
            </details>

            <Link
              href="/about"
              className="block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
