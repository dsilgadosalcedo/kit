export {};

declare global {
  type DdssMaterial = "flat" | "glass" | "rubber";

  /** DdssMatProps is an object of any of the given types. Each material type has different unique props. */
  type DdssMatProps = DdssMatProps_Glass | DdssMatProps_Flat;

  type DdssMatProps_Glass = {
    thickness?: "thick" | "normal" | "thin"; // Thickness of the glass material. Thicker material blurs more.
    tint?: DdssColor; // Optional tint color for the glass material.
    tintOpacity?: number; // Optional opacity for the tint color. Defaults to 0.5.
    light?: boolean; // Optional. If true, adds a secondary layer for luminance effects.
    lightExpression?: string; //Optional. The value to pass to the light's background prop. Should be a gradient.
  };

  type DdssMatProps_Flat = {
    color?: DdssColor; // Color of the flat material.
    opacity?: number; // Opacity of the flat material. Defaults to 1.
  };
}
