import "@/components/state-layer/state-layer.css";

export interface DdssStateLayerProps {
  bgColor?: DdssColor | "currentColor";
  forcedState?: "hover" | "active" | "focus"; // Used when you need a static state controlled by something higher, like a select field that keeps actively-selected options grayed out
}

export default function StateLayer({ bgColor = "currentColor", forcedState }: DdssStateLayerProps) {


  return (
    <>
      <div
        data-ddss-component="state-layer"
        className={bgColor !== "currentColor" ? `bg-${bgColor}` : ""}
        style={bgColor === "currentColor" ? { backgroundColor: "currentColor" } : {}}
        {...(forcedState && { "data-ddss-forced-state": forcedState })}
      ></div>
    </>
  );
}
