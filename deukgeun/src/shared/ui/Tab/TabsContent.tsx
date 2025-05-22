import { ReactNode } from 'react';
import { useTabs } from './Tabs';

interface TabsContentProps {
  value: string;
  children: ReactNode;
}

export const TabsContent = ({ value, children }: TabsContentProps) => {
  const { value: current } = useTabs();

  return current === value ? <div className="mt-4">{children}</div> : null;
};
