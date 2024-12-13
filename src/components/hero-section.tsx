export function HeroSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="mb-4 text-5xl font-bold">DFW Boat Ride</h1>
        <p className="mb-8 text-xl">Lake Ray Hubbard, Dallas / Rockwall, TX</p>
        <div className="rounded-lg bg-white/20 px-6 py-3 text-lg backdrop-blur-sm">
          Save 10% on Regular Cruise Tickets. Promo Code DFWBR10
        </div>
      </div>
    </section>
  )
}

