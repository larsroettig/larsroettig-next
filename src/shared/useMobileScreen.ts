import { useWindowSize } from './useWindowSize';

interface useMobileScreen {
  width?: number;
}

const useMobileScreen = (width = 1024): boolean => {
  const windowSize = useWindowSize();
  return windowSize.width < width;
};

export default useMobileScreen;
