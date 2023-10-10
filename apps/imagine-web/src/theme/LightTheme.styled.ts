import { ImagineTheme } from "./ThemeProvider.types";

export const lightTheme: ImagineTheme = {
  name: 'Light',
  fontFamily: {
    primary: `Raleway', sans-serif`
  },
  fontSize: {
    halfUnit: '.8rem',
    oneUnit: '1.25rem',
    twoUnits: '1.53rem',
  },
  color: {
    primary: '#5D6F80',
    success: '#588E84',
    red: '#1B5E20',
    black: '#000000',
    brand: '#FFC000',
    s10: '#E3DAD3',
    s20: '#FFFFFF',
    s30: '#F6F6F6',
    s40: '#BDBCBC',
    s50: '#7B7B7B',
    s60: 'black',
  },
  space: {
    quarterUnit: '4px',
    halfUnit: '8px',
    oneUnit: '16px',
    twoUnits: '32px',
    threeUnits: '48px',
  },
  radius: {
    halfUnit: '4px',
    oneUnit: '8px',
    twoUnits: '16px',
    threeUnits: '100%',
  },
  icon: {
    oneUnit: '1.4rem',
    twoUnits: '1.8rem',
    threeUnits: '2.4rem',
  },
  grid: {
    small: 'repeat(auto-fit, minmax(150px, 1fr))',
    normal: 'repeat(auto-fit, minmax(300px, 1fr))',
    large: 'repeat(auto-fit, minmax(450px, 1fr))',
    extraLarge: 'repeat(auto-fit, minmax(600px, 1fr))',
  },
  breakPoints: {
    phone: '800px',
    tablet: '1350px',
    desktop: '1800px',
  },
  maxWidth: '1500px'
}