import { ReactNode } from 'react';

export const TabsList = ({ children }: { children: ReactNode }) => {
  return <div className="flex border-b">{children}</div>;
};
