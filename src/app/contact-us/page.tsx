import { Nav } from "@/components/nav"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Facebook, MapPin, Phone, Mail, Store, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section 
        className="h-[60vh] relative flex items-center justify-center"
        style={{
        //   backgroundImage: `url('https://sjc.microlink.io/2xBokiFB-Q2nPhyXBM4Lj3XrHVkk4kHJeiPe5VtERzqZ1j7K7PbQB9iBTjQNH-XTRRweplOFb6QUGKIEjFbu2A.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="text-white text-5xl md:text-7xl font-bold relative z-10 text-center">
          Contact Us
        </h1>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>DFW Boat Ride</CardTitle>
                <CardDescription>Get in touch with us</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <a href="tel:+12145343797" className="hover:text-blue-600">
                    (214) 534-3797
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <a href="mailto:info@dfwboatride.com" className="hover:text-blue-600">
                    info@dfwboatride.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <address className="not-italic">
                    2055 Summer Lee Drive<br />
                    Rockwall, TX 75032
                  </address>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
                <CardDescription>Stay connected on social media</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="Facebook">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="TripAdvisor">
                      <Store className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle>Our Location</CardTitle>
                <CardDescription>Find us at the Rockwall Harbor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.7376623005395!2d-96.46460548481435!3d32.23151618114274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea4e8f2b46de9%3A0x4b6e97c4d4ecf0c!2s2055%20Summer%20Lee%20Dr%2C%20Rockwall%2C%20TX%2075032!5e0!3m2!1sen!2sus!4v1629308075754!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                We'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}

