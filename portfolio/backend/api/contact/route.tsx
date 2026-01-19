import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ReactElement } from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { ContactFormData } from "@/types/contact";
import { ProjectRequirementPDF } from "@/components/pdfs/ProjectRequirementPDF";
import { ContactEmail } from "@/components/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData: ContactFormData = await request.json();

    // 1. Generate PDF
    const pdfComponent = ProjectRequirementPDF(formData);
    const pdfBuffer = await renderToBuffer(pdfComponent);
    const pdfBase64 = pdfBuffer.toString("base64");

    // 2. Send email without awaiting the response to improve performance
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["shivam.kumar.virtual@gmail.com"],
      subject: `New Project Inquiry from ${formData.name}`,
      react: ContactEmail({ formData }) as React.ReactElement,
      attachments: [
        {
          filename: `Project_Requirements_${formData.name.replace(/\s+/g, "_")}.pdf`,
          content: pdfBase64,
          contentType: "application/pdf",
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
