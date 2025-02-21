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

export default function DinnerCruises() {
  return (
    <main className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section 
        className="h-[60vh] relative flex items-center justify-center"
        style={{
        //   backgroundImage: `url('https://sjc.microlink.io/gbXx4f4gMN78o7YEhfuMg6fcjx2mMxICoa4Q6xYE8tAYN0ObPPnX9h6fowYFqu5uegXYntw2PPuUFxKA3mmq8Q.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="text-white text-5xl md:text-7xl font-bold relative z-10 text-center">
          Group Dinner Cruises
        </h1>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Private Charter Dinner Cruise for a One-of-a-Kind Experience
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

          <Card>
            <CardHeader>
              <CardTitle>Pricing & Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                We offer Private Charter Dinner Cruises* which cost $1,946 (early charters) and up, plus catering costs with catering choices costing from $14 – $51 per person. Choose from our caterer, yours, or bring your own food for your private charter cruises.
              </p>
            </CardContent>
          </Card>

          <div className="prose prose-lg mx-auto">
            <p>
              Wow your guests with a dinner cruise in Rockwall on beautiful Lake Ray Hubbard. Harbor Lights and Sapphire Moon are favorites for special occasions such as office parties, anniversaries, birthdays, rehearsal dinners, or just get away with friends
            </p>

            <div className="space-y-4">
              <p className="font-semibold">Always BYOB (beer, wine, seltzers)</p>
              <p>Free sodas, cranberry juice, water, cups of ice</p>
            </div>

            <div className="space-y-4">
              <p className="font-semibold">Our recommended caterers are name-brand local restaurants and caterers:</p>
              <ul className="list-disc pl-6">
                <li>BBQ Catering</li>
                <li>Mexican Food</li>
                <li>Italian Cuisine</li>
                <li>American Classics</li>
                <li>Custom Menu Options</li>
              </ul>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Cruise Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-disc pl-6">
                <li>Professional Captain & Crew Members</li>
                <li>Sound system available – bring your device and plug in your playlist</li>
                <li>3 TV's for streaming videos and pictures (Harbor Lights)</li>
                <li>Tables for Food Service Area</li>
                <li>Handicap Accessible Restroom</li>
                <li>Enclosed and climate controlled main deck</li>
                <li>Open-air upper deck</li>
                <li>1.5 hours cruising on the water – additional hours available</li>
                <li>Turn-key options for catering available</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vessel Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Harbor Lights</h4>
                <p>57-foot double deck power party boat accommodating up to 90 passengers</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Sapphire Moon</h4>
                <p>52-foot double deck power party boat accommodating up to 49 passengers</p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button className="bg-blue-700 hover:bg-blue-800 text-lg px-8 py-6">
              Book Your Dinner Cruise
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

