import { useWindowSize } from './useWindowSize';

interface useMobileScreen {
  width?: number;
}

const useMobileScreen = (width = 1024): boolean | undefined => {
  const windowSize = useWindowSize();
  if (windowSize.width) {
    return windowSize.width < width;
  }
};

export default useMobileScreen;
