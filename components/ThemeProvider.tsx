'use client';

import { createContext, useContext, useEffect } from 'react';

type Theme = 'dark';

interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({ theme: 'dark', toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Dark mode only — ensure class is always present (layout also sets it statically)
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('ow-theme', 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'dark', toggle: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}
