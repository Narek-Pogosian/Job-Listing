import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Badge = ({ children }: Props) => {
  return (
    <div className="inline-block px-4 py-1 text-xs font-semibold leading-none tracking-wide capitalize border rounded-full select-none bg-indigo-100/30 text-primary dark:text-white dark:bg-indigo-500/20 border-primary elative whitespace-nowrap">
      {children}
    </div>
  );
};

export default Badge;
