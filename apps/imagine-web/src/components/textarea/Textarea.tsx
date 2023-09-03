import React, { FormEvent } from 'react';
import { TextareaProps } from './Textarea.types';
import { TextareaElement } from './Textarea.styled';

export function Textarea({ value, onChange }: TextareaProps) {
  const onChangeValue = (event: FormEvent<HTMLTextAreaElement>) => {
    onChange(event.currentTarget.value ?? '');
  }

  return (
    <TextareaElement value={value} onChange={onChangeValue} />
  )
}