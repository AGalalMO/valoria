/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
// ToastProvider.tsx
import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"

type ToastVariant = "success" | "error" | "info" | "warning"
type Toast = {
    id: string
    title?: string
    message: string[]
    variant: ToastVariant
    duration: number,
    isArabic:boolean
}

type Ctx = {
    show: (opts: Partial<Omit<Toast, "id">> & { message: string[] }) => void
    dismiss: (id: string) => void
}

const ToastCtx = createContext<Ctx | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([])
    const timers = useRef<Record<string, any>>({})

    const dismiss = useCallback((id: string) => {
        setToasts(t => t.filter(x => x.id !== id))
        if (timers.current[id]) {
            clearTimeout(timers.current[id])
            delete timers.current[id]
        }
    }, [])

    const show = useCallback(
        (opts: Partial<Omit<Toast, "id">> & { message: string[] }) => {
            const id = crypto.randomUUID?.() ?? Math.random().toString(36).slice(2)
            const toast: Toast = {
                id,
                message: opts.message,
                title: opts.title,
                variant: opts.variant ?? "error",
                duration: opts.duration ?? 6000,
                isArabic:opts.isArabic??false
            }
            setToasts(t => [toast, ...t])

            // auto dismiss
            timers.current[id] = setTimeout(() => dismiss(id), toast.duration)
        },
        [dismiss]
    )

    const value = useMemo(() => ({ show, dismiss }), [show, dismiss])

    return (
        <ToastCtx.Provider value={value}>
            {children}
            {createPortal(
                <div className="pointer-events-none fixed inset-0">
                    <div
                        className={`absolute ${toasts?.[0]?.isArabic ? "end-4 top-[140px]" : "start-4 top-[140px]"} z-[9999] flex flex-col gap-2`}
                    >
                        {toasts.map(t => (
                            <ToastCard key={t.id} toast={t}  />
                        ))}
                    </div>
                </div>,
                document.body
            )}
        </ToastCtx.Provider>
    )
}

export const useToast=()=> {
    const ctx = useContext(ToastCtx)
    if (!ctx) throw new Error("useToast must be used inside <ToastProvider>")
    return ctx
}

function ToastCard({ toast }: { toast: Toast }) {
    const base =
        "pointer-events-auto min-w-[340px] rounded-lg shadow-lg border bg-white text-slate-800 px-4 py-3 flex items-start gap-3 " +
        "transition-all duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out"

    const variant: Record<ToastVariant, string> = {
        success: "border-emerald-200",
        error: "border-rose-200",
        info: "border-sky-200",
        warning: "border-amber-200"
    }

    const stripe: Record<ToastVariant, string> = {
        success: "bg-emerald-500",
        error: "bg-rose-500",
        info: "bg-sky-500",
        warning: "bg-amber-500"
    }
console.log("isArabic", toast.isArabic)
    return (
        <div
            className={`${base} data-[state=closed]:translate-y-2 data-[state=closed]:opacity-0 data-[state=open]:translate-y-0 data-[state=open]:opacity-100 ${variant[toast.variant]}`}
            dir={toast?.isArabic?'rtl':'ltr'}
            data-state="open"
            role="status"
            aria-live="polite"
        >
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col gap-4 w-full">
                    {toast?.message?.map((item) => {
                        if (item == '') return
                        return (
                            <div className={`flex items-center gap-2 `}>
                                <div
                                    className={`h-6 w-1.5 rounded-sm ${stripe[toast.variant]} mt-0.5`}
                                />
                                <div className="text-base font-bold text-black opacity-85">
                                    {item}
                                </div>
                            </div>
                        )
                    })}
                   
                  
                </div>
                <div className="text-base font-bold text-black opacity-85">{toast.title}</div>
            </div>
         
        </div>
    )
}
