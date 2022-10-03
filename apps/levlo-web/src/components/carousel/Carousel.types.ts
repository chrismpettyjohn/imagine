import {ReactNode} from 'react';

export interface CarouselSlide {
  imageURL: string;
  label: ReactNode;
  description: ReactNode;
  content: ReactNode;
  btnLabel: ReactNode;
  btnAction(): void;
}

export interface CarouselProps {
  slides: CarouselSlide[];
}
