import { ReactLenis } from "@studio-freight/react-lenis";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

export default function HorizontalScroll(props) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [progress, setProgress] = useState(0);

  //   useEffect(() => {
  //     //console.log(props.scrollDist);

  //     if (swiperRef) {
  //       swiperRef.setProgress(100);
  //     }
  //   });

  //console.log(props.scrollDist);
  if (props.scrollDist >= 0.543) {
    // console.log();
    swiperRef.setProgress(1 - (0.96 - props.scrollDist) / (0.96 - 0.543));
  }

  return (
    <div style={{ display: "flex", position: "sticky", top: "0vh" }}>
      <Swiper
        onSwiper={(s) => {
          console.log("initialize swiper", s);
          setSwiperRef(s);
        }}
        spaceBetween={0}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        freeMode={true}
        modules={[FreeMode]}
      >
        <SwiperSlide>
          <div style={{ display: "grid", width: "500px" }}>
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=1"
              alt=""
            />
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=2"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "grid" }}>
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=3"
              alt=""
            />
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=4"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "grid" }}>
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=5"
              alt=""
            />
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=6"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "grid" }}>
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=7"
              alt=""
            />
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=8"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "grid" }}>
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=9"
              alt=""
            />
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=10"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "grid" }}>
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=11"
              alt=""
            />
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=12"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "grid" }}>
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=13"
              alt=""
            />
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=14"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "grid" }}>
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=15"
              alt=""
            />
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=16"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "grid" }}>
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=17"
              alt=""
            />
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=18"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "grid" }}>
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=19"
              alt=""
            />
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=20"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "grid" }}>
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=21"
              alt=""
            />
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=22"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "grid" }}>
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=23"
              alt=""
            />
            <img
              style={{ height: "50vh", aspectRatio: "300/200" }}
              src="https://picsum.photos/600/400?random=24"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
