"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import { projectSchema, type Project } from "@/lib/schemas"
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
  FieldGroup,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { createProject } from "@/app/actions"

export function ProjectForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Project>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      status: "active",
    },
  })

  const statusValue = watch("status")

  async function onSubmit(data: Project) {
    try {
      const result = await createProject(data)
      if (result.success) {
        toast.success("Project created successfully!")
        // Reset form would go here if needed
      } else {
        toast.error(result.error || "Failed to create project")
      }
    } catch (error) {
      toast.error("An error occurred while creating the project")
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
      <FieldGroup>
        <Field>
          <FieldContent>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <Input
              id="title"
              placeholder="Enter project title"
              {...register("title")}
              aria-invalid={!!errors.title}
            />
            <FieldError errors={[errors.title]} />
          </FieldContent>
        </Field>

        <Field>
          <FieldContent>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <Textarea
              id="description"
              placeholder="Enter project description"
              {...register("description")}
              aria-invalid={!!errors.description}
            />
            <FieldError errors={[errors.description]} />
          </FieldContent>
        </Field>

        <Field>
          <FieldContent>
            <FieldLabel htmlFor="status">Status</FieldLabel>
            <Select
              value={statusValue}
              onValueChange={(value) => setValue("status", value as "active" | "completed" | "archived")}
            >
              <SelectTrigger id="status" aria-invalid={!!errors.status}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
            <FieldError errors={[errors.status]} />
          </FieldContent>
        </Field>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Creating..." : "Create Project"}
        </Button>
      </FieldGroup>
    </form>
  )
}
