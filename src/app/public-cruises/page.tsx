import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Ship, Sun, Moon, Users, Clock, Calendar } from 'lucide-react'

export default function PublicCharter() {
  return (
    <main className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section 
        className="h-[70vh] relative flex items-center justify-center"
        style={{
        //   backgroundImage: `url('https://sjc.microlink.io/xAs6-MPg7xI32ECrgImx-eEqAGtr0QJs_S33hPxcS17ilr4lkGfMhO2qzfu8gUCEXPSN4NVu5IWBV38TXGLDFw.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            Public Cruises
          </h1>
          <p className="text-xl md:text-2xl">
            Public Boat Tours in Rockwall, TX
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="space-y-16">
          {/* Afternoon Family Cruises Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-6 bg-gradient-to-br from-green-100 to-emerald-50">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Ship className="h-6 w-6 text-green-500" />
                  <h3 className="text-xl font-semibold">Family Adventure</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">✓ Relaxing 1-hour cruise</li>
                  <li className="flex items-center gap-2">✓ Perfect for all ages</li>
                  <li className="flex items-center gap-2">✓ Engaging crew and activities</li>
                  <li className="flex items-center gap-2">✓ Scenic views and fresh air</li>
                </ul>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Afternoon Family Cruises</h2>
              <div className="prose prose-lg">
                <p>
                  Join us for a relaxing hour-long boat ride on Lake Ray Hubbard, where 
                  you and your family can take in the stunning scenery of the surrounding 
                  areas. As you cruise through the calm waters, enjoy the sounds of soothing 
                  music, engage with our friendly captain and crew, and learn a little about 
                  the history and beauty of the lake.
                </p>
                <p>
                  This family-friendly excursion is designed to be both relaxing and 
                  engaging, offering an ideal blend of sightseeing and entertainment. 
                  Whether you choose to sit back and watch the beautiful landscapes glide 
                  by or actively participate in the experience, there's something for 
                  everyone to enjoy.
                </p>
              </div>
              <Button variant="outline" className="mt-4" asChild>
                <a href="/family-cruise">Learn More</a>
              </Button>
            </div>
          </div>
          {/* Cruise Features */}
          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Duration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>1-hour cruise on Lake Ray Hubbard</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Capacity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Comfortable seating for families and groups</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Scheduling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Multiple departure times available daily</p>
              </CardContent>
            </Card>
          </div> */}
{/* Sunset Cruise Section */}
<div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Sunset Cruise</h2>
              <div className="prose prose-lg">
                <p>
                  Join us for a relaxing 1.5-hour Sunset Cruise on Lake Ray Hubbard, where 
                  you and your loved ones can soak in the beauty of a Texas sunset. As the 
                  sun dips below the horizon, watch the sky explode in vibrant colors while 
                  gliding across the peaceful waters. Enjoy calming music, chat with our 
                  friendly captain and crew, and take in the stunning views of the surrounding 
                  landscapes.
                </p>
                <p>
                  This sunset excursion offers the ideal mix of relaxation and sightseeing. 
                  Whether you're unwinding after a long day or looking for a scenic way to 
                  connect with nature, our Sunset Cruise provides a memorable experience for 
                  all ages.
                </p>
              </div>
              <Button variant="outline" className="mt-4" asChild>
                <a href="/sunset-cruise">Learn More</a>
              </Button>
            </div>
            <Card className="p-6 bg-gradient-to-br from-orange-100 to-amber-50">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Sun className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-semibold">Sunset Experience</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">✓ 1.5-hour scenic cruise</li>
                  <li className="flex items-center gap-2">✓ Stunning sunset views</li>
                  <li className="flex items-center gap-2">✓ Perfect for photography</li>
                  <li className="flex items-center gap-2">✓ Relaxing atmosphere</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Night Sky Cruises Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-6 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Moon className="h-6 w-6 text-blue-200" />
                  <h3 className="text-xl font-semibold">Night Sky Experience</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">✓ 1-hour evening cruise</li>
                  <li className="flex items-center gap-2">✓ Stargazing opportunities</li>
                  <li className="flex items-center gap-2">✓ Peaceful atmosphere</li>
                  <li className="flex items-center gap-2">✓ Romantic setting</li>
                </ul>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Night Sky Cruises</h2>
              <div className="prose prose-lg">
                <p>
                  Embark on a peaceful 1-hour cruise under the stars on Lake Ray Hubbard, 
                  perfect for those who want to enjoy the beauty of the night sky while 
                  drifting along tranquil waters. With only the stars and moon to light 
                  your path, this cruise offers a serene and quiet escape from the hustle 
                  and bustle. Let the soft night breeze and soothing music relax you, while 
                  our crew ensures your evening is as enjoyable as possible.
                </p>
                <p>
                  Our Night Sky Cruise is designed for stargazers, romantics, and anyone 
                  seeking a calm, evening getaway. It's the perfect way to end your day 
                  and take in the simple beauty of the night.
                </p>
              </div>
              <Button variant="outline" className="mt-4" asChild>
                <a href="/night-sky-cruise">Learn More</a>
              </Button>
            </div>
          </div>
          {/* What's Included */}
          <Card>
            <CardHeader>
              <CardTitle>What's Included</CardTitle>
              <CardDescription>Every public cruise includes the following amenities</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4 md:grid-cols-2">
                <li className="flex items-center gap-2">✓ Professional captain and crew</li>
                <li className="flex items-center gap-2">✓ Comfortable seating areas</li>
                <li className="flex items-center gap-2">✓ Complimentary soft drinks</li>
                <li className="flex items-center gap-2">✓ Clean restroom facilities</li>
                <li className="flex items-center gap-2">✓ Sound system with music</li>
                <li className="flex items-center gap-2">✓ Scenic lake views</li>
                <li className="flex items-center gap-2">✓ Climate-controlled main deck</li>
                <li className="flex items-center gap-2">✓ Open-air upper deck</li>
              </ul>
            </CardContent>
          </Card>

          {/* Booking Section */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Book Your Cruise?</h2>
            <p className="text-lg text-muted-foreground">
              Select your preferred date and time to begin your Lake Ray Hubbard adventure
            </p>
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
              Book Now
            </Button>
          </div>

          {/* Important Information */}
          <Card>
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li>• Arrive 15 minutes before departure time</li>
                <li>• Valid ID required for all adult passengers</li>
                <li>• Children must be accompanied by an adult</li>
                <li>• Weather-dependent operation</li>
                <li>• Comfortable shoes recommended</li>
                <li>• Camera recommended for photos</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}

