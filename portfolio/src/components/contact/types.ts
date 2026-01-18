import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "@/schemas/contact-form";

export interface FormStepProps {
  form: UseFormReturn<ContactFormValues>;
  projectTypes?: string[];
}
