import { z } from "zod";

export const contactFormSchema = z.object({
  // Step 1: Project Types
  projectTypes: z
    .array(z.string())
    .min(1, "Please select at least one project type"),

  // Step 2: Categories (dynamic based on project types)
  categories: z.array(z.string()).min(1, "Please select at least one category"),

  // Step 3: Features
  features: z.array(z.string()).optional(),

  // Step 4: Project Details
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  priority: z.enum(["low", "medium", "high"]),

  // Step 5: Contact Information
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  country: z.string().optional(),
  additionalNotes: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
