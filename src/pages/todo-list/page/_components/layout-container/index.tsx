import { memo, ReactNode } from 'react';

type PropsType = {
  className?: string;
  children: ReactNode;
};

export const MainLayoutCard = memo(({ className, children }: PropsType) => (
  <main className={`${' todo layout classname '} ${className}`}>
    {children}
  </main>
));
