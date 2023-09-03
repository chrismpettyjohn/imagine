import React, { FormEvent } from 'react';
import { TextareaProps } from './Textarea.types';
import { TextareaElement } from './Textarea.styled';

export function Textarea({ value, onChange, ...props }: TextareaProps) {
  const onChangeValue = (event: FormEvent<HTMLTextAreaElement>) => {
    onChange(event.currentTarget.value ?? '');
  }

  return (
    <TextareaElement value={value} onChange={onChangeValue} {...props} />
  )
}