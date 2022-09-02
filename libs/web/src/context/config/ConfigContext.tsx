import {createContext} from 'react';
import {ConfigContext, defaultConfigContext} from './ConfigContext.types';

export const configContext = createContext<ConfigContext>(defaultConfigContext);
