"use client";

import Link from "next/link";
import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white py-6">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image src="/Logo.png" alt="DFW Boat Ride" width={200} height={60} className="h-12 w-auto" />
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {[
              { label: "Home", href: "/" },
              {
                label: "Boat Rides",
                content: [
                  { label: "Harbor Lights", href: "/harbor-lights" },
                  { label: "Sapphire Moon", href: "/sapphire-moon" },
                  { label: "Sapphire Star", href: "/sapphire-star" },
                ],
              },
              {
                label: "Private Charters",
                content: [
                  { label: "Company Outings", href: "/company-outings" },
                  { label: "Wedding Cruises", href: "/wedding-cruises" },
                  { label: "Dinner Cruises", href: "/dinner-cruises" },
                  { label: "View All Private Charters", href: "/private-charters" },
                ],
              },
              {
                label: "Public Charters",
                content: [
                  { label: "Family Cruise", href: "/family-cruise" },
                  { label: "Sunset Cruise", href: "/sunset-cruise" },
                  { label: "Night Sky Cruise", href: "/night-sky-cruise" },
                  { label: "View All Public Cruises", href: "/public-cruises" },
                ],
              },
              { label: "About", href: "/about-us" },
              {
                label: "More",
                content: [
                  { label: "Contact", href: "/contact-us" },
                  { label: "Gift Card", href: "#" },
                  { label: "Gallery", href: "#" },
                  { label: "FAQ", href: "/faq" },
                ],
              },
            ].map((menu, index) => (
              <NavigationMenuItem key={index}>
                {menu.content ? (
                  <>
                    <NavigationMenuTrigger>{menu.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-4 w-[200px]">
                        {menu.content.map((subMenu, subIndex) => (
                          <Link key={subIndex} href={subMenu.href} className="block p-2 hover:bg-gray-100 rounded">
                            {subMenu.label}
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={menu.href} legacyBehavior passHref>
                    <NavigationMenuLink className="px-3 py-2">{menu.label}</NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="bg-blue-700 hover:bg-blue-800">BOOK NOW</Button>
      </div>
    </header>
  );
}
