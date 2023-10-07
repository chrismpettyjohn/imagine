import { ReactNode } from "react";

export type GridSizes = 'small' | 'normal' | 'large' | 'extraLarge';

export interface ImagineTheme {
  name: string;
  fontFamily: {
    primary: string;
  }
  fontSize: {
    halfUnit: string;
    oneUnit: string;
    twoUnits: string;
  }
  color: {
    green: string;
    red: string;
    black: string;
    brand: string;
    s10: string;
    s20: string;
    s30: string;
    s40: string;
    s50: string;
    s60: string;
  };
  space: {
    quarterUnit: string;
    halfUnit: string;
    oneUnit: string;
    twoUnits: string;
    threeUnits: string;
  };
  radius: {
    halfUnit: string;
    oneUnit: string;
    twoUnits: string;
    threeUnits: string;
  };
  icon: {
    oneUnit: string;
    twoUnits: string;
    threeUnits: string;
  };
  grid: Record<GridSizes, string>;
  breakPoints: {
    phone: string;
    tablet: string;
    desktop: string;
  }
  maxWidth: string;
}

export interface ThemeProviderProps {
  children: ReactNode;
}