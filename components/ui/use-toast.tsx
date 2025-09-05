import * as React from "react"

type Toast = { id: number; title?: string; description?: string }
const ToastContext = React.createContext<{ toasts: Toast[]; push: (t: Omit<Toast,'id'>)=>void } | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([])
  const push = (t: Omit<Toast,'id'>) => setToasts(prev => [...prev, { id: Date.now(), ...t }])
  return (
    <ToastContext.Provider value={{ toasts, push }}>
      {children}
      <div className="fixed bottom-4 right-4 space-y-2">
        {toasts.map(t => (
          <div key={t.id} className="rounded-xl bg-white px-4 py-3 shadow-soft border border-ink/10">
            {t.title && <div className="font-medium">{t.title}</div>}
            {t.description && <div className="text-sm text-ink/70">{t.description}</div>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = React.useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used within ToastProvider")
  return ctx
}
