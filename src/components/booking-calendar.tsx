"use client"

// import * as React from "react"
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// function addMonths(date: Date, months: number): Date {
//   const newDate = new Date(date.getTime())
//   newDate.setMonth(newDate.getMonth() + months)
//   return newDate
// }

// function formatMonthYear(date: Date): string {
//   return date.toLocaleDateString("en-US", {
//     month: "long",
//     year: "numeric",
//   })
// }

// export function BookingCalendar() {
//   const [date, setDate] = React.useState<Date | undefined>(new Date())
//   const [month, setMonth] = React.useState(new Date())

//   const handlePreviousMonth = () => {
//     setMonth(prev => addMonths(prev, -1))
//   }

//   const handleNextMonth = () => {
//     setMonth(prev => addMonths(prev, 1))
//   }

//   return (
//     <Card className="w-full max-w-[95%] sm:max-w-md mx-auto p-2 sm:p-4">
//       <CardHeader className="p-4 sm:p-6">
//         <div className="flex items-center justify-between">
//           <CardTitle className="text-base sm:text-xl font-bold">Book online</CardTitle>
//           <div className="flex items-center space-x-2">
//             <Button
//               variant="outline"
//               className="h-8 w-8 p-0"
//               onClick={handlePreviousMonth}
//             >
//               <ChevronLeft className="h-4 w-4" />
//               <span className="sr-only">Previous month</span>
//             </Button>
//             <div className="min-w-[80px] sm:min-w-[100px] text-center font-medium text-sm sm:text-base">
//               {formatMonthYear(month)}
//             </div>
//             <Button
//               variant="outline"
//               className="h-8 w-8 p-0"
//               onClick={handleNextMonth}
//             >
//               <ChevronRight className="h-4 w-4" />
//               <span className="sr-only">Next month</span>
//             </Button>
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent className="w-full flex flex-col items-center justify-center p-2 sm:p-4">
//         <Calendar
//           mode="single"
//           selected={date}
//           onSelect={setDate}
//           month={month}
//           className="rounded-md border w-full"
//         />
//       </CardContent>
//     </Card>
//   )
// }
import Script from "next/script"

export function BookingCalendar() {
  return (
    <div>
      {/* Container for FareHarbor's calendar */}
      <div id="fareharbor-calendar"></div>

      {/* Load FareHarbor's calendar script */}
      <Script
        src="https://fareharbor.com/embeds/script/calendar/dfwboatride/?fallback=simple&full-items=yes"
        strategy="afterInteractive"
      />
    </div>
  )
}
