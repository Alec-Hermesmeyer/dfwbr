import Image from "next/image"
import { Calendar } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SpecialEvents() {
  return (
    <section className="container py-12">
      <h2 className="mb-8 text-3xl font-bold">Special Events</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Jazz Cruise</CardTitle>
            <CardDescription>November 30th, 7:00 PM</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg"
                alt="Jazz Cruise Event"
                fill
                className="object-cover"
              />
            </div>
            <p className="mb-4">
              Join us for an evening of jazz music and fine dining on Lake Ray
              Hubbard.
            </p>
            <Button className="w-full">
              <Calendar className="mr-2 h-4 w-4" />
              Book Now
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mardi Gras Dinner Cruise</CardTitle>
            <CardDescription>March 4th, 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg"
                alt="Mardi Gras Dinner Cruise"
                fill
                className="object-cover"
              />
            </div>
            <p className="mb-4">
              Experience the flavors and festivities of Mardi Gras on our special
              dinner cruise.
            </p>
            <Button className="w-full">
              <Calendar className="mr-2 h-4 w-4" />
              Book Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

