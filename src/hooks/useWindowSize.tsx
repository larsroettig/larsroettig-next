import { useState, useEffect } from 'react';

interface WindowSize {
  width: number | null;
  height: number | null;
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: null,
    height: null,
  });

  useEffect(() => {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
};
