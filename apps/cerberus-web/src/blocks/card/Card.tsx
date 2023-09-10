import React from 'react';
import { CardProps } from './Card.types';
import { CardContent, CardElement, CardHeader } from './Card.styled';

export function Card({ children, elevation = 1, header, ...props }: CardProps) {
  return (
    <CardElement $elevation={elevation} {...props}>
      <CardContent>
        {
          header && (

            <CardHeader>
              {header}
            </CardHeader>
          )
        }
        {children}
      </CardContent>
    </CardElement>
  )
}