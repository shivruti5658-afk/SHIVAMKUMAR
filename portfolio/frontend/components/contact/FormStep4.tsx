'use client';

import { Controller } from 'react-hook-form';
import { FormStepProps } from './types';
import { BUDGET_RANGES, PROJECT_TIMELINES as TIMELINES, PRIORITY_LEVELS as PRIORITIES } from '@/config/contactForm';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function FormStep4({ form }: FormStepProps) {
  const { control, formState: { errors } } = form;

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Project Details</h2>
        <p className="text-text-secondary">Help us understand your project's scope and urgency</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-base font-medium text-text-primary">
                What's your budget range? <span className="text-destructive">*</span>
              </Label>
              <Controller
                name="budget"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    onValueChange={field.onChange}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2"
                  >
                    {BUDGET_RANGES.map((range) => (
                      <div key={range} className="flex items-center space-x-3">
                        <RadioGroupItem value={range} id={`budget-${range}`} />
                        <Label htmlFor={`budget-${range}`} className="text-sm font-medium text-text-primary cursor-pointer">
                          {range}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
              />
              {errors.budget && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.budget.message as string}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <Label htmlFor="timeline" className="text-base font-medium text-text-primary">
                  Expected Timeline <span className="text-destructive">*</span>
                </Label>
                <Controller
                  name="timeline"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger id="timeline">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        {TIMELINES.map((timeline) => (
                          <SelectItem key={timeline} value={timeline}>
                            {timeline}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.timeline && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.timeline.message as string}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <Label htmlFor="priority" className="text-base font-medium text-text-primary">
                  Project Priority <span className="text-destructive">*</span>
                </Label>
                <Controller
                  name="priority"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger id="priority">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        {PRIORITIES.map((priority) => (
                          <SelectItem key={priority} value={priority.toLowerCase()}>
                            {priority}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.priority && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.priority.message as string}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-6 p-4 bg-info/10 rounded-lg">
        <p className="text-sm text-info">
          <span className="font-medium">Note:</span> Your budget and timeline selections help us provide the most accurate proposal. 
          We'll work with you to refine these details during our consultation.
        </p>
      </div>
    </div>
  );
}
