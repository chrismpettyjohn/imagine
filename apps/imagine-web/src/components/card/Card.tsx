import React from 'react';
import { CardProps } from './Card.types';
import { CardContent, CardElement, CardHeader } from './Card.styled';

export function Card({ children, header, headerImage, ...props }: CardProps) {
  return (
    <CardElement {...props}>
      {
        header && (

          <CardHeader>
            {header}
            {headerImage && <img src={headerImage} height={30} width={30} style={{ objectFit: 'cover' }} />}
          </CardHeader>
        )
      }
      <CardContent>
        {children}
      </CardContent>
    </CardElement>
  )
}