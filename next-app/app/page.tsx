"use client"

import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <SidebarInset>
      <div className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:flex">
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:flex" />
            <BreadcrumbItem>
              <BreadcrumbPage>Overview</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

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
