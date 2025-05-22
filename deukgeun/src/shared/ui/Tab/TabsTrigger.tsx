import { ReactNode } from 'react';
import { useTabs } from './Tabs';

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
}

export const TabsTrigger = ({ value, children }: TabsTriggerProps) => {
  const { value: current, setValue } = useTabs();

  return (
    <button
      role="tab"
      aria-selected={current === value}
      className={`px-4 py-2 text-sm ${
        current === value ? 'border-b-2 border-purple-600 font-semibold' : 'text-gray-400'
      }`}
      onClick={() => setValue(value)}
    >
      {children}
    </button>
  );
};
