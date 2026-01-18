'use client';

import { Controller } from 'react-hook-form';
import { FormStepProps } from './types';
import { COUNTRIES } from '@/config/contactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function FormStep5({ form }: FormStepProps) {
  const { register, control, formState: { errors } } = form;

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Your Information</h2>
        <p className="text-text-secondary">Tell us how we can reach you</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-text-primary">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...register('name')}
                  className={errors.name ? 'border-destructive' : ''}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.name.message as string}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-text-primary">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register('email')}
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.email.message as string}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-text-primary">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  {...register('phone')}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-text-primary">
                  Company Name (Optional)
                </Label>
                <Input
                  id="company"
                  placeholder="Acme Inc."
                  {...register('company')}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="country" className="text-sm font-medium text-text-primary">
                Country/Region
              </Label>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {COUNTRIES.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <Label htmlFor="additionalNotes" className="text-sm font-medium text-text-primary">
                Additional Notes or Requirements
              </Label>
              <Textarea
                id="additionalNotes"
                placeholder="Tell us more about your project, goals, or any specific requirements you have..."
                rows={5}
                {...register('additionalNotes')}
                className="resize-none"
              />
              <p className="text-xs text-text-secondary mt-1">
                Please provide any additional details that will help us understand your project better.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="p-4 bg-info/10 rounded-lg">
          <p className="text-sm text-info">
            <span className="font-medium">Next:</span> Review your information and submit the form. 
            We'll get back to you within 1-2 business days to discuss your project in detail.
          </p>
        </div>
      </div>
    </div>
  );
}
