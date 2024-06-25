import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Graph from './Graph';
// import 'swiper/css/scrollbar';

export default function GraphCarousel(){
    return(
        <>
            <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                900: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1100: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='max-w-[100vw] p-1'
            >
            <SwiperSlide>
                <Graph />
            </SwiperSlide>
            <SwiperSlide>
                <Graph />
            </SwiperSlide>
            <SwiperSlide>
                <Graph />
            </SwiperSlide>
            <SwiperSlide>
                <Graph />
            </SwiperSlide>
            <SwiperSlide>
                <Graph />
            </SwiperSlide>
            <SwiperSlide>
                <Graph />
            </SwiperSlide>
            </Swiper>
        </>
    )
}