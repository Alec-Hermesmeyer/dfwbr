"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export interface CalendarProps {
  className?: string
  showOutsideDays?: boolean
  mode?: "single" | "range"
  selected?: Date | undefined
  onSelect?: (date: Date) => void
  month?: Date
}

const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

function getMonthDays(year: number, month: number) {
  // Returns array of days [Date, ...] for the given month (including outside days if needed)
  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)

  const firstDayOfWeek = firstDayOfMonth.getDay() // 0-based (Sunday)
  const daysInMonth = lastDayOfMonth.getDate()

  const days: Date[] = []

  // If showOutsideDays is true, we need to fill from previous month
  // For simplicity, this will be handled outside.
  // We'll just return the days of the month here.
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i))
  }

  return { firstDayOfWeek, daysInMonth, days }
}

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

function Calendar({
  className,
  showOutsideDays = true,
  selected,
  onSelect,
  month: propMonth,
}: CalendarProps) {
  const [month, setMonth] = React.useState<Date>(propMonth || new Date())

  React.useEffect(() => {
    if (propMonth) {
      setMonth(propMonth)
    }
  }, [propMonth])

  const year = month.getFullYear()
  const currentMonth = month.getMonth()

  const { firstDayOfWeek, daysInMonth, days } = getMonthDays(year, currentMonth)

  // Create the grid of days including outside days if showOutsideDays is true
  const totalCells = 42 // 6 weeks * 7 days
  const daysArray: (Date | null)[] = new Array(totalCells).fill(null)

  const startIndex = firstDayOfWeek
  for (let i = 0; i < daysInMonth; i++) {
    daysArray[startIndex + i] = days[i]
  }

  // Fill outside days if showOutsideDays
  if (showOutsideDays) {
    // fill previous month's days
    if (startIndex > 0) {
      const prevMonth = addMonths(month, -1)
      const prevLastDay = new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 0).getDate()
      for (let i = startIndex - 1; i >= 0; i--) {
        daysArray[i] = new Date(prevMonth.getFullYear(), prevMonth.getMonth(), prevLastDay - (startIndex - 1 - i))
      }
    }
    // fill next month's days
    const nextMonth = addMonths(month, 1)
    let nextDay = 1
    for (let i = startIndex + daysInMonth; i < totalCells; i++) {
      daysArray[i] = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), nextDay++)
    }
  }

  const weeks: (Date | null)[][] = []
  for (let i = 0; i < totalCells; i += 7) {
    weeks.push(daysArray.slice(i, i + 7))
  }

  const handlePreviousMonth = () => {
    setMonth(prev => addMonths(prev, -1))
  }

  const handleNextMonth = () => {
    setMonth(prev => addMonths(prev, 1))
  }

  const isSelected = (d: Date | null) => {
    if (!d || !selected) return false
    return d.toDateString() === selected.toDateString()
  }

  const handleDayClick = (d: Date | null) => {
    if (!d) return
    if (onSelect) onSelect(d)
  }

  return (
    <div className={cn("p-4 flex-col items-center justify-center", className)}>
      <div className="flex justify-between pt-1 relative items-center">
        <div className="space-x-1 flex mr-2">
          <button
            type="button"
            onClick={handlePreviousMonth}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
            )}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>
        <span className="text-sm font-medium mr-2">{formatMonthYear(month)}</span>
        <div className="space-x-1 flex items-center ml-2">
          <button
            type="button"
            onClick={handleNextMonth}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
            )}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="w-full border-collapse space-y-1 py-2">
        <div className="flex items-center justify-center">
          {dayNames.map((name) => (
            <div key={name} className="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem] text-center">
              {name}
            </div>
          ))}
        </div>
        {weeks.map((week, wIndex) => (
          <div key={wIndex} className="flex w-full mt-2 items-center justify-center">
            {week.map((day, dIndex) => {
              const isOutside = day && day.getMonth() !== currentMonth
              const dayClasses = cn(
                "relative p-0 text-center text-sm h-8 w-8 flex items-center justify-center m-0.5",
                "focus-within:relative focus-within:z-20",
                isOutside && "text-muted-foreground opacity-50",
                isSelected(day) && "bg-primary text-primary-foreground rounded-md"
              )

              return (
                <div key={dIndex} className={dayClasses}>
                  <button
                    type="button"
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "h-8 w-8 p-0 font-normal"
                    )}
                    onClick={() => handleDayClick(day)}
                    disabled={!day}
                    aria-pressed={isSelected(day)}
                  >
                    {day && day.getDate()}
                  </button>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
