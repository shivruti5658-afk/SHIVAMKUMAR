'use client';

import { Controller } from 'react-hook-form';
import { FormStepProps } from './types';
import { PROJECT_TYPES } from '@/config/contactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export function FormStep1({ form }: FormStepProps) {
  const { control, formState: { errors } } = form;

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">What type of project do you need?</h2>
        <p className="text-text-secondary">Select all that apply to your project requirements</p>
      </div>

      <div className="space-y-4">
        <Controller
          name="projectTypes"
          control={control}
          render={({ field }) => (
            <>
              {PROJECT_TYPES.map((type) => (
                <Card key={type} className="group hover:border-accent-primary transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id={`project-type-${type}`}
                        checked={field.value?.includes(type)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...(field.value || []), type])
                            : field.onChange(
                                (field.value || []).filter(
                                  (value: string) => value !== type
                                )
                              );
                        }}
                        className="h-5 w-5 rounded text-accent-primary focus:ring-accent-primary"
                      />
                      <Label
                        htmlFor={`project-type-${type}`}
                        className="text-base font-medium text-text-primary cursor-pointer"
                      >
                        {type}
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </>
          )}
        />
      </div>

      {errors.projectTypes && (
        <p className="mt-2 text-sm text-destructive">
          {errors.projectTypes.message as string}
        </p>
      )}
    </div>
  );
}

