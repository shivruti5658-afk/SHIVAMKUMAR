'use client';

import * as React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

import { contactFormSchema, type ContactFormValues } from '@/schemas/contact-form';
import { FormStep1 } from './FormStep1';
import { FormStep2 } from './FormStep2';
import { FormStep3 } from './FormStep3';
import { FormStep4 } from './FormStep4';
import { FormStep5 } from './FormStep5';
import { FormStepProgress } from './FormStepProgress';
import { Button } from '@/components/ui/button';

const steps = [
  { id: 1, name: 'Project Type', fields: ['projectTypes'] },
  { id: 2, name: 'Categories', fields: ['categories'] },
  { id: 3, name: 'Features', fields: ['features'] },
  { id: 4, name: 'Details', fields: ['budget', 'timeline', 'priority'] },
  { id: 5, name: 'Your Info', fields: ['name', 'email'] },
];

export function ContactForm() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const methods = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      projectTypes: [],
      categories: [],
      features: [],
      budget: '',
      timeline: '',
      priority: 'medium',
      name: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      additionalNotes: '',
    },
  });

  const { handleSubmit, trigger, watch } = methods;
  const projectTypes = watch('projectTypes');

  const nextStep = async () => {
    const fields = steps[currentStep - 1].fields;
    const output = await trigger(fields as (keyof ContactFormValues)[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length) {
      setCurrentStep((step) => step + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((step) => step - 1);
    }
  };

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setIsSubmitting(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSuccess(true);
    } catch (error) {
      console.error('Form submission error:', error);
      // You can add a toast notification here for the error
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-green-600">Form Submitted Successfully!</h2>
        <p className="mt-4 text-gray-700">Thank you for your submission. We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <FormStepProgress currentStep={currentStep} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 1 && <FormStep1 form={methods} />}
              {currentStep === 2 && <FormStep2 form={methods} projectTypes={projectTypes} />}
              {currentStep === 3 && <FormStep3 form={methods} />}
              {currentStep === 4 && <FormStep4 form={methods} />}
              {currentStep === 5 && <FormStep5 form={methods} />}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-between">
            <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 1}>
              Previous
            </Button>

            {currentStep < steps.length ? (
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Project'
                )}
              </Button>
            )}
          </div>

        </form>
      </FormProvider>
    </div>
  );
}
