import { useMemo } from "react";
import { propsToDataAttrs } from "@/lib/utilities";
import "@/components/container/container.css";

interface DdssContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: DdssContainerWidth;
}

export default function Container(props: DdssContainerProps) {
  const { maxWidth = "md", children, ...restProps } = props;
  
  const dataAttrs = useMemo(
    () => propsToDataAttrs({ maxWidth }, "container"),
    [maxWidth],
  );

  return (
    <div {...dataAttrs} {...restProps}>
      {children}
    </div>
  );
}
