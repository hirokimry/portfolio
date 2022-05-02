import { createContext, useState, useCallback } from "react";

/* Context Type */
type ThemeContext = {
  headerHeight: number;
  setIsHeaderHeight: (isHeaderHeight: number) => void;
};

/* Default(init) */
const defaultContext: ThemeContext = {
  headerHeight: 0,
  setIsHeaderHeight: () => {},
};

/* Context Object */
export const headerHeightContext = createContext(defaultContext);

/* Custom Hook */
export const useHeaderHeight = (): ThemeContext => {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const setIsHeaderHeight = useCallback((current: number): void => {
    setHeaderHeight(current);
  }, []);

  return {
    headerHeight,
    setIsHeaderHeight,
  };
};
