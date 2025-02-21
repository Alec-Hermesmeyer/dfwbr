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

export default function WeddingCruises() {
  return (
    <main className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section 
        className="h-[60vh] relative flex items-center justify-center"
        style={{
          // backgroundImage: `url('https://sjc.microlink.io/s83m8q9dKn6C6DEjXw6XPeZRSKIXbfp521Qlt8bU1HrJovDliEXsb-id7VZefgcJteUn0XB99dyIVr8zWsNvFg.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="text-white text-5xl md:text-7xl font-bold relative z-10 text-center">
          Wedding Cruises
        </h1>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Memorable Weddings on the Water - Boat Weddings in Dallas/Rockwall
            </h2>
          </div>

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
              Make your important day that much more special, and impress your guests, with a scenic boat wedding in Rockwall on Lake Ray Hubbard, located just 30 minutes out from downtown Dallas. Harbor Lights makes a memorable and enjoyable venue for your special day.
            </p>

            <p>
              The perfect location for rehearsal dinners, weddings, and receptions – mixing families and friends, no rush to leave the restaurant, with enclosed climate-controlled space for those that want out of the elements and plenty of open space to move, mingle and enjoy your guests and prized moments.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>The Harbor Lights private Rehearsal Dinner/Wedding/Reception party cruise in Rockwall includes all of the following:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-disc pl-6">
                <li>Professional Captain & Crew Members</li>
                <li>Unlimited complimentary water, sodas, fruit juices, ice, and cups</li>
                <li>Use of sound system – bring your device and plug in your own playlist</li>
                <li>3 TV's for streaming videos and pictures</li>
                <li>Tables for Food Service Area</li>
                <li>Handicap Accessible Restroom</li>
                <li>Enclosed and climate controlled on the main deck</li>
                <li>Open-air sky deck</li>
                <li>1.5 hours cruising on the water – additional hours available</li>
                <li>Turn-key options for catering available</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li>Harbor Lights is a 57-foot double deck power party boat accommodating up to 90 passengers</li>
                <li>Duration of Charter: 1.5 Hours. Additional time available.</li>
                <li>Price includes taxes and crew gratuity</li>
                <li>Capacity includes all persons (wedding party, guests, service staff, DJ, photographer, etc.)</li>
                <li>Captain and crew do not count toward guest maximum</li>
                <li>Boarding Time: 30 minutes prior to event for wedding party/catering</li>
                <li>Guest boarding begins 15 minutes prior to departure</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button className="bg-blue-700 hover:bg-blue-800 text-lg px-8 py-6">
              Book Your Wedding Cruise
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

