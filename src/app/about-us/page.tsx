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
import { Phone, Mail, MapPin, Ship, Users, Calendar } from 'lucide-react'

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section 
        className="h-[60vh] relative flex items-center justify-center"
        style={{
        //   backgroundImage: `url('https://sjc.microlink.io/CqTNhWWZ4Wen67xPEEohcMeFpPXUPnRjk2OtJU3GAk87P51dKJIvLELFGT_lLBcSg2eZ51dY9Zt98ruduNM1sw.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="text-white text-5xl md:text-7xl font-bold relative z-10 text-center">
          About Us
        </h1>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="space-y-12">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Public Boat Rides and Private Charter Cruises on Lake Ray Hubbard, at the Rockwall Harbor
            </h2>
            
            <p>
              DFW Boat Ride's Lake Ray Hubbard fleet includes the double deck crewed motor vessels "Harbor Lights" and 
              "Sapphire Moon", offering scenic public boat rides and private boat rental for up to 90 people for any occasion.
            </p>
          </div>

          {/* Vessels Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Harbor Lights</CardTitle>
                <CardDescription>57-foot double deck power boat</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  A climate controlled (AC and Heat) enclosed main deck and a large upper deck open to the sky and stars.
                  Perfect for larger groups and events.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Capacity: up to 90 passengers
                  </li>
                  <li className="flex items-center gap-2">
                    <Ship className="h-4 w-4" />
                    Double deck configuration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sapphire Moon</CardTitle>
                <CardDescription>52-foot double deck boat</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Premium VIP lounge style seating on the lower deck and generous upper deck, perfect for intimate gatherings.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Capacity: up to 49 passengers
                  </li>
                  <li className="flex items-center gap-2">
                    <Ship className="h-4 w-4" />
                    Open-air design
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Private Charters Info */}
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle>Private Charter Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Private charter cruises are available by special booking. Looking for caterers or other ideas for your time 
                on the water? We can make it easy for you by putting you in contact with the people that can make your event 
                a success. "Harbor Lights" and "Sapphire Moon" are double deck boats that are wonderful for events on Lake Ray Hubbard.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  214-534-3797
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Safety & Experience */}
          <div className="prose prose-lg mx-auto">
            <p className="font-medium">
              We hire only experienced, mature licensed Captains and Crew to keep you safe on the water.
            </p>
          </div>

          {/* Location Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Our Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Located at the Rockwall Harbor on Lake Ray Hubbard, we're just 30 minutes from downtown Dallas.
              </p>
              <Button variant="outline" className="mt-4">
                Get Directions
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}

