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
         Sapphire Moon Boat Rides
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
            Sapphire Moon is a 52 foot, double deck open-air boat accommodating up to 49 passengers designed specifically for your Lake Ray Hubbard cruise.

We have easy access boarding at the Rockwall Harbor near the lighthouse and is manual wheelchair accessible.            </p>

            <p>
            Sapphire Moon cruises include complimentary water, sodas (such as Coke, Sprite, etc), cups of ice. All our cruises are BYOB (beer, wine, seltzers only). BYOP (bring your own picnic) welcome aboard.            </p>

            <p className="font-semibold">
            Sapphire Moon sails out of Rockwall Harbor in back of the Hilton in Rockwall on the eastern shore of Lake Ray Hubbard.
            </p>

            <p className="font-semibold">
              2055 Summer Lee Drive, Rockwall, TX.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Additional Information</h2>
          <ul className="space-y-4 list-disc pl-6">
            <li>
            The main deck is open-air and has bar and lounge seating. The upper deck is open to the sky with bar and lounge seating.            </li>
            
            <li>
              Appropriate dress is required. NO BATHING SUITS OR SEE THRU ATTIRE. Boarding will not be permitted for any inappropriate attire.
            </li>
            <li>
              Please wear soft soled shoes. For your safety we do not recommend high heels. Do not wear spike/stiletto heels.
            </li>
            <li>
            During cooler months, bring a jacket.            </li>
            <li>
            Sapphire Moon sails out of Rockwall Harbor in back of the Hilton Rockwall on the eastern shore of Lake Ray Hubbard. 2055 Summer Lee Drive, Rockwall, TX.            </li>
            
          </ul>
        </div>
      </section>
    </main>
  )
}

