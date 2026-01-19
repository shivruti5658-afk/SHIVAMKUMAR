import * as React from 'react';
import { ContactFormData } from '@/types/contact';

interface ContactEmailProps {
  formData: ContactFormData;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({ formData }) => (
  <div>
    <h1>New Project Inquiry</h1>
    <p>You have received a new project inquiry with the following details:</p>
    <ul>
      <li><strong>Name:</strong> {formData.name}</li>
      <li><strong>Email:</strong> {formData.email}</li>
      <li><strong>Phone:</strong> {formData.phone || 'Not provided'}</li>
      <li><strong>Company:</strong> {formData.company || 'Not provided'}</li>
      <li><strong>Project Types:</strong> {formData.projectTypes?.join(', ')}</li>
    </ul>
    <p>The full, detailed project requirements are attached to this email as a PDF.</p>
    <p>Please review the attachment and follow up with the client at your earliest convenience.</p>
  </div>
);
