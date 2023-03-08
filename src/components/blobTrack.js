import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import useMeasure from "react-use-measure";
import { useTrail, animated } from "@react-spring/web";
import * as React from "react";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

export default function BlobTrack() {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: slow, //fast
  }));
  const [ref, { left, top }] = useMeasure();

  const handleMouseMove = (e) => {
    api.start({ xy: [e.clientX - left, e.clientY - top] });
  };
  return (
    <div>
      <svg style={{ position: "absolute", width: "0px", height: "0px" }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="20"></feGaussianBlur>
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"></feColorMatrix>
        </filter>
      </svg>
      <div ref={ref} className="hooksMain" onMouseMove={handleMouseMove}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.to(trans) }} />
        ))}
      </div>
    </div>
  );
}
