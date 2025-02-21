import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"

export default function HarborLights() {
  return (
    <main className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section 
        className="h-[80vh] relative flex items-center justify-center"
        style={{
        //   backgroundImage: `url('https://sjc.microlink.io/d0Tlcz2QEe0RQwtH3ovdBiwsz1ooShrSBW8iY3lZMjmfWsc6nUqYXJ8GZSLj83qxrPuIVU72cxHxyO0y9z-8Ew.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="text-white text-5xl md:text-7xl font-bold relative z-10 text-center">
          Sapphire Star Boat Rides
        </h1>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center space-y-8">
          <Button className="bg-blue-700 hover:bg-blue-800 text-lg px-8 py-6">
            BOOK ONLINE NOW
          </Button>

          <div className="prose prose-lg mx-auto">
            <p>
            Sapphire Star is a custom built double deck power party boat accommodating 140 passengers with an enclosed main deck and open-air sky deck – designed specifically for your Lake Ray Hubbard Cruise. We have easy access boarding at the Rockwall Harbor near the lighthouse – manual wheelchair accessible (no powered wheelchairs please).

</p>

            <p className='mt-4'>
            Sapphire Star cruises include complimentary water, sodas (such as Coke, Sprite, etc), cups of ice. All our cruises are BYOB (beer, wine, seltzers only). BYOP (bring your own picnic) welcome aboard.            </p>

            <p className="font-semibold mt-4">
            Sapphire Star sails out of Rockwall Harbor in front of the Hilton in Rockwall on the eastern shore of Lake Ray Hubbard.

</p>

            <p className="font-semibold mt-4">
              2055 Summer Lee Drive, Rockwall, TX.
            </p>
          </div>
        </div>
      </section>
      {/* Additional Information Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Additional Information</h2>
          <ul className="space-y-4 list-disc pl-6">
            <li>
              A picture ID is required to board Sapphire Star for all public cruises. Name on cruise manifest must match picture ID; no exceptions. Everyone must have a completed waiver to be granted boarding – see confirmation email – no exceptions.
            </li>
            <li>
              Sapphire Star is BYOB (beer, wine, seltzer) – Roll-on coolers are ok.
            </li>
            <li>
              Sapphire Star supplies non-alcoholic refreshments, cups of ice, and water for your enjoyment.
            </li>
            <li>
              Sapphire Star can accommodate up to 90 guests, with seating on the enclosed climate control main deck and upper deck is open to the sun and stars.
            </li>
            <li>
              Appropriate dress is required. NO BATHING SUITS OR SEE THRU ATTIRE. Boarding will not be permitted for any inappropriate attire.
            </li>
            <li>
              Please wear soft soled shoes. For your safety we do not recommend high heels. Do not wear spike/stiletto heels.
            </li>
            <li>
              Sapphire Star sails out of Rockwall Harbor near the lighthouse and behind the Hilton in Rockwall on the eastern shore of Lake Ray Hubbard. The Harbor Rockwall is located at 2059 Summer Lee Drive, Rockwall, TX.
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

