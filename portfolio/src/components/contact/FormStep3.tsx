'use client';

import { Controller } from 'react-hook-form';
import { FormStepProps } from './types';
import { FEATURE_REQUIREMENTS } from '@/config/contactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export function FormStep3({ form }: FormStepProps) {
  const { control } = form;

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Feature Requirements</h2>
        <p className="text-text-secondary">Select the features you need for your project</p>
      </div>

      <div className="space-y-6">
        {FEATURE_REQUIREMENTS.map((category) => (
          <Card key={category.category}>
            <CardHeader>
              <CardTitle className="text-lg font-medium text-text-primary">{category.category}</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Controller
                name="features"
                control={control}
                render={({ field }) => (
                  <>
                    {category.features.map((feature) => {
                      const featureId = `feature-${feature.toLowerCase().replace(/\s+/g, '-')}`;
                      return (
                        <div key={feature} className="flex items-center space-x-3">
                          <Checkbox
                            id={featureId}
                            checked={field.value?.includes(feature)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...(field.value || []), feature])
                                : field.onChange(
                                    (field.value || []).filter(
                                      (value: string) => value !== feature
                                    )
                                  );
                            }}
                            className="h-5 w-5 rounded text-accent-primary focus:ring-accent-primary"
                          />
                          <Label
                            htmlFor={featureId}
                            className="text-sm font-medium text-text-primary cursor-pointer"
                          >
                            {feature}
                          </Label>
                        </div>
                      );
                    })}
                  </>
                )}
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 p-4 bg-info/10 rounded-lg">
        <p className="text-sm text-info">
          <span className="font-medium">Tip:</span> Don't worry if you're not sure about all the features. 
          We can help you refine these requirements during our initial consultation.
        </p>
      </div>
    </div>
  );
}

