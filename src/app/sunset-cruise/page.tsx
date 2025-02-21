import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function SunsetCruise() {
  return (
    <main className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section 
        className="h-[70vh] relative flex items-center justify-center"
        style={{
        //   backgroundImage: `url('https://sjc.microlink.io/ojBYcVQQRCKNPjPpQ4Lmnp8L9QheItoHuhqssD0R6AINR7PyX-BbRXT5szSJmZyfYEeIaS9QuzoURvdB8QL5hA.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="text-white text-5xl md:text-7xl font-bold relative z-10 text-center">
          Sunset Cruise
        </h1>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Sunset Cruises with DFW Boat Ride
            </h2>
          </div>

          <div className="prose prose-lg mx-auto">
            <p>
              Experience the beauty of a <span className="font-semibold">1.5-hour Sunset Cruise</span> on{" "}
              <span className="font-semibold">Lake Ray Hubbard</span>. As the sun begins to set, you'll be treated to stunning views of the horizon 
              reflecting off the calm waters. This cruise is perfect for families or anyone looking to unwind after a long day, as you bask in the warm glow of the sunset.
            </p>

            <p>
              Bring your loved ones aboard and experience the best of Lake Ray Hubbard with our{" "}
              <span className="font-semibold">Sunset Cruise</span>—an afternoon of fun, relaxation, and quality time on the water!
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Cruise Features</CardTitle>
              <CardDescription>Everything included in your sunset cruise experience</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4 md:grid-cols-2">
                <li className="flex items-center gap-2">
                  ✓ 1.5-hour scenic sunset tour
                </li>
                <li className="flex items-center gap-2">
                  ✓ Professional captain and crew
                </li>
                <li className="flex items-center gap-2">
                  ✓ Climate-controlled main deck
                </li>
                <li className="flex items-center gap-2">
                  ✓ Open-air upper deck
                </li>
                <li className="flex items-center gap-2">
                  ✓ Complimentary soft drinks
                </li>
                <li className="flex items-center gap-2">
                  ✓ Perfect photo opportunities
                </li>
                <li className="flex items-center gap-2">
                  ✓ Restroom facilities
                </li>
                <li className="flex items-center gap-2">
                  ✓ BYOB (beer, wine, seltzers)
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Perfect For</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4 md:grid-cols-2">
                <li className="flex items-center gap-2">
                  • Romantic evenings
                </li>
                <li className="flex items-center gap-2">
                  • Family outings
                </li>
                <li className="flex items-center gap-2">
                  • Special occasions
                </li>
                <li className="flex items-center gap-2">
                  • Group celebrations
                </li>
                <li className="flex items-center gap-2">
                  • Photography enthusiasts
                </li>
                <li className="flex items-center gap-2">
                  • Nature lovers
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold">
              Ready to Experience a Magical Sunset?
            </h3>
            <p className="text-lg text-muted-foreground">
              Book your sunset cruise today and create lasting memories on Lake Ray Hubbard
            </p>
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
              BOOK NOW
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li>• Arrive 15 minutes before departure time</li>
                <li>• Cruise duration: 1.5 hours</li>
                <li>• Bring a light jacket (recommended)</li>
                <li>• Camera recommended for sunset photos</li>
                <li>• BYOB (beer, wine, seltzers only)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}

