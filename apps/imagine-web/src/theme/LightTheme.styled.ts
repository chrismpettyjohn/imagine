import { ImagineTheme } from "./ThemeProvider.types";

export const lightTheme: ImagineTheme = {
  name: 'Light',
  fontFamily: {
    primary: 'Maven Pro'
  },
  fontSize: {
    halfUnit: '.8rem',
    oneUnit: '1.25rem',
    twoUnits: '1.53rem',
  },
  color: {
    black: '#000000',
    brand: '#711b1eff',
    s10: '#EAEAEA',
    s20: '#FFFFFF',
    s30: '#197AA0',
    s40: '#BDBCBC',
    s50: '#D9D9D9',
  },
  space: {
    quarterUnit: '4px',
    halfUnit: '8px',
    oneUnit: '16px',
    twoUnits: '32px',
    threeUnits: '48px',
  },
  radius: {
    oneUnit: '8px',
    twoUnits: '16px',
    threeUnits: '100%',
  },
  icon: {
    oneUnit: '1.4rem',
    twoUnits: '1.8rem',
    threeUnits: '2.4rem',
  },
  maxWidth: '1500px'
}