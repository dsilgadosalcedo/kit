export {};

declare global {
  type DdssHeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  type DdssSemanticTag = keyof JSX.IntrinsicElements;
}
