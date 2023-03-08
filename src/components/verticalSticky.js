import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import * as React from "react";
import video from "../media/pexels-rostislav-uzunov-7513671.mp4";

export default function VerticalSticky() {
  return (
    <div style={{ display: "inline-block", position: "sticky", top: "0vh", scrollPaddingTop: "1rem", right: 0 }}>
      <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
        <video autoPlay="true" loop="true" width="100%">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
