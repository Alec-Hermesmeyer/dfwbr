import { Nav } from "@/components/nav"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui-components"

export default function FAQ() {
  return (
    <main className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section 
        className="h-[60vh] relative flex items-center justify-center"
        style={{
        //   backgroundImage: `url('https://sjc.microlink.io/-V_7glBvUUdCJ7whfJOa0ZSMJ1Kamvn5hbgOuoAk8dTmwFpctuG5GXbST1Q9GbCAKFTdILTF1I5Xy5Jlgn2x9Q.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="text-white text-5xl md:text-7xl font-bold relative z-10 text-center">
          FAQ
        </h1>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="why-cruise">
            <AccordionTrigger>Why Cruise with DFW Boat Ride?</AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm">
                <p>
                  DFW Boat Ride offers a unique experience on Lake Ray Hubbard with our double-deck boats. 
                  We provide professional crew, stunning views, and memorable experiences for all occasions. 
                  Our location is convenient to Dallas, and we offer both public cruises and private charters.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="boats">
            <AccordionTrigger>What Are The Boats Like?</AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm">
                <p>
                  We operate two vessels:
                </p>
                <ul>
                  <li>Harbor Lights: A 57-foot double deck power boat with climate-controlled main deck and open-air upper deck, accommodating up to 90 passengers</li>
                  <li>Sapphire Moon: A 52-foot double deck boat with premium lounge seating, accommodating up to 49 passengers</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="wear">
            <AccordionTrigger>What Should I Wear?</AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm">
                <ul>
                  <li>Comfortable, casual attire is recommended</li>
                  <li>Soft-soled shoes (no spike/stiletto heels)</li>
                  <li>Light jacket recommended for evening cruises</li>
                  <li>No bathing suits or see-through attire permitted</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="age-limit">
            <AccordionTrigger>Is there an Age Limit? Accessibility, Manual Wheelchairs Only?</AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm">
                <ul>
                  <li>No age limit for most cruises (Night Sky Cruise 18+)</li>
                  <li>Children must be accompanied by an adult</li>
                  <li>Manual wheelchairs are welcome (no powered wheelchairs)</li>
                  <li>Boats are accessible via ramp at the dock</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="safety">
            <AccordionTrigger>Is it Safe?</AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm">
                <p>
                  Yes! Safety is our top priority. We have:
                </p>
                <ul>
                  <li>Licensed and experienced captains and crew</li>
                  <li>Coast Guard approved safety equipment</li>
                  <li>Regular safety inspections</li>
                  <li>Life jackets available for all passengers</li>
                  <li>Weather monitoring systems</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="food">
            <AccordionTrigger>Can I Bring My Own Food? BYOB & Picnics Welcome On Most Cruises</AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm">
                <p>
                  Yes! We welcome:
                </p>
                <ul>
                  <li>BYOB (beer, wine, seltzers only)</li>
                  <li>Personal picnics and snacks</li>
                  <li>Catering for private events</li>
                </ul>
                <p>
                  We provide complimentary water, sodas, and ice on all cruises.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="capacity">
            <AccordionTrigger>How Many People Can I Bring? Seating Capacities</AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm">
                <ul>
                  <li>Harbor Lights: Up to 90 passengers</li>
                  <li>Sapphire Moon: Up to 49 passengers</li>
                  <li>Capacity includes all persons (guests, staff, photographers, etc.)</li>
                  <li>Captain and crew do not count toward capacity</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="restroom">
            <AccordionTrigger>Do You Have A Restroom?</AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-sm">
                <p>
                  Yes, our vessels are equipped with clean, handicap-accessible restroom facilities.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}

