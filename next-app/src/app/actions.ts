"use server"

import { supabase } from "@/lib/supabase"
import { projectSchema, type Project } from "@/lib/schemas"
import { ZodError } from "zod"

export async function createProject(
  data: unknown
): Promise<{ success: boolean; error?: string }> {
  try {
    // Server-side validation with Zod
    const validatedData = projectSchema.parse(data)

    // Insert into Supabase
    const { error } = await supabase
      .from("projects")
      .insert([validatedData])

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        error: error.message || "Failed to create project",
      }
    }

    return { success: true }
  } catch (error) {
    if (error instanceof ZodError) {
      const errorMessage = error.issues
        .map((err) => err.message)
        .join(", ")
      return {
        success: false,
        error: errorMessage,
      }
    }

    console.error("Unexpected error:", error)
    return {
      success: false,
      error: "An unexpected error occurred",
    }
  }
}
