import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarInset } from "@/components/ui/sidebar";

interface Project {
  id: number;
  title: string;
  description: string;
  status: "active" | "completed" | "archived";
}

async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  return data || [];
}

function getStatusColor(status: string): string {
  switch (status) {
    case "active":
      return "bg-green-500 hover:bg-green-600";
    case "completed":
      return "bg-blue-500 hover:bg-blue-600";
    case "archived":
      return "bg-gray-500 hover:bg-gray-600";
    default:
      return "bg-gray-500 hover:bg-gray-600";
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <SidebarInset>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.length === 0 ? (
            <div className="rounded-lg border bg-card p-6 col-span-full">
              <p className="text-muted-foreground">No projects found.</p>
            </div>
          ) : (
            projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.title}</span>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Project ID: {project.id}
                  </p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </SidebarInset>
  );
}