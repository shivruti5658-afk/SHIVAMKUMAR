'use client';

import { Controller } from 'react-hook-form';
import { PROJECT_CATEGORIES } from '@/config/contactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { FormStepProps } from './types';

export function FormStep2({ form, projectTypes }: FormStepProps) {
  const { control, formState: { errors } } = form;
  
  const availableCategories = Array.from(
    new Set(
      (projectTypes || []).flatMap(type => 
        PROJECT_CATEGORIES[type as keyof typeof PROJECT_CATEGORIES] || []
      )
    )
  );

  if (availableCategories.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-text-secondary">
          Please go back and select a project type to see available categories.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Project Categories</h2>
        <p className="text-text-secondary">Select the categories that best match your project</p>
      </div>

      <div className="space-y-4">
        <Controller
          name="categories"
          control={control}
          render={({ field }) => (
            <>
              {availableCategories.map((category) => (
                <Card key={category} className="group hover:border-accent-primary transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id={`category-${category}`}
                        checked={field.value?.includes(category)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...(field.value || []), category])
                            : field.onChange(
                                (field.value || []).filter(
                                  (value: string) => value !== category
                                )
                              );
                        }}
                        className="h-5 w-5 rounded text-accent-primary focus:ring-accent-primary"
                      />
                      <Label
                        htmlFor={`category-${category}`}
                        className="text-base font-medium text-text-primary cursor-pointer"
                      >
                        {category}
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </>
          )}
        />
      </div>

      {errors.categories && (
        <p className="mt-2 text-sm text-destructive">
          {errors.categories.message as string}
        </p>
      )}
    </div>
  );
}

