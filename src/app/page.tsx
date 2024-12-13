'use client';
import { useRef } from "react";
import { BookingCalendar } from "@/components/booking-calendar";
import { HeroSection } from "@/components/hero-section";
import { SiteHeader } from "@/components/site-header";
import { SpecialEvents } from "@/components/special-events";
import Image from "next/image";
import { Button } from "@/components/ui-components";

export default function Home() {
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
    <div className="flex min-h-screen flex-col bg-gray-100">
      <SiteHeader />
      <main className="flex flex-col items-center">
        <HeroSection />

        <div className="container mx-auto py-12 px-4 md:px-20 w-full">
          <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-16 mx-auto">
            {/* Booking Section */}
            <div className="space-y-6 text-center md:text-left md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Book Your Cruise
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Join us for a memorable experience on Lake Ray Hubbard. Choose
                from our regular cruises or special events.
              </p>
              <BookingCalendar />
            </div>

            {/* Availability Section */}
            <div className="space-y-6 md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Real-time Availability
              </h2>
              <div className="rounded-lg border bg-white shadow-md p-4 md:p-6">
                <p className="text-xs md:text-sm text-gray-600">
                  Select a date to see available cruise times and book your
                  tickets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Events Section */}
        <div className="w-full bg-white py-12 flex items-center justify-center mx-auto px-4 md:px-20">
          <SpecialEvents />
        </div>
        <section id="reviews" className="w-full px-4 py-12 md:py-24 lg:py-16 bg-blue-800 relative">
        <div className="max-w-7xl mx-auto transform hover:-translate-y-2 transition duration-300 text-center z-10 bg-opacity-50 bg-gray-700 rounded-lg px-8 py-16 shadow-2xl">
            <h2 className=" text-3xl font-bold tracking-tighter sm:text-5xl text-center pb-8 text-slate-200">About Us</h2>
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center space-y-4 text-center">
                <p className="text-slate-200 text-left px-8 text-lg pb-4">
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
        
       
        <div className="max-w-7xl mx-auto text-center mt-12">
            <h2 className="text-3xl pt-0 pb-2 font-bold tracking-tighter sm:text-5xl mb-12 text-white">
              Customers Love Our Rockwall Boat Cruises
            </h2>
            <div className="relative  pt-6">
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
                  type="button"
                >
                  ◀
                </button>
              </div>
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                <button
                  className="cursor-pointer w-10 h-10 bg-gray-300 rounded-full shadow-md hover:bg-gray-400 text-blue-800 flex items-center justify-center"
                  onClick={scrollRight}
                  type="button"
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
         
          <div className="absolute inset-x-0 -bottom-0 sm:-bottom-32 md:-bottom-0 lg:-bottom-0 -z-0">
            <div
              className="w-full h-32 sm:h-48 md:h-48 lg:h-52 bg-white shadow-2xl"
              style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
            ></div>
          </div>
        </section>
        <div className="mx-auto py-24 px-4 md:px-20 w-full bg-white">
          <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-16 mx-auto">
            {/* Booking Section */}
            <div className="space-y-6 text-center md:text-left md:w-1/2">
              <Image src="/spodLogo.png" alt="Boat Ride" width={800} height={600} />
            </div>

            {/* Availability Section */}
            <div className="space-y-6 md:w-1/2 text-center md:text-left">
              
              
                <p className="text-xl">
                Looking for boat rides a little closer to downtown Dallas? Check out our sister company, The Spirit of Dallas located on White Rock Lake.
                </p>
                <Button variant="default" size="lg" className="mt-4 text-lg"> Visit The Spirit of Dallas</Button>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
