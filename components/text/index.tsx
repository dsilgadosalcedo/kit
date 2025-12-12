import { ElementType, JSX } from "react";

type DdssSemanticTag = keyof JSX.IntrinsicElements;

export interface DdssTextProps extends React.HTMLAttributes<HTMLElement> {
  fontClass?: DdssFontClass;
  content?: string;
  color?: DdssColor;
  tag?: DdssSemanticTag;
  className?: string; // explicitly extracting because internal logic controls its rendering order
}

export default function Text({
  tag = "div",
  fontClass,
  color,
  children,
  style,
  className,
  ...restProps
}: DdssTextProps) {
  const Tag = tag as ElementType;

  /**Temporarily removing the attr spreader because it's not being used */
  // const textAttrs = useMemo(() => propsToDataAttrs(restProps, "text"), [restProps]);

  return (
    <Tag
      data-ddss-component="text"
      className={`${fontClass || ""} ${color ? "color-" + color : ""} ${className || ""}`}
      style={style}
      {...restProps}
    >
      {children}
    </Tag>
  );
}
