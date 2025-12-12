import { useMemo } from "react";
import { propsToDataAttrs } from "@/lib/utilities";
import "@/components/section/section.css";

type SpacingSize = "xs" | "sm" | "md" | "lg" | "xl" | "none";

interface DdssSectionProps extends React.HTMLAttributes<HTMLElement> {
  padding?: SpacingSize;
  container?: React.ReactNode;
  px?: SpacingSize;
  py?: SpacingSize;
  pt?: SpacingSize;
  pb?: SpacingSize;
  pl?: SpacingSize;
  pr?: SpacingSize;
  children?: React.ReactNode;
}

export default function Section(props: DdssSectionProps) {
  /**TODO:  Give section default padding of "md" */
  const { container, children, padding, px, py, pt, pb, pl, pr, ...restProps } = props;

  const ddssSectionAttrs = useMemo(
    () => propsToDataAttrs({ container, children, padding, px, py, pt, pb, pl, pr }, "section"),
    [container, children, padding, px, py, pt, pb, pl, pr]
  );

  return (
    <section {...ddssSectionAttrs} {...restProps}>
      <div data-ddss-component="section">{container || children}</div>
    </section>
  );
}
