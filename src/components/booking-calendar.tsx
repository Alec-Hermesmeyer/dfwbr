"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { addMonths, format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BookingCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [month, setMonth] = React.useState(new Date())

  const handlePreviousMonth = () => {
    setMonth(prev => addMonths(prev, -1))
  }

  const handleNextMonth = () => {
    setMonth(prev => addMonths(prev, 1))
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Book online</CardTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={handlePreviousMonth}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous month</span>
            </Button>
            <div className="min-w-[100px] text-center font-medium">
              {format(month, "MMMM yyyy")}
            </div>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={handleNextMonth}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next month</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={month}
          className="rounded-md border"
        />
      </CardContent>
    </Card>
  )
}

