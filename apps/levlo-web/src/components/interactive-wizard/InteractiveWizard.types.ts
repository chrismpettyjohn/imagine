import {ReactNode} from 'react';

export interface InteractiveWizardStep {
  label: ReactNode;
  view: ReactNode;
  isComplete(): boolean;
}

export interface InteractiveWizardProps {
  onQuit(): void | Promise<void>;
  steps: InteractiveWizardStep[];
  onFinish(): void | Promise<void>;
}
