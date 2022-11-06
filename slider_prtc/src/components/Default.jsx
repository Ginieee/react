import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";

function Default(props) {
    return (
        <>
            <Swiper className='mySwiper'>
                <SwiperSlide>Slide1</SwiperSlide>
                <SwiperSlide>Slide2</SwiperSlide>
                <SwiperSlide>Slide3</SwiperSlide>
                <SwiperSlide>Slide4</SwiperSlide>
                <SwiperSlide>Slide5</SwiperSlide>
                <SwiperSlide>Slide6</SwiperSlide>
                <SwiperSlide>Slide7</SwiperSlide>
            </Swiper>
        </>
    );
}

export default Default;