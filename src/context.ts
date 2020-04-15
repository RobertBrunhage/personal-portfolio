// context.js
import { createContext } from 'react';
import { KontentService } from './services/Kontent/KontentService';
import { Skill } from './models/Skill';
import { Project } from './models/Project';

export interface Services {
    skillKontentService: KontentService<Skill>,
    projectKontentService: KontentService<Project>
}

export const AppContext = createContext<Partial<Services>>({});

export const Provider = AppContext.Provider;
export const Consumer = AppContext.Consumer;