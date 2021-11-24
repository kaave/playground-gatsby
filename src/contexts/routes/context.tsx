import { Routes } from '@gen/Routes';
import type { ReactNode } from 'react';
import React, { createContext, useContext } from 'react';

const routes = createContext(Routes);

export const RoutesProvider = ({ children }: { children: ReactNode }) => (
  <routes.Provider value={Routes}>{children}</routes.Provider>
);

export function useRoutes(): typeof Routes {
  return useContext(routes);
}
