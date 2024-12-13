'use client';
import { Button } from "@/components/ui-components";
import { Input } from "@/components/ui-components";
import { Anchor,  MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function LandingPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300, // Adjust based on card width
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300, // Adjust based on card width
        behavior: "smooth",
      });
    }
  };

  const reviews = [
    {
      name: "John Doe",
      review: "Amazing experience! The crew was friendly, and the views were stunning.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      review: "A fantastic boat ride, perfect for family and friends.",
      rating: 4,
    },
    {
      name: "Chris Johnson",
      review: "Beautiful sunset cruise! Definitely coming back.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      review: "A bit crowded, but the staff made it worthwhile. Great views!",
      rating: 4,
    },
    {
      name: "Michael Brown",
      review: "Perfect getaway from the busy city life. Loved every moment.",
      rating: 5,
    },
  ];
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="px-4 py-16 lg:px-6 h-16 flex items-center bg-white">
        <Link className="flex items-center justify-center" href="#">
          <Image
            alt="Tour boat on the lake"
            className="mx-auto"
            height="50"
            src="/Logo.png"
            width="150"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm text-slate-900 font-medium hover:underline underline-offset-4" href="#tours">
            Tours
          </Link>
          <Link className="text-sm text-slate-900 font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm text-slate-900 font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative w-full px-6 py-12 md:py-24 lg:py-12 xl:pt-12 xl:pb-40 xl:px-40 bg-slate-100 overflow-hidden">
          {/* Clip-Path */}
          {/* <div className="absolute inset-x-0 -bottom-6 left-6 z-10">
            <div
              className="w-full h-36 sm:h-32 md:h-40 lg:h-48 bg-blue-600 shadow-2xl"
              style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
            ></div>
          </div> */}

          {/* Content */}
          <div className="max-w-7xl mx-auto relative">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              {/* Left Content */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl text-slate-900 font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    DFW Boat Ride <br />
                    <small className="text-2xl text-slate-700">
                      Lake Ray Hubbard, Dallas | Rockwall, Texas
                    </small>
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Experience the beauty of Dallas from a unique perspective. Join us for unforgettable boat tours on the city&apos;s stunning waterways.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
                    href="#book-now"
                  >
                    Book Now
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center text-slate-900 rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900"
                    href="#learn-more"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Right Background Image */}
              <div className="relative h-[400px] bg-black lg:h-[500px] rounded-sm w-full shadow-2xl  -mb-20 z-0">
                <div
                  className="absolute inset-0 bg-cover bg-center shadow-2xl rounded-sm w-full"
                  style={{
                    backgroundImage: "url('/docked.jpeg')",
                    backgroundSize: "fill",
                    margin:'4px 0px 15px 10px',
                    
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        <section id="tours" className="w-full px-4 py-12 md:py-24 lg:py-12 bg-blue-600">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-20 text-white">Our Tours</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">

                <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300 flex flex-col items-center justify-between">
                  <div className="w-20 flex items-center justify-center pb-2">
                    <Anchor className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-200 py-2">Public Cruise</h3>
                  <p className="text-white pb-2">Experience the magic of Dallas as the sun sets over the water.</p>


                </div>

              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300 flex flex-col items-center justify-center">
                  <div className="w-20 flex items-center justify-center pb-2">
                    <MapPin className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-200 py-2">Special Events Tour</h3>
                  <p className="text-white pb-2">Discover Dallas&apos; iconic landmarks from a unique water perspective.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300 flex flex-col items-center justify-center">
                  <div className="w-20 flex items-center justify-center pb-2">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-200 py-2">Private Charters</h3>
                  <p className="text-white pb-2">Customize your own tour for special events or gatherings.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="relative w-full px-4 py-12 md:py-24 lg:py-32 bg-blue-600 -mt-12">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl pt-0 pb-2 font-bold tracking-tighter sm:text-5xl mb-12 text-white">
              Customers Love Our Rockwall Boat Cruises
            </h2>
            <div className="relative overflow-hidden pt-6">
              {/* Carousel */}
              <div
                ref={carouselRef}
                className="flex space-x-4 overflow-hidden snap-x snap-mandatory"
              >
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="snap-center shrink-0 w-[415px] bg-opacity-80 bg-gray-700 px-8 pb-10 pt-12 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center space-y-4 z-10"
                  >
                    <p className="text-lg text-white">{review.review}</p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className={`${starIndex < review.rating ? "text-yellow-400" : "text-gray-300"
                            }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="font-bold text-slate-200">{review.name}</p>
                  </div>
                ))}
              </div>
              {/* Navigation Buttons */}
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <button
                  className="w-10 h-10 bg-gray-300 rounded-full shadow-md hover:bg-gray-400 text-blue-800 flex items-center justify-center"
                  onClick={scrollLeft}
                >
                  ◀
                </button>
              </div>
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                <button
                  className="w-10 h-10 bg-gray-300 rounded-full shadow-md hover:bg-gray-400 text-blue-800 flex items-center justify-center"
                  onClick={scrollRight}
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
         
          <div className="absolute inset-x-0 -bottom-0 sm:-bottom-32 md:-bottom-0 lg:-bottom-0 -z-0">
            <div
              className="w-full h-32 sm:h-48 md:h-48 lg:h-52 bg-slate-200 shadow-2xl"
              style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
            ></div>
          </div>
        </section>
        <section id="reviews" className="w-full px-4 py-12 md:py-24 lg:py-16 bg-slate-200 relative">
        <div className="max-w-7xl mx-auto transform hover:-translate-y-2 transition duration-300 text-center z-10 bg-opacity-80 bg-gray-700 rounded-lg px-8 py-16 shadow-2xl">
            <h2 className=" text-3xl font-bold tracking-tighter sm:text-5xl text-center pb-8 text-slate-200">About Us</h2>
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center space-y-4 text-center">
                <p className="text-slate-200 text-left px-8 text-lg">
                  DFW Boat Ride is a <strong>family-owned</strong> and operated business based on <strong>Lake Ray Hubbard</strong> in Rockwall, Texas.
                  We are passionate about providing unforgettable experiences on the water, with a strong focus on <strong>safety, comfort, and creating lasting memories</strong> for our guests.
                  <br /><br />
                  With years of experience navigating the beautiful waters of Lake Ray Hubbard, our team is dedicated to delivering personalized service and a welcoming atmosphere for families, couples, and groups of all sizes.
                  Whether you&apos;re embarking on a relaxing <strong>Family Cruise</strong>, enjoying a stunning <strong>Sunset Cruise</strong>, or gazing at the stars during a <strong>Night Sky Cruise</strong>, DFW Boat Ride offers something for everyone.
                  <br /><br />
                  We take pride in our <strong>locally owned business</strong>, where every trip is crafted with care by our experienced, licensed captains and friendly crew.
                  Our goal is to ensure that every passenger feels safe, comfortable, and excited to return for more adventures on the lake.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="book-now"
          className="relative w-full px-4 py-12 md:py-24 lg:py-32 bg-slate-200 text-white"
        >
          <div className="max-w-7xl mx-auto z-20">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Set Sail?</h2>
              <p className="max-w-[600px] text-gray-200 md:text-xl">
                Book your DFW Boat Ride experience today and create memories that will last a lifetime.
              </p>
              <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 max-w-sm w-full">
                <Input
                  className="flex-1 bg-white text-gray-900 rounded-md"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-200" type="submit">
                  Book Now
                </Button>
              </form>
            </div>
          </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 DFW Boat Ride. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#terms">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#privacy">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
