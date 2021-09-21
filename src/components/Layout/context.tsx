import { createContext, ReactNode } from 'react';

export interface AppLayoutContextInteface {
  handleGoBack?: () => void;
  handleGoNext?: () => void;
  leftMenus?: ReactNode;
  rightMenus?: ReactNode;
  center?: ReactNode;
  aside: ReactNode;
}

const AppLayoutContext = createContext({
  handleGoBack: () => {},
  handleGoNext: () => {},
  aside: () => '',
} as AppLayoutContextInteface);

AppLayoutContext.displayName = 'AppLayoutContext';

export default AppLayoutContext;
