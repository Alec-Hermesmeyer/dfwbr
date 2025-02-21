import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function FamilyCruise() {
  return (
    <main className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section 
        className="h-[70vh] relative flex items-center justify-center"
        style={{
        //   backgroundImage: `url('https://sjc.microlink.io/mhiyDSMxL4BVxYStI7LbB7X32ULIFqjbVgdCpf0t-seD3SNUWL61HRxrfwH2gwg9EfxMS8cLBRCwBPIIpbBa-w.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="text-white text-5xl md:text-7xl font-bold relative z-10 text-center">
          Family Cruise
        </h1>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Family Cruises with DFW Boat Ride
            </h2>
          </div>

          <div className="prose prose-lg mx-auto">
            <p>
              Looking for the perfect family outing that's fun for everyone? Join us for a{" "}
              <span className="font-semibold">Family Cruise</span> on beautiful{" "}
              <span className="font-semibold">Lake Ray Hubbard</span> in Rockwall, Texas! This relaxing{" "}
              <span className="font-semibold">one-hour afternoon cruise</span> is designed with families in mind—perfect for those with younger kids who want to enjoy the scenic lake without committing to a long trip.
            </p>

            <p>
              Bring your loved ones aboard and experience the best of Lake Ray Hubbard with our{" "}
              <span className="font-semibold">Family Cruise</span>—an afternoon of fun, relaxation, and quality time on the water!
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Cruise Features</CardTitle>
              <CardDescription>Everything included in your family cruise experience</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4 md:grid-cols-2">
                <li className="flex items-center gap-2">
                  ✓ One-hour scenic lake tour
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
                  ✓ Family-friendly atmosphere
                </li>
                <li className="flex items-center gap-2">
                  ✓ Restroom facilities
                </li>
                <li className="flex items-center gap-2">
                  ✓ Perfect photo opportunities
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold">
              Ready for a Family Adventure?
            </h3>
            <p className="text-lg text-muted-foreground">
              Book your family cruise today and create lasting memories on Lake Ray Hubbard
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
                <li>• Children must be accompanied by an adult</li>
                <li>• Life jackets are provided for all passengers</li>
                <li>• Feel free to bring snacks and non-alcoholic beverages</li>
                <li>• Don't forget your camera!</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}

