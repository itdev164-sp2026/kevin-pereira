"use client"

import { Button } from "@/components/ui/button"
import { SidebarInset } from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarInset>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid gap-4">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex min-h-svh flex-col">
              <div className="flex max-w-2xl flex-col gap-4 text-sm leading-loose">
                <div>
                  <h1 className="text-2xl font-semibold">Project ready!</h1>
                  <p className="text-muted-foreground mt-1">You may now add components and start building.</p>
                  <p className="text-muted-foreground">We've already added the button component for you.</p>
                  <Button className="mt-4">Button</Button>
                </div>
                <div className="font-mono text-xs text-muted-foreground border-t pt-4 mt-4">
                  (Press <kbd className="rounded bg-muted px-2 py-1">d</kbd> to toggle dark mode)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}
