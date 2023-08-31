import React from 'react';
import { CardProps } from './Card.types';
import { CardContent, CardElement, CardHeader } from './Card.styled';

export function Card({ children, header }: CardProps) {
  return (
    <CardElement>
      <CardContent>
        <CardHeader>
          {header}
        </CardHeader>
        {children}
      </CardContent>
    </CardElement>
  )
}