import React, { Provider } from 'react';

export function createContext<T extends unknown | null>(): readonly [() => T & ({} | null), Provider<T | undefined>] {
  const context = React.createContext<T | undefined>(undefined);

  const useContext = () => {
    const c = React.useContext(context);

    if (c === undefined) throw new Error('No context value found. Missing provider?');

    return c;
  };

  return [useContext, context.Provider] as const;
}
