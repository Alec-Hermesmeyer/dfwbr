import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function PrivateCharters() {
  return (
    <main className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section 
        className="h-[70vh] relative flex items-center justify-center"
        style={{
        //   backgroundImage: `url('https://sjc.microlink.io/_5fe6nI-T4e5jiFhWfTFxfZlDL4OXvg2E20WgUiOwZwhGOR3qwtgCaGBSyyGCXsC4UpLcavtX9qJoOv0DBxLsQ.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            Private Charters
          </h1>
          <p className="text-xl md:text-2xl">
            Private Boat Rentals in Rockwall, TX
          </p>
        </div>
      </section>

      {/* Charter Types Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Wedding Cruises</CardTitle>
              <CardDescription>Make your special day unforgettable</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                Perfect for rehearsal dinners, weddings, and receptions. Create memorable moments with a scenic boat wedding on Lake Ray Hubbard.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>• 1.5 Hours. Additional time available.</li>
                <li>• BYOB</li>
                <li>• Bring a DJ, Entertainer, Catering of your choice!</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/private-charters/wedding-cruises" className="w-full">
                <Button className="w-full">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Dinner Cruises</CardTitle>
              <CardDescription>A unique dining experience</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                Enjoy a memorable dinner cruise on Lake Ray Hubbard. Perfect for special occasions, corporate events, or a night out with friends.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>• Catering options available</li>
                <li>• Climate-controlled main deck</li>
                <li>• Scenic views of the lake</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/private-charters/dinner-cruises" className="w-full">
                <Button className="w-full">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Company Outings</CardTitle>
              <CardDescription>Perfect for team building</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                Host your next corporate event, team building activity, or company celebration on the water.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>• Accommodates up to 90 guests</li>
                <li>• Audio/visual equipment available</li>
                <li>• Flexible catering options</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/private-charters/company-outings" className="w-full">
                <Button className="w-full">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Private Charters?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">Experienced Crew</h3>
              <p className="text-muted-foreground">Professional captain and crew members dedicated to your safety and enjoyment</p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">Flexible Options</h3>
              <p className="text-muted-foreground">Customizable packages to suit your specific needs and preferences</p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">Prime Location</h3>
              <p className="text-muted-foreground">Conveniently located just 30 minutes from downtown Dallas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Ready to Plan Your Private Charter?</h2>
          <p className="text-xl text-muted-foreground">
            Contact us today to start planning your perfect event on the water
          </p>
          <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
            Book Now
          </Button>
        </div>
      </section>
    </main>
  )
}

