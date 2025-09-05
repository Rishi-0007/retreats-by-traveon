import * as React from "react"
import { cn } from "@/lib/utils"

export function Select({ className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn("h-10 w-full rounded-xl border border-ink/10 bg-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", className)}
      {...props}
    >
      {children}
    </select>
  )
}
