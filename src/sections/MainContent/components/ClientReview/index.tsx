import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";
import { clientData } from "./utils";
import { Card } from "./Card";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "./styles.css";
import "swiper/css";

export const ClientReview = () => {
  return (
    <div className="client-review container">
      <h1 className="title">What Client Say</h1>
      <Swiper
        modules={[Pagination, EffectCoverflow]}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 90,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {clientData.map((data) => (
          <SwiperSlide key={data.id}>
            <Card {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
