/**
 * A customizable image component with built-in aspect ratio, sizing, and styling options.
 * 
 * @param aspect - The aspect ratio of the image. Defaults to "auto"
 * @param borderRadius - The border radius size unit or "none"/"zero". Defaults to undefined
 * @param objectFit - CSS object-fit property value. Defaults to "fill"
 * @param width - Width size unit or "auto". Defaults to "auto"
 * @param height - Height size unit or "auto". Defaults to "auto"
 * @param rest - Additional HTML img element attributes
 * 
 * @returns A styled img element with data attributes for CSS styling
 */
import { useMemo } from "react";
import { propsToDataAttrs } from "@/lib/utilities";
import "@/components/image/image.css";

type DdssAspectRatio =
  | "auto"
  | "1/1"
  | "2.39/1"
  | "2/1"
  | "16/9"
  | "3/2"
  | "4/3"
  | "5/4"
  | "1/2.39"
  | "1/2"
  | "9/16"
  | "4/5";

type DdssSizeUnit =
  | "3xs"
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

type DdssImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  aspect?: DdssAspectRatio;
  borderRadius?: DdssSizeUnit | "none" | "zero" | undefined;
  objectFit?: React.CSSProperties["objectFit"];
  width?: DdssSizeUnit | "auto";
  height?: DdssSizeUnit | "auto";
};

export default function Image({
  aspect = "auto",
  borderRadius = undefined,
  objectFit = "fill",
  width = "auto",
  height = "auto",
  ...rest
}: DdssImageProps) {
  const attrs = useMemo(
    () =>
      propsToDataAttrs(
        { aspect, borderRadius, objectFit, width, height },
        "image",
      ),
    [aspect, borderRadius, objectFit, width, height],
  );

  return <img data-ddss-component="image" {...attrs} {...rest} alt="" />;
}
