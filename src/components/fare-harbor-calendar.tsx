'use client'

import { useEffect, useRef, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription } from '@/components/ui/alert'

export function FareHarborCalendar() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const script = document.createElement('script')
    script.src =
      'https://fareharbor.com/embeds/script/calendar/dfwboatride/?fallback=simple&full-items=yes'
    script.async = true

    script.onload = () => {
      setIsLoaded(true)
      const checkInterval = setInterval(() => {
        const calendar = document.getElementById('fareharbor-calendar-wrap')
        if (calendar) {
          calendar.style.height = '600px'
          calendar.style.width = '100%'
          clearInterval(checkInterval)
        }
      }, 100)

      setTimeout(() => clearInterval(checkInterval), 10000)
    }

    script.onerror = () => {
      setError('Failed to load booking calendar')
    }

    containerRef.current.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      const calendar = document.getElementById('fareharbor-calendar-wrap')
      if (calendar) calendar.remove()
    }
  }, [])

  if (error) {
    return (
      <Alert>
        <AlertDescription>
          {error}. Please refresh the page or try again later.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="w-full">
      {!isLoaded && (
        <div className="space-y-3">
          <Skeleton className="h-[600px] w-full" />
        </div>
      )}
      <div
        ref={containerRef}
        className="min-h-[600px] w-full"
        style={{ minWidth: '250px' }}
      />
    </div>
  )
}
