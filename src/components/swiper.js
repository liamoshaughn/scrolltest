import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

export default function Swiper() {
  return (
    <swiper-container class="mySwiper" free-mode="true">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper-container>
  );
}
