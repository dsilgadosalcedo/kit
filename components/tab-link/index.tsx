import { useMemo } from "react";
import { propsToDataAttrs } from "@/lib/utilities";
import Text from "@/components/text";
import "@/components/tab-link/tab-link.css";

interface DdssTabLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  fontClass?: DdssFontClass;
  indicatorClass?: string;
  children?: React.ReactElement<HTMLDivElement>;
}

export default function TabLink(props: DdssTabLinkProps) {


  const {
    selected = false,
    fontClass = "body",
    indicatorClass = "ddss-indicator",
    children,
    ...restProps
  } = props;


  const dataAttrs = useMemo(
    () => propsToDataAttrs({ selected, fontClass, indicatorClass }, "tab-link"),
    [selected, fontClass, indicatorClass],
  );



  return (
    <div data-ddss-component="tab-link" {...dataAttrs} {...restProps}>
      <div data-ddss-slot="child">
        <Text fontClass={fontClass} style={selected ? { fontWeight: 700 } : {}}>
          {children}
        </Text>
      </div>
      <div className={indicatorClass}></div>
    </div>
  );
}
