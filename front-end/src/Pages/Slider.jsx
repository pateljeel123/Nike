// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },  // Extra Small Screens (Phones)
          640: { slidesPerView: 2, spaceBetween: 15 },  // Small Screens (Tablets)
          1024: { slidesPerView: 3, spaceBetween: 20 }, // Large Screens (Desktops)
        }}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1880,c_limit/73c4a613-c354-4bd5-9df8-e0cc7705c467/nike-just-do-it.jpg" alt="Slide 1" /> </SwiperSlide>
        <SwiperSlide><img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1880,c_limit/c8263ba6-42f3-47c8-9580-c362736367ba/nike-just-do-it.png" alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1880,c_limit/f42ab353-78a0-4162-85f7-9c6d9cad5afe/nike-just-do-it.png" alt="Slide 3" /></SwiperSlide>
        <SwiperSlide><img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1880,c_limit/548ccaf6-1b5f-421c-8234-ef0b56b6aa1b/nike-just-do-it.png" alt="Slide 4" /></SwiperSlide>
        <SwiperSlide><img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1880,c_limit/4150ed95-006a-4e59-9fec-6503c0b1f752/nike-just-do-it.png" alt="Slide 5" /></SwiperSlide>
        <SwiperSlide><img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1880,c_limit/f1c1e89f-6b14-41e0-80a6-a1332bf01ccc/nike-just-do-it.png" alt="Slide 6" /></SwiperSlide>
        <SwiperSlide><img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1880,c_limit/15f840ee-ecb2-4d30-af30-6ac8893947ce/nike-just-do-it.png" alt="Slide 7" /></SwiperSlide>
        <SwiperSlide><img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1880,c_limit/59a78130-6d08-4bb7-ad13-0d4f8d03e620/nike-just-do-it.png" alt="Slide 8" /></SwiperSlide>
        <SwiperSlide><img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1880,c_limit/32a8910a-96a5-4e36-9fbd-b9b729f56b09/nike-just-do-it.png" alt="Slide 9" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
