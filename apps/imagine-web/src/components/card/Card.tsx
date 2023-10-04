import React from 'react';
import { CardProps } from './Card.types';
import { CardContent, CardElement, CardHeader } from './Card.styled';

export function Card({ children, header, ...props }: CardProps) {
  return (
    <CardElement {...props}>
      {
        header && (

          <CardHeader>
            {header}
          </CardHeader>
        )
      }
      <CardContent>
        {children}
      </CardContent>
    </CardElement>
  )
}