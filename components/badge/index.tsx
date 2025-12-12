import Icon from "@/components/icon";
import { getOnToken } from "@/lib/colorUtils";
import { IconName } from "lucide-react/dynamic";
import "@/components/badge/badge.css";

export interface DdssBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: IconName;
  color?: DdssColorWithOnToken;
  scale?: "md" | "lg";
  iconStrokeWidth?: number;
  scrim?: boolean;
}

/**
 * A badge component that displays an icon with customizable appearance.
 *
 * @param icon - The name of the icon to display. Defaults to "roller-coaster".
 * @param color - Any DdssColorWithOnToken value to set the badge color. Defaults to "surface".
 * @param scale - The size scale of the badge. Defaults to "md".
 * @param iconStrokeWidth - The stroke width of the icon. Defaults to 1.
 * @param restProps - Additional props to be spread onto the root div element.
 * @returns A JSX element representing the badge component.
 */
export default function Badge({
  icon = "roller-coaster",
  color = "surface",
  scale = "md",
  iconStrokeWidth = 1.5,
  scrim = false,
  ...restProps
}: DdssBadgeProps) {
  const iconColor = getOnToken(color) as DdssColor;

  /** Dynamically set default iconStrokeWidth based on provided scale, if provided */
  let defaultIconStrokeWidth;

  switch (scale) {
    case "lg":
      defaultIconStrokeWidth = 1;
      break;
    case "md":
    default:
      defaultIconStrokeWidth = 1.5;
      break;
  }

  return (
    <div data-ddss-component="badge" data-ddss-badge-scale={scale} data-ddss-badge-color={`ddss-${color}`} {...restProps}>
      <div data-ddss-component="slot" data-ddss-slot="icon">
        <div data-ddss-icon-element="wrapper">
          <Icon name={icon} color={iconColor} strokeWidth={iconStrokeWidth || defaultIconStrokeWidth}></Icon>
        </div>
      </div>
      {scrim && <div data-ddss-component="badge-scrim" className={`bg-${iconColor}`}></div>}
    </div>
  );
}
