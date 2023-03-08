import "./App.css";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import * as React from "react";
import "./style.css";
import VerticalSticky from "./components/verticalSticky";
import BlobTrack from "./components/blobTrack";
import HorizontalScroll from "./components/horizontalScroll";
import { useState } from "react";

export default function App() {
  const [distance, setDistance] = useState(0);

  useLenis((lenis) => {
    setDistance(lenis.progress);
    //console.log("Current page progress", distance);
  });
  const alignCenter = { display: "flex", alignItems: "center" };

  function ScrollListener() {
    useLenis(({ scroll }) => {
      //console.log("Current scroll position", scroll);
    });

    return null;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: "vertical", // vertical, horizontal
        gestureDirection: "both", // vertical, horizontal, both
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      <div>
        <div id="top">HEADER</div>
        <div style={{ minHeight: "100vh" }} id="blue">
          SECTION
          <BlobTrack />
        </div>

        <div style={{ minHeight: "100vh" }} id="red">
          SECTION
        </div>
        <div style={{ position: "relative", minHeight: "400vh" }} id="red">
          <div
            style={{
              display: "grid",
              position: "absolute",
              gridTemplateColumns: " 1fr 1fr",
              zIndex: 20,
              width: "100vw",
            }}
          >
            <div
              style={{
                marginLeft: "10%",
                marginTop: "100vh",
                height: "250vh",
              }}
            >
              <h1 style={{ position: "sticky", top: "50vh", color: "white" }}>Hello World</h1>
            </div>
            <div style={{ marginTop: "200vh" }}>
              <h1 style={{ color: "white" }}>This is a proof of concept</h1>
            </div>
          </div>
          <VerticalSticky />
        </div>

        <div style={{ height: "600vh" }}>
          <HorizontalScroll scrollDist={distance} />
        </div>
        <div id="bottom">
          <a href="#blue">BACK TO TOP</a>
        </div>
      </div>
      <ScrollListener />
    </ReactLenis>
  );
}
