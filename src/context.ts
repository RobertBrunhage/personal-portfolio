// context.js
import { createContext } from 'react';
import { KontentService } from './services/Kontent/KontentService';
import { Skill } from './models/Skill';

interface Services {
    skillKontentService: KontentService<Skill>
}

export const AppContext = createContext<Partial<Services>>({});

export const Provider = AppContext.Provider;
export const Consumer = AppContext.Consumer;