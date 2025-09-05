import * as React from "react"
import { cn } from "@/lib/utils"

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({
  className, ...props
}, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
