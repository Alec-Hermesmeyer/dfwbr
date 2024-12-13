import { BookingCalendar } from "@/components/booking-calendar";
import { HeroSection } from "@/components/hero-section";
import { SiteHeader } from "@/components/site-header";
import { SpecialEvents } from "@/components/special-events";

export default function Home() {
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
      </main>
    </div>
  );
}
