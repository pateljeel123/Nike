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
        <SwiperSlide><img className='btn-image'  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_555,c_limit/a3c971bc-bc0a-4c0c-8bdf-e807a3027e53/nike-just-do-it.jpg" alt="Slide 1" /> <button style={{height:"35px",width:"90px"}} className='btn-shop'>Running</button></SwiperSlide>
        <SwiperSlide><img className='btn-image' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_555,c_limit/e4695209-3f23-4a05-a9f9-d0edde31b653/nike-just-do-it.jpg" alt="Slide 2" /> <button className='btn-shop'>Football</button></SwiperSlide>
        <SwiperSlide><img className='btn-image' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_555,c_limit/38ed4b8e-9cfc-4e66-9ddd-02a52314eed9/nike-just-do-it.jpg" alt="Slide 3" /><button className='btn-shop'>Basketball</button></SwiperSlide>
        <SwiperSlide><img className='btn-image' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_555,c_limit/e36a4a2b-4d3f-4d1c-bc75-d6057b7cec87/nike-just-do-it.jpg" alt="Slide 4" /><button style={{height:"35px",width:"160px"}} className='btn-shop'>Training and Gym</button></SwiperSlide>
        <SwiperSlide><img className='btn-image' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_555,c_limit/7ce96f81-bf80-45b9-918e-f2534f14015d/nike-just-do-it.jpg" alt="Slide 5" /><button className='btn-shop'>Tennis</button></SwiperSlide>
        <SwiperSlide><img className='btn-image' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_555,c_limit/6be55ac6-0243-42d6-87d0-a650074c658c/nike-just-do-it.jpg" alt="Slide 6" /><button className='btn-shop'>Yoga</button></SwiperSlide>
        <SwiperSlide><img className='btn-image' src="http://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_555,c_limit/608705dc-dea5-4450-b68f-e624cf1ed2a7/nike-just-do-it.jpg" alt="Slide 7" /><button style={{height:"35px",width:"130px"}} className='btn-shop'>Skateboarding </button></SwiperSlide>
        <SwiperSlide><img className='btn-image' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_555,c_limit/c779e4f6-7d91-46c3-9282-39155e0819e5/nike-just-do-it.jpg" alt="Slide 8" /><button className='btn-shop'>Dance</button></SwiperSlide>
        </Swiper>
    </div>
  );
}
