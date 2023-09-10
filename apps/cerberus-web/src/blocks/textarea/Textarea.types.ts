import { HTMLProps } from "react";

export interface TextareaProps extends Omit<HTMLProps<HTMLTextAreaElement>, 'value' | 'onChange'> {
  value: string;
  onChange(newValue: string): void;
}