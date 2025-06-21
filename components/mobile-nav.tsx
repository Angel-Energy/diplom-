"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Gamepad2 } from "lucide-react"
import Link from "next/link"
import { Sidebar } from "./sidebar"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-900">
        <Link href="/" className="flex items-center space-x-2">
          <Gamepad2 className="h-6 w-6 text-cyan-400" />
          <span className="font-bold text-white">Сообщение 404</span>
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="text-slate-400">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-80">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
