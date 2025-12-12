"use client";
import { propsToDataAttrs } from "@/lib/utilities";
import { useMemo } from "react";

/** DdssMatProps is an object of any of the given types. Each material type has different unique props. */
type DdssMatProps = DdssMatProps_Glass | DdssMatProps_Flat;

type DdssMatProps_Glass = {
  thickness?: "thick" | "normal" | "thin"; // Thickness of the glass material. Thicker material blurs more.
  tint?: DdssColor; // Optional tint color for the glass material.
  tintOpacity?: number; // Optional opacity for the tint color. Defaults to 0.5.
  light?: boolean; // Optional. If true, adds a secondary layer for luminance effects.
  lightExpression?: string; //Optional. The value to pass to the light's background css property. Should be a gradient.
};

type DdssMatProps_Flat = {
  bgColor?: DdssColorWithOnToken;
  textColor?: DdssColor;
};

type DdssMaterialType = "flat" | "glass" | "debug";

interface DdssMaterialLayerProps extends React.HTMLAttributes<HTMLDivElement> {
  zIndex?: number; // Optional z-index for the material layer. Different use cases might need it to be at different z-indexes.
  type?: DdssMaterialType;
  materialProps?: DdssMatProps; // Optional material-specific properties
}

export default function MaterialLayer({
  zIndex = 0,
  type,
  materialProps,
}: DdssMaterialLayerProps) {
  /**Commented out, was likely used for debugging */

  // switch (material) {
  //   case "glass":
  //     break;
  //   case "debug":
  //     break;
  // }

  return (
    <>
      <div
        data-ddss-component="material-layer"
        data-ddss-material-type={type}
        style={{ zIndex: zIndex }}
      >
        {type === "glass" && (
          <div>
            <div data-ddss-material-sublayer="texture">
              {(materialProps as DdssMatProps_Glass)?.tint && (
                <div data-ddss-material-sublayer="tint">
                  {(materialProps as DdssMatProps_Glass)?.light && (
                    <div data-ddss-material-sublayer="light"></div>
                  )}
                </div>
              )}
            </div>
            <div data-ddss-material-sublayer="base-glass-fill"></div>
          </div>
        )}

        {type === "flat" && (
          <div>
            <div data-ddss-material-sublayer="bgColor"></div>
          </div>
        )}
      </div>

      <style jsx>
        {`
          [data-ddss-component="material-layer"] {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;

            [data-ddss-material-sublayer] {
              position: absolute;
              inset: 0;
              pointer-events: none;
            }
          }
        `}
      </style>

      {/** Glass behavior */}

      <style jsx>{`
        [data-ddss-material-type="glass"] {
          [data-ddss-material-sublayer="tint"] {
            opacity: ${(materialProps as DdssMatProps_Glass)?.tintOpacity || 0.2};
            background-color: var(
              --ddss-${(materialProps as DdssMatProps_Glass)?.tint || "transparent"}
            );
          }

          [data-ddss-material-sublayer="texture"] {
            --blur-thick: var(--ddss-size-lg);
            --blur-normal: var(--ddss-size-md);
            --blur-thin: var(--ddss-size-xs);

            z-index: 1;
            isolation: isolate;
            backdrop-filter: blur(
              var(
                --blur-${(materialProps as DdssMatProps_Glass)?.thickness ||
                  "normal"}
              )
            );
          }

          [data-ddss-material-sublayer="light"] {
            background: ${(materialProps as DdssMatProps_Glass)
              ?.lightExpression || "none"};
            mix-blend-mode: soft-light;
            opacity: 1;
          }

          [data-ddss-material-sublayer="base-glass-fill"] {
            background-color: var(--ddss-surface);
            opacity: ${getGlassFillOpacity(
              (materialProps as DdssMatProps_Glass)?.thickness || "normal",
            )};
          }
        }
        [data-ddss-material-type="flat"] {
          [data-ddss-material-sublayer="bgColor"] {
            background-color: ${getBgColor(
              (materialProps as DdssMatProps_Flat)?.bgColor,
            )};
          }
        }
      `}</style>
    </>
  );
}

function getGlassFillOpacity(thickness: "thick" | "normal" | "thin") {
  switch (thickness) {
    case "thick":
      return 0.8;
    case "normal":
      return 0.6;
    case "thin":
      return 0.4;
    default:
      return 0.6;
  }
}

function getBgColor(token: DdssColorWithOnToken | undefined) {
  if (token) {
    return `var(--ddss-${token})`;
  } else {
    return `var(--ddss-surface)`;
  }
}
