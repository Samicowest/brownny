import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import "@/styles.css";
import Img1 from "@/assets/heroimg1.png";
import Img2 from "@/assets/heroimg2.png";

export default function HeroSlide() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper bg-pink"
      >
        <SwiperSlide className="px-4 md:px-24">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center py-8">
            <div className="w-full md:w-[40%]">
              <h2 className="text-2xl md:text-5xl text-brown tracking-wide py-8 font-extrabold font-kanit text-left">
                Empower Your Hair Journey
              </h2>
              <p className="text-md md:text-lg text-slate-700 text-left leading-relaxed">
                Transform your tresses with premium products designed for every
                curl, wave, and strand. Shop now for hair that shines like you
                do.
              </p>
            </div>
            <div className="overflow-hidden w-full  md:w-[40%] flex items-center justify-center">
              <img src={Img1} className="object-cover w-full" alt="item1" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-4 md:px-24">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center py-8">
            <div className="w-full md:w-[40%]">
              <h2 className="text-2xl md:text-5xl text-brown tracking-wide py-8 font-extrabold font-kanit text-left">
                Where Hair Dreams Come True
              </h2>
              <p className="text-lg text-slate-700 text-left leading-relaxed">
                From root to tip, we’ve got you covered. Discover the secret to
                healthy, gorgeous hair today.
              </p>
            </div>
            <div className="overflow-hidden w-full  md:w-[40%] flex items-center justify-center">
              <img src={Img2} className="object-cover w-full" alt="item2" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-4 md:px-24">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center py-8">
            <div className="w-full md:w-[40%]">
              <h2 className="text-2xl md:text-5xl text-brown tracking-wide py-8 font-extrabold font-kanit text-left">
                Love Your Locks, Every Day
              </h2>
              <p className="text-lg text-slate-700 text-left leading-relaxed">
                Explore our collection of nourishing haircare essentials and
                accessories. Because your hair deserves the best.
              </p>
            </div>
            <div className="overflow-hidden w-full  md:w-[40%] flex items-center justify-center">
              <img src={Img2} className="object-cover w-full" alt="item2" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
