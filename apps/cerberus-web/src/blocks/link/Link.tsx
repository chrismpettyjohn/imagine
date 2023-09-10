import React from 'react';
import { LinkProps } from './Link.types';
import { Link as BaseLink, useRoute } from 'wouter';

export function Link({ ...props }: LinkProps) {
  const [isActive] = useRoute(props.href ?? props.to);
  return (
    <BaseLink {...props}>
      <a className={isActive ? 'active' : ''}>{props.children}</a>
    </BaseLink>
  );
}