"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function addMonths(date: Date, months: number): Date {
  const newDate = new Date(date.getTime())
  newDate.setMonth(newDate.getMonth() + months)
  return newDate
}

function formatMonthYear(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })
}

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
              {formatMonthYear(month)}
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
      <CardContent className="w-full flex items-center justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={month}
          className="rounded-md border max-w-5xl w-full flex items-center justify-center"
        />
      </CardContent>
    </Card>
  )
}
