export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden h-[400px] sm:h-[500px] md:h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/docked.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6 md:px-8">
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl md:mb-4 md:text-5xl">
          DFW Boat Ride
        </h1>
        <p className="mb-4 text-base sm:text-lg md:mb-8 md:text-xl">
          Lake Ray Hubbard, Dallas / Rockwall, TX
        </p>
        <div className="rounded-lg bg-white/20 px-4 py-2 text-sm backdrop-blur-sm sm:px-6 sm:py-3 sm:text-base md:text-lg">
          Save 10% on Regular Cruise Tickets. Promo Code DFWBR10
        </div>
      </div>
    </section>
  )
}
