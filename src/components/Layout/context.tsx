import { createContext, ReactNode, useContext } from 'react';

export interface AppLayoutContextInteface {
  leftMenus?: ReactNode;
  rightMenus?: ReactNode;
  center?: ReactNode;
  aside?: ReactNode;
  mediaQuery?: {
    mobile: boolean;
    desktop: boolean;
  };
  handleGoBack?: () => void;
  handleGoNext?: () => void;
}

const AppLayoutContext = createContext({
  mediaQuery: {
    mobile: false,
    desktop: false,
  },
  handleGoBack: () => {},
  handleGoNext: () => {},
  aside: () => '',
} as AppLayoutContextInteface);

AppLayoutContext.displayName = 'AppLayoutContext';

export default AppLayoutContext;

export const useAppContext = () => {
  const { mediaQuery } = useContext(AppLayoutContext);
  return {
    mediaQuery: mediaQuery ?? {
      mobile: false,
      desktop: false,
    },
  };
};
