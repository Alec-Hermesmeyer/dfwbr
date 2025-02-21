import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui-components"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export default function CompanyOutings() {
  return (
    <main className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section 
        className="h-[60vh] relative flex items-center justify-center"
        style={{
        //   backgroundImage: `url('https://sjc.microlink.io/Byvb7w4H0oAV9Nv2lB9tDRzxHwWX5Xj7DWewYDCToAZQqautbzuH1nV2o3DhedOsc_elq1skyaBMd0oLrDPvHQ.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="text-white text-5xl md:text-7xl font-bold relative z-10 text-center">
          Company Outings
        </h1>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center">
            Great venue for out of the office events
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="booking-form">
              <AccordionTrigger className="text-lg font-semibold">
                Fill out this request form to book.
              </AccordionTrigger>
              <AccordionContent>
                <ContactForm />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="prose prose-lg mx-auto">
            <p>
              Our double-deck boats, Sapphire Star, Harbor Lights and Sapphire Moon are conveniently located Lake Ray Hubbard with drive times of approximately 25 minutes from downtown Dallas or 30 minutes from PGBT & Central Expressway (Plano/Richardson). They are a great venue for your company's:
            </p>

            <ul className="list-disc pl-6">
              <li>Offsite Meeting</li>
              <li>Team Building</li>
              <li>Employee Recognition</li>
              <li>Customer Appreciation</li>
              <li>Office Parties, etc</li>
            </ul>
          </div>

          {/* Boat Information Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Harbor Lights</CardTitle>
                <CardDescription>57-foot double deck power party boat</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p>Accommodating 90 passengers with an enclosed main deck and open-air sky deck.</p>
                
                <div>
                  <h4 className="font-semibold mb-3">Includes:</h4>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Professional Captain & Crew Members</li>
                    <li>Unlimited complimentary water, sodas, fruit juices, ice and cups</li>
                    <li>Use of sound system – bring your device and plug in your own playlist. Music plays both on the main deck and the upper deck</li>
                    <li>3 TV's for streaming videos and pictures</li>
                    <li>1.5 hours cruising on the water – additional hours available</li>
                    <li>Tables for Food Service Area</li>
                    <li>Handicap Accessible Restroom</li>
                    <li>Enclosed and climate controlled on the main deck and open to the sky on the upper deck</li>
                    <li>Turn-key options for careering available</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sapphire Moon</CardTitle>
                <CardDescription>52-foot double deck open-air boat</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p>Accommodating up to 49 passengers.</p>
                
                <div>
                  <h4 className="font-semibold mb-3">Includes:</h4>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Professional Captain & Crew Members</li>
                    <li>Unlimited complimentary water, sodas, fruit juices, ice and cups</li>
                    <li>Use of sound system – bring your device and plug in your own playlist. Music plays both on the main deck and the upper deck</li>
                    <li>1.5 hours cruising on the water – additional hours available</li>
                    <li>Area for Food Service</li>
                    <li>Turn-key options for careering available</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li>Duration of Charter: 1.5 Hours. Additional time available.</li>
                <li>Price includes taxes and crew gratuity and is dependent on date, time and duration of the cruise.</li>
                <li>Capacity includes all persons, service staff, DJ, photographer, babies, etc.</li>
                <li>Captain and crew does not apply toward guest maximum.</li>
                <li>Boarding Time: 10 minutes prior to event for guests, 30 minutes for party host/catering unless prior arrangements are made.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}

