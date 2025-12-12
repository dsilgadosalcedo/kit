import type { ReactNode } from "react";

interface TabContentProps {
  children: ReactNode;
}

export default function TabContent({ children }: TabContentProps) {
  return <div data-ddss-component="tab-content">{children} </div>;
}
