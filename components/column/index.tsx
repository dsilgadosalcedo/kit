import { useMemo } from "react";
import { propsToDataAttrs } from "@/lib/utilities";
import "@/components/column/column.css";

interface DdssColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  alignItems?: "start" | "center" | "end" | "stretch";
  justifyContent?: "start" | "center" | "end" | "space-between" | "space-around";
  gap?: DdssSizeUnit | "none";
  wrapChildren?: boolean;
  defaultChildBehavior?: "auto-grow" | "auto-shrink" | "ignoreFlexRules" | "ignoreIntrinsicSize";
  children?: React.ReactNode;
}

export default function Column(props: DdssColumnProps) {
  const { children, alignItems="stretch", justifyContent="start", gap, wrapChildren, defaultChildBehavior, ...restProps } = props;

  const ddssColumnAttrs = useMemo(
    () => propsToDataAttrs({ alignItems, justifyContent, gap, wrapChildren, defaultChildBehavior }, "column"),
    [alignItems, justifyContent, gap, wrapChildren, defaultChildBehavior]
  );

  return (
    <div {...ddssColumnAttrs} {...restProps} data-ddss-component="column">
      {children}
    </div>
  );
}
