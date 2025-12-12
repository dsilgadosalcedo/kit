import { useMemo } from "react";
import { propsToDataAttrs } from "@/lib/utilities";
import "@/components/row/row.css";



interface DdssRowProps extends React.HTMLAttributes<HTMLDivElement> {
  alignItems?: "start" | "center" | "end" | "stretch";
  justifyContent?: "start" | "center" | "end" | "space-between" | "space-around";
  gap?: DdssSizeUnit;
  wrapChildren?: boolean;
  defaultChildBehavior?: "auto-grow" | "auto-shrink" | "ignoreFlexRules" | "ignoreIntrinsicSize";
}

export default function Row(props: DdssRowProps) {
  const {
    children,
    alignItems="start",
    justifyContent="start",
    gap,
    wrapChildren,
    defaultChildBehavior,
    ...restProps
  } = props;

  const ddssRowAttrs = useMemo(
    () =>
      propsToDataAttrs(
        { alignItems, justifyContent, gap, wrapChildren, defaultChildBehavior },
        "row"
      ),
    [alignItems, justifyContent, gap, wrapChildren, defaultChildBehavior]
  );

  return (
    <div {...ddssRowAttrs} {...restProps} data-ddss-component="row">
      {children}
    </div>
  );
}