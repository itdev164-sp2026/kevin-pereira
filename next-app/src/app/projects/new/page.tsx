import { SidebarInset } from "@/components/ui/sidebar"
import { ProjectForm } from "@/components/project-form"

export default function NewProjectPage() {
  return (
    <SidebarInset>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="rounded-lg border bg-card p-6">
          <h1 className="mb-6 text-2xl font-bold">Create New Project</h1>
          <ProjectForm />
        </div>
      </div>
    </SidebarInset>
  )
}
