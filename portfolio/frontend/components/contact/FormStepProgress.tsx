'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormStepProgressProps {
  currentStep: number;
}

const steps = [
  { id: 1, name: 'Project Type' },
  { id: 2, name: 'Categories' },
  { id: 3, name: 'Features' },
  { id: 4, name: 'Details' },
  { id: 5, name: 'Your Info' },
];

export function FormStepProgress({ currentStep }: FormStepProgressProps) {
  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <nav aria-label="Progress" className="w-full">
      <div className="relative">
        {/* Background track */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border transform -translate-y-1/2" />
        {/* Progress track */}
        <div
          className="absolute top-1/2 left-0 h-0.5 bg-accent-primary transform -translate-y-1/2 transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
        <ol className="relative flex justify-between items-start">
          {steps.map((step) => {
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;

            return (
              <li key={step.id} className="flex flex-col items-center text-center w-20">
                <div
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300',
                    isCompleted
                      ? 'border-accent-primary bg-accent-primary'
                      : isCurrent
                      ? 'border-accent-primary bg-background shadow-[0_0_0_4px_var(--accent-primary-transparent)]'
                      : 'border-border bg-background'
                  )}
                  style={isCurrent ? { '--accent-primary-transparent': 'rgba(var(--accent-primary-rgb), 0.3)' } as React.CSSProperties : {}}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5 text-accent-contrast" />
                  ) : (
                    <span
                      className={cn(
                        'h-2.5 w-2.5 rounded-full transition-all duration-300',
                        isCurrent ? 'bg-accent-primary' : 'bg-border'
                      )}
                    />
                  )}
                </div>
                <p
                  className={cn(
                    'mt-2 text-sm font-medium transition-colors duration-300',
                    isCompleted || isCurrent ? 'text-accent-primary' : 'text-text-secondary'
                  )}
                >
                  {step.name}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
