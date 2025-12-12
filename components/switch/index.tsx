"use client";
import { useState } from "react";

// import "@/components/switch/switch.css";
import { getOnToken } from "@/lib/colorUtils";

export interface DdssSwitchProps {
  onClick?: (switchIsOn?: boolean) => void;
  offColor?: DdssColorWithOnToken;
  onColor?: DdssColorWithOnToken;
  value?: boolean;
}

export default function Switch({ onClick, offColor = "surfacevariant", onColor = "primary", value }: DdssSwitchProps) {
  const [switchIsOn, setSwitchIsOn] = useState(value ? value : false);

  const switchThumbOffColor = getOnToken(offColor);
  const switchThumbOnColor = getOnToken(onColor);

  /**
   * Effect to call the onClick function passed from parent, if it exists.
   * Need to use an effect hook to avoid disrupting switch's native state change behavior
   * and to ensure the onClick function is called after the switch state has changed.
   * Always passes the current state of the switch, but the parent function can choose to ignore it.
   */

  function handleClick(newSwitchState: boolean) {
    const prevState = switchIsOn;

    setSwitchIsOn(newSwitchState);

    if (onClick) {
      // Call the onClick function with the previous state
      onClick(!prevState);
    }
  }

  return (
    <>
      <div
        data-ddss-component="switch"
        onClick={() => handleClick(!switchIsOn)}
        data-ddss-switch-state={switchIsOn ? "on" : "off"}
      >
        <div data-ddss-component="switch-thumb" data-ddss-switch-state={switchIsOn ? "on" : "off"}></div>
      </div>
      <style jsx>{`
        [data-ddss-component="switch"] {
          position: relative;
          display: block;
          align-items: center;
          justify-content: start;
          width: var(--ddss-size-xl);
          height: calc(var(--ddss-size-md) + calc(var(--ddss-size-2xs) * 2));
          background-color: var(--ddss-${offColor});
          border-radius: 100em;

          &[data-ddss-switch-state="on"] {
            background-color: var(--ddss-${onColor});
          }
        }

        [data-ddss-component="switch-thumb"] {
          position: absolute;
          top: 50%;
          left: var(--ddss-size-2xs);
          right: auto;
          width: var(--ddss-size-md);
          height: var(--ddss-size-md);
          border-radius: 50%;
          background-color: var(--ddss-${switchThumbOffColor});
          transform: translateY(-50%);
          transition: left 0.1s ease-out;
        }

        [data-ddss-component="switch-thumb"][data-ddss-switch-state="on"] {
          left: calc(100% - calc(var(--ddss-size-md) + var(--ddss-size-2xs)));
          background-color: var(--ddss-${switchThumbOnColor});
        }
      `}</style>
    </>
  );
}
