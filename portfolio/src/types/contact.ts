export interface ContactFormData {
  // Personal Information
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  
  // Project Details
  projectTypes: string[];
  categories: string[];
  features: string[];
  
  // Budget & Timeline
  budget?: string;
  timeline?: string;
  priority?: 'low' | 'medium' | 'high';
  
  // Additional Information
  additionalNotes?: string;
  
  // Metadata
  submittedAt?: Date;
}
