import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Moon, Stars, Wind, Music, Coffee, Ship } from 'lucide-react'

export default function NightSkyCruise() {
  return (
    <main className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section 
        className="h-[70vh] relative flex items-center justify-center"
        style={{
        //   backgroundImage: `url('https://sjc.microlink.io/ThtkaJQvHuUF4dYwn_I_Gp2MAtEDsde6DYfJB3mfOS3ETPBaqLh0j1K0Bl9S89zVZKyu0HzF1umwSD7KEyW8MQ.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="text-white text-5xl md:text-7xl font-bold relative z-10 text-center">
          Night Sky Cruise
        </h1>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Night Sky Cruises with DFW Boat Ride
            </h2>
          </div>

          <div className="prose prose-lg mx-auto">
            <p>
              For a magical evening under the stars, join us on our{" "}
              <span className="font-semibold">1-hour Night Sky Cruise</span>. This unique cruise is a peaceful way to enjoy the cool evening breeze and 
              the twinkling stars above. It's ideal for families, couples, or anyone wanting a serene night on the water. The{" "}
              <span className="font-semibold">Night Sky Cruise</span> is for people 18 years old and above!
            </p>

            <p>
              Bring your loved ones aboard and experience the best of Lake Ray Hubbard with our{" "}
              <span className="font-semibold">Night Sky</span>—an afternoon of fun, relaxation, and quality time on the water!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Moon className="h-5 w-5" />
                  Ambiance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Experience the tranquil atmosphere of Lake Ray Hubbard under the stars</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wind className="h-5 w-5" />
                  Evening Breeze
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Enjoy the cool evening air and peaceful water views</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stars className="h-5 w-5" />
                  Stargazing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Perfect conditions for viewing the night sky over the water</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Cruise Features</CardTitle>
              <CardDescription>Everything included in your night sky cruise experience</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4 md:grid-cols-2">
                <li className="flex items-center gap-2">
                  ✓ 1-hour evening cruise
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
                  ✓ Complimentary beverages
                </li>
                <li className="flex items-center gap-2">
                  ✓ Ambient lighting
                </li>
                <li className="flex items-center gap-2">
                  ✓ Comfortable seating
                </li>
                <li className="flex items-center gap-2">
                  ✓ BYOB (beer, wine, seltzers)
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold">
              Ready for a Magical Evening?
            </h3>
            <p className="text-lg text-muted-foreground">
              Book your night sky cruise today and experience the beauty of Lake Ray Hubbard after dark
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
                <li>• Must be 18 years or older to participate</li>
                <li>• Arrive 15 minutes before departure time</li>
                <li>• Cruise duration: 1 hour</li>
                <li>• Bring a light jacket (recommended)</li>
                <li>• BYOB (beer, wine, seltzers only)</li>
                <li>• Valid ID required</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}

