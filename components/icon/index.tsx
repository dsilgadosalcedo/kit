import { DynamicIcon } from "lucide-react/dynamic";
import type { IconName } from "lucide-react/dynamic";
import "@/components/icon/icon.css";

export interface DdssIconProps extends React.HTMLAttributes<HTMLElement> {
  name?: IconName;
  fontClass?: Exclude<DdssFontClass, `${string}-bold` | `${string}-mono`>;
  color?: DdssColor | "currentColor";
  display?: "block" | "inline-block" | "inline";
  strokeWidth?: number;
  opticShift?: boolean; //if true, pulls icon slightly upward
}

export default function Icon({
  name = "roller-coaster",
  fontClass,
  color = "onsurface",
  strokeWidth = 2,
  opticShift = false,
  ...restProps
}: DdssIconProps) {
  return (
    <div data-ddss-component="icon" data-ddss-icon-offset={opticShift} {...restProps} data-ddss-icon-font-class={fontClass} >
      <DynamicIcon name={name} width="1em" height="1em" color={`var(--ddss-${color})`} strokeWidth={strokeWidth} />
    </div>
  );
}
